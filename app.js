const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const socketio = require('socket.io');

const routes = require('./routes');

const app = express();
let server = app.listen(3000);
let io = socketio.listen(server);

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use('/',routes(io));

