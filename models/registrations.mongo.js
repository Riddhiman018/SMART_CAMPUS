const mongoose = require('mongoose')
const registrations = new mongoose.Schema({
    EVENT_ID:{
        type:String,
        default:''
    },
    USER_ID:{
        type:String,
        default:''
    },
    OD_STATUS:{
        type:Boolean,
        default:false
    },
    ATTENDANCE:{
        type:Boolean,
        default:false
    }
})