import express from 'express';
import ejs from 'ejs';
import {loadMovies, loadMovie} from './movies.js'
import { marked, Parser } from "marked";

let movies;
const app = express();
app.set('views', './views') //Set viewsfolder
app.set('view engine', 'ejs') //Set view engine

//Index page
app.get("/", async (req,res) => {
 
    movies = await loadMovies();
    movies
    res.render('index', {movies})
    console.log(movies);
});

//Get specific movie
app.get("/movies/:movieId", async (req, res) => {
    const movie = await loadMovie(req.params.movieId);
    if (movie) {
                movie.attributes.intro = marked.parse(movie.attributes.intro);
      res.render("movie", { movie });
    } else {
      res.status(404).render("404");
    }
  });

//Opening hours and contact
app.get("/openingHours", (req,res) => {
    res.render('openingHoursAndContact')
});

//About us
app.get("/about", (req,res) => {
    res.render('about')
});

//Ticket info
app.get("/tickets", (req,res) => {
    res.render('tickets')
});

//News
app.get("/news", (req,res) => {
    res.render('news')
});

//Gift card
app.get("/gift-card", (req,res) => {
    res.render('giftcard')
});

//Route for static content such as CSS
app.use('/static',express.static('./static'));

//Export app to use in other places in app.
export default app;