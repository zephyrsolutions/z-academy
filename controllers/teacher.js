const { request } = require('express')
const mongoose = require('mongoose')
const { render } = require('ejs')
const cloudinary = require('../middleware/cloudinary')
const Course = require('../models/Course')
const Syllabus = require('../models/Syllabus')
const Assignment = require('../models/Assignment')

module.exports = {
    getIndex: (req, res) => {
        res.render('teacher/teacherIndex')
    },
    getDashboard: (req, res) => {
        res.render('teacher/teacherDashboard')
    },

        //Syllabus Controller
        getSyllabus: async (req, res) => {
            try{
                const course = await Course.find()
                const syllabus = await Syllabus.find()
                    .populate('course')
                res.render('teacher/syllabus', {
                    syllabus,
                    course,
                })
            }catch(err){
                console.error(err)
                res.redirect('error/500')
            }
        },
    
        addSyllabus: async (req, res) => {
            try{
                // Upload the file to Cloudinary
                const result = await cloudinary.uploader.upload(req.file.path);
                const imageUrl = result.secure_url;
                const cloudinary_id = result.public_id
                const updated_at = new Date().toISOString().slice(0, 10)
                await Syllabus.create({
                    course: req.body.course,
                    syllabusImage: imageUrl,
                    uploadDate: updated_at,
                    cloudinary_id,
                })
                console.log('Syllabus has been added')
                res.redirect('/teacher/syllabus')
            }catch(err){
                console.error(err)
                res.redirect('error/500')
            }            
        },
        deleteSyllabus: async (req, res) => {
            try{
                await Syllabus.deleteOne({_id: req.params.id})
                console.log('Deleted Syllabus')
                res.redirect('/teacher/syllabus')
            }catch(err){
                console.error(err)
                res.render('error/500')
            }
        },

        // Assignment Controller
        getAssignment: async (req, res) => {
            try{
                const assignment = await Assignment.find()
                res.render('teacher/assignment', {
                    assignment
                })
            }catch(err){
                console.error(err)
                res.render('error/500')
            }
        },

        addAssignment : async (req, res) => {
            try{
                // Upload the files to Cloudinary
                const uploadPromises = req.files.map((file) => {
                  return cloudinary.uploader.upload(file.path)
                })
             
                // Wait for all files to be uploaded to cloudinary
                const results = await Promise.all(uploadPromises)
                const imageUrls = results.map((result) => result.secure_url)
                const cloudinary_ids = results.map((result) => result.public_id)
                await Assignment.create({
                    assignment: imageUrls,
                    cloudinary_ids: cloudinary_ids,
                })
                console.log('Assignment has been added')
                res.redirect('/teacher/assignment')
            }catch(err){
                console.error(err)
                res.redirect('error/500')
            }
        },          
          
}

