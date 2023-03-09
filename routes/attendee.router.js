const express = require('express')
const router = express.Router()
const venue = require('../models/venues.mongo')
const slot = require('../models/slots.mongo')
const events = require('../models/booking_request.mongo')
const registrations = require('../models/registrations.mongo')

router.post('/register',async (req,res)=>{
    try{
        const registration = new registrations({
            EVENT_ID:req.body.eventId,
            USER_ID:req.body.emailId
        }) 
        const r = await registration.save()
        if(r){
            res.status(200).send({
                Message:'Success'
            })
        }
        else{
            res.status(200).send({
                Message:'Failure'
            })
        }
    }catch(e){
        console.log(e)
        res.status(500).send({
            Message:'Error'
        })
    }
})

module.exports = router