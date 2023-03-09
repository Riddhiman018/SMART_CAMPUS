const mongoose = require('mongoose')
const user = new mongoose.Schema({
    ID:{
        type:String,
        default:''
    },
    PAST_EVENTS:{
        type:[String],
    },
    UPCOMING_EVENTS:{
        type:[String]
    }  
})