const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//ROUTES

router.get('/',async(req,res)=>{
   // res.send('We are on post!');
   try{
    const posts = await Post.find()
    res.json(posts);
}catch(err){
   res.send("Error "+ err);
}
   
});

router.get('/specific', async (req,res)=>{
    //res.send('Specific!');
});

router.post('/',(req,res)=>{
    const post = new Post({
        id: req.body.id,
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        ingredians: req.body.ingredians,
        steps: req.body.steps
        
    });

    post.save()
    .then(data=> {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    })
})

module.exports = router;