# Photolabs
Welcome to Photolabs! This website was made as part of my Full Stack Web Development bootcamp at Lighthouse Labs.
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
* @testing-library/jest-dom: Provides custom jest matchers to test the state of the DOM.
Version: ^5.16.5
* @testing-library/react: Lightweight solution for testing React components.
Version: ^13.4.0
* @testing-library/user-event: Simulate user events for testing purposes.
Version: ^13.5.0
* react: JavaScript library for building user interfaces.
Version: ^18.2.0
* react-dom: Serves as the entry point to the DOM and server renderers for React.
Version: ^18.2.0
* react-router-dom: DOM bindings for React Router, aiding in navigation.
Version: ^6.16.0
* react-scripts: Scripts and configuration used by Create React App.
Version: 5.0.1
* web-vitals: Helps to measure and report on web vitals for performance enhancement.
Version: ^2.1.4

### Backend
* body-parser: Middleware to parse incoming request bodies in a middleware before the handlers.
Version: ^1.18.3
* cors: Middleware that can be used to enable CORS with various options.
Version: ^2.8.5
* dotenv: Zero-dependency module that loads environment variables from a .env file into process.env.
Version: ^7.0.0
* express: Fast, unopinionated, minimalist web framework for Node.js.
Version: ^4.16.4
* helmet: Helps secure Express apps with various HTTP headers.
Version: ^3.18.0
* pg: Non-blocking PostgreSQL client for Node.js.
Version: ^8.5.0
* socket.io: Enables real-time bidirectional event-based communication.
Version: ^2.2.0
* ws: Simple WebSocket library for Node.js.
Version: ^7.0.0
