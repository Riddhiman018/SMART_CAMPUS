const mongoose = require("mongoose");
const event_booking = new mongoose.Schema({
  bookingId: {
    type: String,
    default: "",
  },
  eventName: {
    type: String,
    default: "",
  },
  EVENT_POSTER: {
    type: String,
    default: "",
  }, //url
  eventStatus: {
    type: String,
    default: "", //cancelled or approved
  },
  orgName: {
    type: String,
    default: "",
  },
  eventDesc: {
    type: String,
    default: "",
  },
  refreshments: {
    type: String,
    default: "None",
  },
  SOCIAL_MEDIA: {
    type: String,
    default: "",
  }, //url
  VENUE_ID: {
    type: String,
    default: "",
  },
  VENUE_NAME: {
    type: String,
    default: "",
  },
  VENUE_CONTACT: {
    type: String,
    default: "",
  },
  startDate: {
    type: String,
    default: "",
  },
  endDate: {
    type: String,
    default: "",
  },
  startTime: {
    type: String,
    default: "",
  },
  endTime: {
    type: String,
    default: "",
  },
  orgContact: {
    type: String,
    default: "",
  },
  eventCat: {
    type: String,
    default: "",
  }, //tech, non=tech, cultural
  EVENT_SUBCATEGORY: {
    type: String,
    default: "",
  }, // Marque, custom
  orgID: {
    type: String,
    default: "",
  }, //
  CURRENT_STATUS: {
    type: Boolean,
    default: false,
  }, //for infrastructure
  LIVE_STATUS: {
    type: String,
    default: "Yes",
  },
  targAud: {
    type: String,
    default: "",
  },
  TARGET_AUDIENCE: {
    type: [
      {
        TARGET_CATEGORY: String,
        TARGET_EMAIL: String,
      },
    ],
  },
  adminId:{
    type:String,
    default:''
  },
  ORGANIZING_COMMITTEE: {
    type: [
      {
        PERSON_ID: String,
        PERSON_NAME: String,
        STATUS: {
          type: Boolean,
        }, //if approved
      },
    ],
  },
  volunteersReq: {
    type: String,
    default: "",
  },
  VOLUNTEER_COMMITTEE: {
    type: [
      {
        PERSON_ID: String,
        PERSON_NAME: String,
        STATUS: {
          type: Boolean,
        }, //if approved
      },
    ],
  },
});

module.exports = mongoose.model("event_booking", event_booking);
