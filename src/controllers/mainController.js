const express = require('express');
const path = require('node:path');
const app = express();


const mainController = {
    index: app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/home.html'));
    }),

}

module.exports = mainController;