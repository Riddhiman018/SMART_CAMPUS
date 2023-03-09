const mongoose = require('mongoose')
const slot = new mongoose.Schema({
    VENUE_ID:{
        type:String,
        default:'',
        required:true
    },
    DAY:{
        type:String,
        required:true
    },
    MONTH:{
        type:String,
        required:true
    },
    YEAR:{
        type:String,
        required:true
    },
    AVAILABLE_SLOTS:{
        type:[String]
    }
})

module.exports = mongoose.model('slot',slot)