const express = require('express');
const app = express()
const cors = require('cors')
const organizer_router = require('../routes/organizer.router')
const admin_router = require('../routes/admin.router')
const mongoose = require('mongoose')
require('dotenv').config()

const uri = "mongodb+srv://Riddhiman_Mongo:hello123@cluster1.b76yf.mongodb.net/DATAVISS?retryWrites=true&w=majority";
mongoose.connect(uri)
app.use(express.urlencoded({
    extended:true
}))
app.set('view engine','ejs')
app.use(cors());
app.use(express.json());
app.use(organizer_router);
app.use(admin_router);
app.use(express.static(`${__dirname}/staticfiles`))
module.exports = app