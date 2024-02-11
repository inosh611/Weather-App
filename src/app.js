import { getWeather } from './utils/weather.js';
import { geo } from './utils/geo.js';
import  express from 'express';

const app = express();

//Find current file path and join that path to public folder path
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import path from 'path';

//import hbs for partials
import hbs from 'hbs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname); 

const publicDirpath = path.join(__dirname,"../public");
console.log(publicDirpath);

//End of the path join

const templatePath = path.join(__dirname,"../templates");
const partialsPath = path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs');//say to node js use hbs template engine
app.set('views', templatePath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirpath));//say express to use this joined path

app.get('/', (req, res) => {
    res.render('index',{
        name:"Inosh",
        age:10
    });
});

app.get('/help', (req, res) => {
    res.render("help");
});
app.get('/about', (req, res) => {

    res.render("about");

});

app.get('/weather', (req, res) => {
    console.log(req.query)
    if (!req.query.address) {
        res.send({error:'Addres not found'});
    }
    geo(req.query.address)
        .then((data) => {
            return (getWeather(data.lat, data.lon))
        }).then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err);
        })
    // res.send(req.query);

});


app.get('*', (req, res) => {

    res.render('404');

});

app.listen(3000, () => console.log("Server is Running"));



// getWeather(13,-94)
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })

