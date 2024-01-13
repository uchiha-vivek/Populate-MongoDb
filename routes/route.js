const express = require('express')

const router = new express.Router 


const People = require('../controllers/peopleController.js')

const Duty = require('../controllers/dutyController.js')

router.post('/people/create', People.create)

router.post('/duty/create',Duty.create)

router.post('/duty/populate',Duty.peopleByDuty)

module.exports = router