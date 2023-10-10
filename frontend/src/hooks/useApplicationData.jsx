import { useReducer, useEffect, useRef } from "react";

const ACTIONS = {
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SHOW_PHOTO_DETAILS: 'SHOW_PHOTO_DETAILS',
  REMOVE_PHOTO_DETAILS: 'REMOVE_PHOTO_DETAILS',
  SET_FAVORITE_PHOTOS: 'SET_FAVORITE_PHOTOS',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.value };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.value };

    case ACTIONS.SHOW_PHOTO_DETAILS:
      return { ...state, selectedPhoto: action.value };

    case ACTIONS.REMOVE_PHOTO_DETAILS:
      return { ...state, selectedPhoto: null };

    case ACTIONS.SET_FAVORITE_PHOTOS:
      return { ...state, favoritePhotos: action.value };

    case ACTIONS.TOGGLE_FAVORITE:
      const isFavorite = state.favoritePhotos.find((photo) => photo.id === action.id);
      if (isFavorite) {
        return {
          ...state,
          favoritePhotos: state.favoritePhotos.filter((photo) => photo.id !== action.id),
        };
      } else {
        const photo = { ...state.photoData.find((photo) => photo.id === action.id) };
        return {
          ...state,
          favoritePhotos: [...state.favoritePhotos, photo],
        };
      }

    default:
      throw new Error(
        `Unsupported action type: ${action.type}`
      );
  }
}


// GENERIC FETCH/STORE FUNCTION
const fetchData = (url, localStorageKey, setDataFunction) => {
  const storedData = localStorage.getItem(localStorageKey);
  if (storedData) {
    setDataFunction(JSON.parse(storedData));
    return;
  }

  fetch(url)
    .then(res => res.json())
    .then(data => {
      setDataFunction(data);
      localStorage.setItem(localStorageKey, JSON.stringify(data));
    })
    .catch(error => {
      console.log(`Error fetching data from "${url}": ${error}`);
    });
};


// Keys for Local Storage
const STORAGE_KEYS = {
  PHOTOS_FOR_TOPIC: "PHOTOS_FOR_TOPIC",
  ALL_PHOTOS: "ALL_PHOTOS",
  TOPICS: "TOPICS",
  FAVORITE_PHOTOS: 'FAVORITE_PHOTOS'
};


const initialState = {
  photoData: [],
  topicData: [],
  selectedPhoto: null,
  favoritePhotos: [],
};

// CUSTOM HOOK
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const justMounted = useRef(true);

  // Fetch and store all photos
  useEffect(() => {
    fetchData("/api/photos", STORAGE_KEYS.ALL_PHOTOS, setPhotoData);
  }, []);


  // Fetch and store topics
  useEffect(() => {
    fetchData("/api/topics", STORAGE_KEYS.TOPICS, setTopicData);
  }, []);


  // Load favorite photos from storage
  useEffect(() => {
    const storedFavorites = localStorage.getItem(STORAGE_KEYS.FAVORITE_PHOTOS);

    // Load favorites only when the component mounts
    if (justMounted.current && storedFavorites) {
      setFavoritePhotos(JSON.parse(storedFavorites));
      justMounted.current = false;
      return;
    }

    // Store favorites only when there's a change
    if (storedFavorites !== JSON.stringify(state.favoritePhotos)) {
      localStorage.setItem(STORAGE_KEYS.FAVORITE_PHOTOS, JSON.stringify(state.favoritePhotos));
    }
  }, [state.favoritePhotos]);


  // CONVENIENCE METHODS FOR DISPATCHING ACTIONS
  const setPhotoData = (value) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, value });
  const setTopicData = (value) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, value });
  const setFavoritePhotos = (value) => dispatch({ type: ACTIONS.SET_FAVORITE_PHOTOS, value });
  const showPhotoDetails = (value) => dispatch({ type: ACTIONS.SHOW_PHOTO_DETAILS, value });
  const removePhotoDetails = () => dispatch({ type: ACTIONS.REMOVE_PHOTO_DETAILS });
  const setPhotosByTopics = (id) => {
    fetchData(`/api/topics/photos/${id}`, `${STORAGE_KEYS.PHOTOS_FOR_TOPIC}_${id}`, setPhotoData);
  };
  const toggleFavorite = (id) => dispatch({ type: ACTIONS.TOGGLE_FAVORITE, id });


  return {
    ...state,
    showPhotoDetails,
    removePhotoDetails,
    setPhotosByTopics,
    toggleFavorite
  };
};

export default useApplicationData;