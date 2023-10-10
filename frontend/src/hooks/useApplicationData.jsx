import { useReducer, useEffect } from "react";

const ACTIONS = {
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SHOW_PHOTO_DETAILS: 'SHOW_PHOTO_DETAILS',
  REMOVE_PHOTO_DETAILS: 'REMOVE_PHOTO_DETAILS',
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


const initialState = {
  photoData: [],
  topicData: [],
  selectedPhoto: null,
  favoritePhotos: [],
};

const STORAGE_KEYS = {
  PHOTOS_FOR_TOPIC: "PHOTOS_FOR_TOPIC",
  ALL_PHOTOS: "ALL_PHOTOS",
  TOPICS: "TOPICS"
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch and store all photos
  useEffect(() => {
    const storedPhotos = localStorage.getItem(STORAGE_KEYS.ALL_PHOTOS);
    if (storedPhotos) {
      setPhotoData(JSON.parse(storedPhotos));
      return;
    }

    fetch("/api/photos")
      .then(res => res.json())
      .then(photos => {
        setPhotoData(photos);
        localStorage.setItem(STORAGE_KEYS.ALL_PHOTOS, JSON.stringify(photos));
      })
      .catch(error => {
        console.log(`Error fetching photos: ${error}`);
      });
  }, []);


  // Fetch and store topics
  useEffect(() => {
    const storedTopics = localStorage.getItem(STORAGE_KEYS.TOPICS);
    if (storedTopics) {
      setTopicData(JSON.parse(storedTopics));
      return;
    }

    fetch("/api/topics")
      .then(res => res.json())
      .then(topics => {
        setTopicData(topics);
        localStorage.setItem(STORAGE_KEYS.TOPICS, JSON.stringify(topics));
      })
      .catch(error => {
        console.log(`Error fetching topics: ${error}`);
      });
  }, []);


  // Methods to easily access dispatch functions
  const setPhotoData = (value) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, value });
  const setTopicData = (value) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, value });
  const showPhotoDetails = (value) => dispatch({ type: ACTIONS.SHOW_PHOTO_DETAILS, value });
  const removePhotoDetails = () => dispatch({ type: ACTIONS.REMOVE_PHOTO_DETAILS });

  const setPhotosByTopics = (id) => {
    const storedPhotosForTopic = localStorage.getItem(`${STORAGE_KEYS.PHOTOS_FOR_TOPIC}_${id}`);
    if (storedPhotosForTopic) {
      console.log();
      setPhotoData(JSON.parse(storedPhotosForTopic));
      return;
    }

    fetch(`/api/topics/photos/${id}`)
      .then(res => res.json())
      .then(photosForTopic => {
        setPhotoData(photosForTopic);
        localStorage.setItem(
          `${STORAGE_KEYS.PHOTOS_FOR_TOPIC}_${id}`, JSON.stringify(photosForTopic)
        );
      })
      .catch(error => {
        console.log(`Error fetching photos for topic id ${id}: ${error}`);
      });
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