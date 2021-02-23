const mongoose = require('mongoose');
const validator = require('validator');

const olympicSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        minlength:3,
        trim:true 
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,

    },
    event:{
        type:String,
        default:"100m"
    }

});


const Ranking = new mongoose.model("Ranking",olympicSchema);

module.exports = Ranking;