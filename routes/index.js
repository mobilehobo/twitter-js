const express = require('express');
const router = express.Router();

const tweetBank = require('../tweetBank');


router.get('/', function(req,res){
    let tweets = tweetBank.list();
    res.render('index',{tweets: tweets});
});

// router.get('/stylesheets/:fileName', (req,res)=>{
//     res.sendFile(req.params.fileName, {root: './public/stylesheets/'});
// });

router.use(express.static('public'));













module.exports = router;

