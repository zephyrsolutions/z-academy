const { render } = require('ejs')
const { request } = require('express')
const Slot = require('../models/Slot')

module.exports = {
    getIndex: (req, res) => {
        res.render('library/libraryIndex')
    },


    getSlot: async (req, res) => {
        try{
            const slot = await Slot.find()
            res.render('timeTable/slot', {
                slot,
            })
        }catch(err){
            console.error(err)
            res.redirect('error/500')
        }
    },
    addSlot: async (req, res) => {
        try{
            await Slot.create({
                from: req.body.form,
                to: req.body.to,
                days: req.body.days,
            })
            console.log('Slot has been added')
            res.redirect('/timeTable/slot')
        }catch(err){
            console.error(err)
            res.redirect('error/500')
        }
    },
}