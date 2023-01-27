import express from 'express';
import ejs from 'ejs';
import {loadMovies, loadMovie} from './movies.js'
import { marked, Parser } from "marked";
import cookieParser from 'cookie-Parser';
import pkg from 'express-session';
const {session} = pkg;

//import * as secNavAnchors from './secNav/anchors.js';
//import * as secNav from './secNav/secNav.js';
let movies;
const app = express();
app.use(cookieParser);
app.use(express.cookieSession({cookie:{path:'/',httpOnly:true,maxAge:null},secret:'mysecrettt'}));
app.set('views', './views')
app.set('view engine', 'ejs')

//Index page
app.get("/", async (req,res) => {
    if (req.session.visited){
        req.lastVisit = req.session.visited;
    }
    req.session.visited = Date.now();
    movies = await loadMovies();
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

export default app;
