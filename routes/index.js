const express = require('express');
const router = express.Router();

const tweetBank = require('../tweetBank');


router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    console.log(tweets);
    res.render('index', { tweets: tweets });
});

// router.get('/stylesheets/:fileName', (req,res)=>{
//     res.sendFile(req.params.fileName, {root: './public/stylesheets/'});
// });

router.use(express.static('public'));

router.get('/users/:name', (req, res) => {
    let name = req.params.name;
    let list = tweetBank.find({name: name});
    res.render('index', {tweets: list});
});

router.get('/tweets/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let list = tweetBank.find({id: id});
    res.render('index', {tweets: list});
});











module.exports = router;

