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

app.use('/static',express.static('./static'));

app.listen(5080);
