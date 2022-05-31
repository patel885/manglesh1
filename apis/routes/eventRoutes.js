'use strict';

const express = require('express');
const eventControll = require('../controllers/eventController');
const emailer= require("../controllers/emailer")
const router = express.Router();

router.get('/unsubscribe/:id/:status', eventControll.unsubscribe);
router.get('/enquiry/:firstname/:lastname/:email/:phone/:eventdate', eventControll.enquiry);

router.post('/email', emailer.sendmail);

module.exports = {
    routes: router
}