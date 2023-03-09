const express = require('express')
const router = express.Router()
const venue = require('../models/venues.mongo')
const slot = require('../models/slots.mongo')
const events = require('../models/booking_request.mongo')

//
router.get('/eventsPendingApproval',async (req,res)=>{
    try{
        const ev = await events.find({
            eventStatus:'approved',
            CURRENT_STATUS:false
        })
        if(ev){
            res.status(200).send({
                Message:'Success',
                pending:ev
            })
        }
        else{
            res.status(200).send({
                Message:'Error'
            })
        }
    }catch(error){
        res.status(500).send({
            Message:'Error'
        })
    }
})

router.post('/approveEventInfra',async (req,res)=>{
    try{
        const approve = await events.updateOne({
            bookingId:req.body.bookingId
        },{
            CURRENT_STATUS:true
        })
        if(approve){
            res.status(200).send({
                Message:'Success'
            })
        }
    }catch(e){
        res.status(500).send({
            Message:'Error'
        })
    }
})

// router.post('/rejectEventInfra',async (req,res)=>{
//     try{

//     }catch(e){
//         res.status(500).send({
//             Message:'Error'
//         })
//     }
// })

