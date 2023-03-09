const mongoose = require('mongoose')
const event_booking = new mongoose.Schema({
    BOOKING_ID:{
        type:String,
        default:''
    },
    EVENT_NAME:{
        type:String,
        default:''
    },
    EVENT_POSTER:{
        type:String,
        default:''
    }, //url
    EVENT_STATUS:{
        type:String,
        default:'' //cancelled or approved
    },
    EVENT_ORGANIZER:{
        type:String,
        default:''
    },
    EVENT_DESCRIPTION:{
        type:String,
        default:''
    },
    EVENT_FOOD_REQUIREMENTS:{
        type:String,
        default:'None'
    },
    SOCIAL_MEDIA:{
        type:String,
        default:''
    },  //url 
    VENUE_ID:{
        type:String,
        default:''
    },   
    VENUE_NAME:{
        type:String,
        default:''
    },
    START_DATE:{
        type:String,
        default:''
    },
    END_DATE:{
        type:String,
        default:''
    },
    START_TIME:{
        type:String,
        default:''
    },
    END_TIME:{
        type:String,
        default:''
    },
    ORGANIZER_CONTACT:{
        type:String,
        default:''
    },
    VENUE_CONTACT:{
        type:String,
        default:''
    },
    EVENT_CATEGORY:{
        type:String,
        default:''
    }, //tech, non=tech, cultural
    EVENT_SUBCATEGORY:{
        type:String,
        default:''
    }, // Marque, custom
    ADMIN_ID:{
        type:String,
        default:''
    },  //
    CURRENT_STATUS:{
        type:Boolean,
        default:false
    },
    LIVE_STATUS:{
        type:String,
        default:'Yes'
    },
    TARGET_AUDIENCE:{
        type:[
            {
                TARGET_CATEGORY:String,
                TARGET_EMAIL:String
            }
        ]
    },
    ORGANIZING_COMMITTEE:{
        type:[
            {
                PERSON_ID:String,
                PERSON_NAME:String,
                STATUS:{
                    type:Boolean
                } //if approved
            }
        ]
    }, 
    VOLUNTEER_COMMITTEE:{
        type:[
            {
                PERSON_ID:String,
                PERSON_NAME:String,
                STATUS:{
                    type:Boolean
                } //if approved
            }
        ]
    }
})

module.exports = mongoose.model('event_booking',event_booking)