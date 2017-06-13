const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

var locals = {
    title: "Our App"
};

const people = [
    { name: "Gandalf" },
    { name: "Frodo" },
    { name: "Sam" }
]

app.listen(3000);

// app.use('/', (req, res, next) => {
//     console.log(req.method, req.url);
//     next();
// });

// nunjucks.configure('views', { noCache: true });
// nunjucks.render('index.html', locals, (err, output) => {
//     console.log(output);
// });

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.get('/', (req, res) => {
    res.render('index', {title: "Lord of the Rings", people: people});
});