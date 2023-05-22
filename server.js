const express = require('express');
const { readFile } = require('./controllers/file.controller');
const app = express();



app.get('/getFileInfo', readFile);


app.listen(3000, (err) => {
    if (!err) {
        console.log('Server is running on 3000')
    }
})