# OMDb-Search

- [Project summary](#project-summary)
- [Technology implementation](#technology-implementation)
- [Project Development Roadmap](#project-development-roadmap)
- [How to Run The Project](#how-to-run-the-project)

## Project summary

### Front End and Back End

This was created using a frontend and a backend and is a full stack application written completely in typescript.

- [FrontEnd](https://github.com/BarryPercy/omdbapi-app-frontend)
- [BackEnd](https://github.com/BarryPercy/omdbapi-app-backend)

### Short Description

An app to search for any movie in the [OMDb Database](https://www.omdbapi.com/), you can view the top 10 results and when you click on a movie you can view further details about the movie.

### Detailed Description

An app that sends a get request to the backend to retrieve the top 10 movie results of a specific search term, from the movies shown you can click on a movie which opens another page which adds the movies imdbId to the url which is used to make another get request to retrieve the movie details of the selected movie.

In the backend there is also rate limiting in place so that you can't make more than 30 requests in a minute. Also when a request is made, it sends a get request to a redis cache to check whether the search request
has ever been made by anyone before, if it hasn't it makes a request to the OMDb api and sets that search result in the redis cache, if it has then it simply sends the parsed search results back.

## Technology implementation

### Front End

- Typescript
- React
- Redux
- Bootstrap 5

### Back End

- Typescript
- Node.js
- Express
- Redis


## Project development roadmap

### Desired Future Features

- Adding in Options to search for tv shows/videogames.
- Searching for items via their description/director/ratings etc
- Linking to where you could buy/watch a specific movie.
- Show a movies trailer on the details page

## How to Run The Project

Download Projects Separately.

### Back End
- Clone the [BackEnd Project](https://github.com/BarryPercy/omdbapi-app-backend)
- Add a .env file to the main folder of your project.
- Add the following environment variables to your .env file. For how to create a redis labs account and get the right details follow this [quickstart guide](https://docs.redis.com/latest/rc/rc-quickstart/)
    - PORT (The port you want your server to run on)
    - API_KEY (OMDb API key from [https://www.omdbapi.com/](https://www.omdbapi.com/), to retrieve posters from the API you will need to be an OMDb API patreon)
    - REDIS_DB (The public address of your redis database)
    - REDIS_PORT (The port of your redis database)
    - REDIS_PASSWORD (the database password)
- Open a terminal from the project folder.
    - Run "npm i" to install all the projects dependencies.
    - Run "npm run build" to convert typescript to javascript
    - Run "npm start" and you should see a table of the 2 endpoints the project accepts.

### Front End
- Clone the [FrontEnd Project](https://github.com/BarryPercy/omdbapi-app-frontend)
- Add a .env file to the main folder of your project.
- Add the follow environment variable to your .env
    -REACT_APP_BACKEND (e.g. "http://localhost:3001" if running locally)
- Open a terminal from the project folder.
    - Run "npm i" to install all the projects dependencies.
    - Run "npm start"
    - Your browser should now open the project on your localhost, usually on port 3000.
## Author
### Barry Percy

- [Github](https://github.com/BarryPercy)
- [Portfolio(currently in progress)](https://barry-percy-portfolio.vercel.app/)
