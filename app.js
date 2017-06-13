const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');

var locals = {
    title: "Our App"
};

const people = [
    { name: "Gandalf" },
    { name: "Frodo" },
    { name: "Sam" }
]

app.listen(3000);

app.use('/', (req, res, next) => {
    console.log(req.method, req.url);
    next();
});


app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use('/',routes);

