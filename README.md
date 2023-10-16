# Photolabs: A React-based Photo Browsing App
Welcome to Photolabs! This website was made as part of my Full Stack Web Development bootcamp at Lighthouse Labs.
<br/><br/>
Photolabs is a minimalist photography website where you can see photos shared by some really cool photographers. The website loads all photos at first, and from there you can drill down by category.

!["Screenshot of Photolabs - Desktop View"](https://github.com/tusharhchhabra/photolabs-starter/blob/main/screenshot.jpg?raw=true)

## Overview
PhotoLabs allows users to:

* View photos fetched from an API.
* Navigate through photos from various topics.
* Get a closer look at any photo and explore similar ones.
* Like their favorite photos.
* Get notified of the photos they've liked.

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## Dependencies

### Frontend
* @testing-library/jest-dom
* @testing-library/react
* @testing-library/user-event
* react
* react-dom
* react-router-dom
* react-scripts
* web-vitals

### Backend
* body-parser
* cors
* dotenv
* express
* helmet
* pg
* socket.io
* ws
