const express = require('express');
const path = require('node:path');
const app = express();
const rutaMain= require('./src/router/main');
const rutaAbout= require('./src/router/about');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


app.listen(3000, () => {
    console.log('Servidor funcionando');
});

app.use ('/', rutaMain);
app.use ('/about', rutaAbout);

