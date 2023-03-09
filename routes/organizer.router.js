const express = require('express')
const router = express.Router()
const venue = require('../models/venues.mongo')
const slot = require('../models/slots.mongo')
const events = require('../models/booking_request.mongo')

const {IgApiClient} = require('instagram-private-api')
const {get} = require('request-promise')
const username = "Hello99rb0585"
const pwd = "123JkLemon123!@"

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

router.post('/uploadOnSocialMedia',async (req,res)=>{
    try{
        var ig = new IgApiClient()
        ig.state.generateDevice(username)
        await ig.account.login(username,pwd)
        const imageBuffer = await get({
            url:req.body.photoUrl,
            encoding:null
        })
        await ig.publish.photo({
            file:imageBuffer,
            caption:req.body.caption
        })
        res.status(200).send({
            Message:'Success'
        })
    }catch(e){
        console.log(ig.state.checkpoint)
        res.status(500).send({
            Message:'Error'
        })
    }
})

module.exports = router 
