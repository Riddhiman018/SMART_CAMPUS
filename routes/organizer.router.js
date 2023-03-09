const express = require('express')
const router = express.Router()
const venue = require('../models/venues.mongo')
const slot = require('../models/slots.mongo')
const events = require('../models/booking_request.mongo')

router.get('/venues',async (req,res)=>{
    try{
        const venues = await venue.find({
            AVAILABLE:true
        })
        if(venues){
            res.status(200).send({
                Message:'Success',
                venues:venues
            })
        }
    }catch(e){
        res.status(500).send({
            Message:'Error'
        })
    }
})

router.post('/slots',async (req,res)=>{
    try{
        const v = await slot.find({
            VENUE_ID:req.body.VENUE_ID,
            MONTH:req.body.MONTH,
            YEAR:req.body.YEAR
        })
        if(v){
            res.status(200).send({
                Message:'Success',
                Slots:v
            })
        }
        else{
            res.status(200).send({
                Message:'Failure'
            })
        }
    }catch(e){
        res.status(500).send({
            Message:'Error'
        })
    }
})

router.get('/upcomingevents',async (req,res)=>{
    try{
        const ev = await events.find({
            LIVE_STATUS:'Yes',
            CURRENT_STATUS:true //
        })
        if(ev){
            res.status(200).send({
                Message:'Success',
                events:ev
            })
        }
        else{
            res.status(200).send({
                Message:'Failure'
            })
        }
    }catch(e){
        res.status(500).send({
            Message:'Error'
        })
    }
})
router.post('/createevent',async (req,res)=>{
    try{
        const newevent = new events(req.body)
        const saved_event = await newevent.save()
        if(saved_event){
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
        res.status(500).send({
            Message:'Error'
        })
    }
})
module.exports = router 
