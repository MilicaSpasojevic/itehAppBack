const mongoose = require('mongoose');

//Schema - describe how data looks

const PostSchema = mongoose.Schema({
    id:{
        type: String,
        require: true
    },
    title:{
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        require:true
    },
    ingredians: [{
        type: String,
        require:true
    }],
    steps: [{
        type: String,
        require:true
    }]
});

module.exports = mongoose.model('Posts', PostSchema);