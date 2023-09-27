const express = require('express')
const router = express.Router()
const timeTableController = require('../controllers/timeTable')

router.get('/', timeTableController.getIndex)
router.get('/slot', timeTableController.getSlot)
router.post('/addSlot', timeTableController.addSlot)

module.exports = router