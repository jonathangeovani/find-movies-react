# Find Movies React

<figure align="center">
    <img src="public/images/home_screenshot.png" alt="Movie example screenshot" width="360" style="margin-top:20px">
    <figcaption>Home Page Screenshot</figcaption>
</figure>

Find Movies is a a movie search website developed in React.js that allows users to search for information about their favorite movies. The application consumes data from [The Movie Database API (TMDb)](https://developer.themoviedb.org/docs) API to provide accurate and up-to-date movie details.

Check the app: [Find Movies React](https://find-movies-react.netlify.app)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)

## Features

- **Movie Search**: Search for movies and animations by title.
- **Movie Details**: View details about the movie, including synopsis, cast, trailer and more.
- **Cast Details**: View details about the cast, including biography, birthday, movies and more.
- **Multiple Languages**: Can choose between English and Portuguese.
- **Responsive Design**: The application is designed to be responsive and work on mobile devices, tablets, and desktops.

<figure align="center">
    <img src="public/images/movie_example_screenshot.png" alt="Movie example screenshot" width="360" style="margin-top:20px">
    <figcaption>Movie Details Page Screenshot</figcaption>
</figure>

## Technologies Used

- **Vite.js**: The fast frontend build tool for modern web development.
- **React.js**: The JavaScript library for building the user interface.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **SASS**: A preprocessor that is compiled into CSS.
- **React Query**: For efficient and powerful data fetching and state management.
- **Axios**: For making HTTP requests to the TMDb API.
- **Context API**: For managing global state within the application.

## Installation

1. Clone the rpository:

   ```bash
   git clone https://github.com/jonathangeovani/find-movies-react
   cd find-movies-react
   ```

2. Install Dependencies:

   ```bash
   npm install
   ```

3. Set up the API Key:

   Get a free API key from [TMDb](https://developer.themoviedb.org/docs) and replace the value of VITE_API_KEY in the .env.example file with your key. Rename the file to .env.

   ```dotenv
   # .env.example

   VITE_API_KEY = "YOUR_API_KEY_HERE"
   ```

4. Start the application:

   ```bash
   npm run dev
   ```

   The application will be running at http://localhost:5173
