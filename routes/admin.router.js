const express = require('express')
const router = express.Router()
const venue = require('../models/venues.mongo')
const slot = require('../models/slots.mongo')
const events = require('../models/booking_request.mongo')

router.get('/pendingApprovals',async (req,res)=>{
    try{
        const ev = await events.find({
            eventStatus:"",
            adminId:req.body.adminId
        })
        if(ev){
            res.status(200).send({
                Message:'Success',
                pending:ev
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

router.post('/approve',async (req,res)=>{
    try{
        const approveEvent = await events.updateOne({
            bookingId:req.body.bookingId
        },{
            eventStatus:"approved"
        })
        if(approveEvent){
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

router.post('/cancel',async (req,res)=>{
    try{
        const approveEvent = await events.updateOne({
            bookingId:req.body.bookingId
        },{
            eventStatus:`cancelled - ${req.body.reason}`
        })
        if(approveEvent){
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