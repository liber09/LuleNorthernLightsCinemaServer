import express from 'express';
import ejs from 'ejs';


const app = express();
app.set('views', './views')
app.set('view engine', 'ejs')

//Index page
app.get("/", (req,res) => {
    res.render('index')
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

app.use('/static',express.static('./static'));

app.listen(5080);
