const express = require('express');
const path = require('node:path');
const app = express();


const aboutController = {
    index: app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/about.html'));
    }),

}

module.exports = aboutController;