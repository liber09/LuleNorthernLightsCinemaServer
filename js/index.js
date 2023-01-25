import express from 'express';
import ejs from 'ejs';


const app = express();
app.set('views', './views')
app.set('view engine', 'ejs')

app.get("/", (req,res) => {
    res.render('index')
});

app.use('/static',express.static('./static'));

app.listen(5080);
