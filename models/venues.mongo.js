const mongoose = require('mongoose')
const venue = new mongoose.Schema({
    VENUE_ID:{
        type:String,
        default:''
    },
    VENUE_NAME:{
        type:String,
        default:''
    },
    AVAILABLE_DATES:{
        type:[String],
    },
    SEATING_CAPACITY:{
        type:String,
        default:''
    },
    CONTACT_NO:{
        type:String,
        default:''
    },
    AVAILABLE:{
        type:Boolean,
        default:true
    }  //whether 
})
module.exports = mongoose.model('venue',venue)