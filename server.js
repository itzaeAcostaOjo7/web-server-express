const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'itek',

    });
});

app.get('/about', (req, res) => {
    res.render('about', {

    });
});

app.listen(3000, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});