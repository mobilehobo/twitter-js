const express = require('express');
const router = express.Router();

const tweetBank = require('../tweetBank');

module.exports = function (io) {
    router.get('/', function (req, res) {
        let tweets = tweetBank.list();
        console.log(tweets);
        res.render('index', { tweets: tweets, showForm: true });
    });

    router.use(express.static('public'));

    router.get('/users/:name', (req, res) => {
        let name = req.params.name;
        let list = tweetBank.find({ name: name });
        res.render('index', { tweets: list, showForm: true, username: name });
    });

    router.post('/tweets', (req, res) => {
        let name = req.body.name;
        let text = req.body.text;
        tweetBank.add(name, text);
        io.sockets.emit('newTweet', {name: name, content: text});
        res.redirect('/');
    });

    router.get('/tweets/:id', (req, res) => {
        let id = parseInt(req.params.id);
        let list = tweetBank.find({ id: id });
        res.render('index', { tweets: list, showForm: false });
    });
    return router;
};

