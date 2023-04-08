import express from "express";
import axios from "axios";

const moviesRouter = express.Router()

interface Movie {
    Title: string;
    Poster: string;
    Year: string;
    Plot: string;
    imdbID: string;
    Response: string;
  }

moviesRouter.get("/:imdbId", async (req,res,next)=> { //sends a request to OMDb api with the given imdb id and uses some of the information
    try {                                             //to create a movie object to send to the client
        const response = await axios.get(`http://www.omdbapi.com/?i=${req.params.imdbId}&apikey=${process.env.API_KEY}`)
        if(response.status=200){
            const movie = await response.data as Movie;
            if(movie.Response==="False"){ //if there is no search we send the movie response which gives the false response.
                res.send(movie)
            }else{ //if the response is true then we can send the movie's details.
                const movieObject = {
                    title: movie.Title,
                    poster: movie.Poster,
                    year: movie.Year,
                    plot: movie.Plot,
                    imdbID: movie.imdbID,
                    Response: movie.Response
                }
                res.send(movieObject)
            }
            
        }
    } catch (error) {
        next(error)
    }
})

export default moviesRouter