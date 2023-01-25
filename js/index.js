import express from 'express';
import ejs from 'ejs';
import {loadMovies, loadMovie} from './movies.js'

//import * as secNavAnchors from './secNav/anchors.js';
//import * as secNav from './secNav/secNav.js';
let movies;
const app = express();
app.set('views', './views')
app.set('view engine', 'ejs')

//Index page
app.get("/", async (req,res) => {
    movies = await loadMovies();
    res.render('index')
    console.log(movies);
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

app.use('/static',express.static('./static'));

app.listen(5080);
