const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const socketio = require('socket.io');
const routes = require('./routes');

var locals = {
    title: "Our App"
};

const people = [
    { name: "Gandalf" },
    { name: "Frodo" },
    { name: "Sam" }
];

let server = app.listen(3000);
let io = socketio.listen(server);

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use('/',routes(io));

