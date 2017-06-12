const express = require('express');
const app = express();

app.listen(3000);

app.use('/', (req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.get('/', (req, res) => {
    //res.status(200);
    res.send('Bienvenidos!');
});