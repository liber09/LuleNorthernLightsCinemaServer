import express from 'express'; //Server
import ejs from 'ejs'; //Templating engine
import {loadMovies, loadMovie} from './movies.js' //Movie API
import { marked } from "marked"; //For markdown

let movies;
const app = express();
app.set('views', './views') //Set viewsfolder
app.set('view engine', 'ejs') //Set ejs as view engine

//Index page
app.get("/", async (req,res) => {
    movies = await loadMovies(); //Get all movies from API
    res.render('index', {movies}) //Send template and data to browser
});

//Get specific movie
app.get("/movies/:movieId", async (req, res) => {
    const movie = await loadMovie(req.params.movieId); //Get movie with [ID] from API
    if (movie) {
      movie.attributes.intro = marked.parse(movie.attributes.intro);  //Use markdown for text formatting
      res.render("movie", { movie });  //Send template and data to browser
    } else {
      res.status(404).render("404");  //Movie with [ID] does not exist
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