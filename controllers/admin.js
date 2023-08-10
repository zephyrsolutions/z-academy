const { request } = require('express')
const { render } = require('ejs')
const cloudinary = require('../middleware/cloudinary') 
const Department = require('../models/Department')
const Course = require('../models/Course')
const Section = require('../models/Section')
const Subject = require('../models/Subject')
const Teacher = require('../models/Teacher')
const Student = require('../models/Student')
const Syllabus = require('../models/Syllabus')
const Slot = require('../models/Slot')

module.exports = {
    getIndex: (req, res) => {
        res.render('admin/index')
    },
    getDashboard: (req, res) => {
        res.render('admin/dashboard')
    },

    // Department Controllers
    getDepartment: async (req, res) => {
        try{
            const department = await Department.find()
            res.render('admin/department', {
              department,
            })
          }catch(err){
              console.error(err)
              res.render('error/500')
          }
      },
    addDepartment: async (req, res) => {
        try{
          await Department.create({
            departmentName : req.body.departmentName,
            departmentLocation : req.body.departmentLocation
          }) 
          console.log('Department has been added')
          res.redirect('/admin/department')
        }catch (err) {
           console.error('err')
           res.render('error/500')
        }
    },
    getDepartmentById: async (req, res) => {
       try{
         const department = await Department.findById({_id: req.params.id})
         res.render('admin/editDepartment',{
            department,
         })
       }catch (err){
          console.error(err)
          res.render('error/500')
       }
    },
    editDepartment: async (req, res) => {
        try{
          let department = await Department.findById(req.params.id)
          if(!department){
            return res.render('error/500')
          }else{
            department = await Department.findOneAndUpdate({_id: req.params.id}, req.body, {
                new : true,
                runValidators : true,
            })
             res.redirect('/admin/department')
          }
        }catch (err){
            console.error(err)
            res.render('error/500')
        }
    },
    deleteDepartment: async (req, res) => {
        try{
            await Department.deleteOne({_id: req.params.id})
            console.log('Delete Department')
            res.redirect('/admin/department')
          
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
     
    // Course Controllers
    getCourse: async (req, res) => {
        try{
            const department = await Department.find()
            const course = await Course.find()
                .populate('department')

            res.render('admin/departmentMain',{
                course, 
                department,
            })
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    addCourse: async (req, res) => {
        try{
            await Course.create({
                courseName: req.body.courseName,
                numberOfSemester: req.body.numberOfSemester,
                department: req.body.department,
            })
            const departmentId = req.body.department
            console.log('Course has been added')
            res.redirect(`/admin/departmentMain/${departmentId}`)
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    getCourseById: async (req, res) => {
        try{
            const course = await Course.findById({_id: req.params.id})
            res.render('admin/editCourse',{
                course,
                department: req.params.did,
            }) 
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    editCourse: async (req, res) => {
        try{
            let course = await Course.findById(req.params.id)
            if(!course) {
                res.render('error/500')
            }else {
                course = await Course.findOneAndUpdate({_id: req.params.id}, req.body, {
                    new: true,
                    runValidators: true,
                })
                const department = await Department.findById(req.body.departmentId)                        
                console.log("Updated Course")
                res.redirect(`/admin/departmentMain/${department.id}`)
            }
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    deleteCourse: async (req, res) => {
        try{
            await Course.deleteOne({_id: req.params.id})
            const department = await Department.findById(req.body.departmentId)                        
            console.log("Deleted Course")
            res.redirect(`/admin/departmentMain/${department.id}`)            
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },

    // Section Controllers
    getSection: async (req, res) => {
        try{
            const section = await Section.find()
            res.render('admin/section',{
                section,
            })
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    addSection: async (req, res) => {
        try{            
            await Section.create({
                courseName: req.body.courseName,
                semesterName: req.body.semesterName,
                sectionName: req.body.sectionName,
                totalStudent: req.body.totalStudent,                
            })
            console.log('Section has been added')
            res.redirect('/admin/section')
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    getSectionById: async (req, res) => {
        try{
            const section = await Section.findById({_id: req.params.id})
            res.render('admin/editSection',{
                section,
            })
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    editSection: async (req, res) => {
        try{
            let section = await Section.findById(req.params.id)
            if(!section) {
                res.render('error/500')
            }else {
                section = await Section.findOneAndUpdate({_id: req.params.id}, req.body, {
                    new : true,
                    runValidators : true,
                })
                res.redirect('/admin/section')
            }
        }catch(err) {
            console.error(err)
            res.render('error/500')
        }
    },
    deleteSection: async (req, res) => {
        try{
            let section = await Section.findById(req.params.id)
            if(!section) {
                res.render('error/500')
            }else {
                section = await Section.findOneAndDelete({_id: req.params.id})
                res.redirect('/admin/section')
            }
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },

    // Subject Controller
    getSubject: async (req, res) => {
        try{
            const course = await Course.find()
            const subject = await Subject.find()
                .populate('course')
            res.render('admin/semesterMain',{
                subject,
                course,
            })   
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    addSubject: async (req, res) => {
        try{
            await Subject.create({
                course: req.body.course, 
                subjectName: req.body.subjectName,
                semester: req.body.semester,
            })
            const courseId = req.body.course
            const semesterId = req.body.semester
            console.log('Subject has been added')
            res.redirect(`/admin/semesterMain/${courseId}/${semesterId}`)
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    getSubjectById: async (req, res) => {
        try{
            const sem = req.params.sem
            const subject = await Subject.findById({_id: req.params.id})
            const course = await Course.find()

            res.render('admin/editSubject',{
                subject,
                course,
                sem,
            })
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    editSubject: async (req, res) => {
        try{
            let subject = await Subject.findById(req.params.id)
            if(!subject) {
                res.render('error/500')
            }else {
                subject = await Subject.findOneAndUpdate({_id: req.params.id}, req.body,{
                    new: true,
                    runValidators: true,
                })
                const courseId = req.body.courseId
                const semesterId = req.body.semesterId
                console.log("Subject Edited")
                res.redirect(`/admin/semesterMain/${courseId}/${semesterId}`)
            }
        }catch(err){
            console.error(err)
            res.redirect('error/500')
        }
    },
    deleteSubject: async (req, res) => {
        try{
            await Subject.deleteOne({_id: req.params.id})
            const course = await Course.findById(req.body.courseId) 
            const semesterId = req.body.semesterId
            console.log("Delete Subject")
            res.redirect(`/admin/semesterMain/${course._id}/${semesterId}`)
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },

    // Teacher Controllers
    getTeacher: async (req, res) => {
        try{
            const teacher = await Teacher.find()
                res.render('admin/departmentMain',{
                teacher,
            })
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    addTeacher: async (req, res) => {
        try{
            // Upload the file to Cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageUrl = result.secure_url;
            const cloudinary_id = result.public_id
            await Teacher.create({
                teacherName: req.body.teacherName,
                teacherEmail: req.body.teacherEmail,
                teacherPhoneNo: req.body.teacherPhoneNo,
                teacherAddress: req.body.teacherAddress,
                teacherDesignation: req.body.teacherDesignation,
                dateofJoining: req.body.dateofJoining,
                teacherDOB: req.body.teacherDOB,
                teacherImage: imageUrl,
                teacherGender: req.body.teacherGender,
                department: req.body.department,
                cloudinary_id,
            })
            const departmentId = req.body.department
            console.log('Teacher has been added')
            res.redirect(`/admin/departmentMain/${departmentId}`)
        }catch(err){
            console.error(err)
            res.redirect('error/500')
        }
    },
    getTeacherById: async (req, res) => {
        try{
            const teacher = await Teacher.findById({_id: req.params.id})
            const tdate = new Date(teacher.teacherDOB)
            const jdate = new Date(teacher.dateofJoining)
            res.render('admin/editTeacher',{
                teacher,
                tdate,
                jdate,
                department: req.params.did,
            })
            // console.log(teacher)
            // console.log(tdate)
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    editTeacher: async (req, res) => {
        try{
            let teacher = await Teacher.findById(req.params.id)
            if(!teacher) {
                res.render('error/500')
            }else {
                teacher = await Teacher.findOneAndUpdate({_id: req.params.id}, req.body, {
                    new: true,
                    runValidators: true,
                })
                const department = await Department.findById(req.body.departmentId)
                console.log("Edit Teacher")
                res.redirect(`/admin/departmentMain/${department.id}`)
            }
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    deleteTeacher: async (req, res) => {
        try{
            await Teacher.deleteOne({_id: req.params.id})
            const department = await Department.findById(req.body.departmentId)
            console.log("Deleted Teacher")
            res.redirect(`/admin/departmentMain/${department.id}`)
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },

    // Student Controllers
    getStudent: async (req, res) => {
        try{
            const course = await Course.find()
            const student = await Student.find()
                .populate('course')
            res.render('admin/student',{
                student,
                course,
            })
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    addStudent: async (req, res) => { 
        try{
            // Upload the file to Cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageUrl = result.secure_url;
            const cloudinary_id = result.public_id
            const semesterName = 1
            const dateofAdmission = new Date().toISOString().slice(0, 10)
            await Student.create({
                studentName: req.body.studentName,
                studentEmail: req.body.studentEmail,
                studentPhoneNo: req.body.studentPhoneNo,
                studentAddress: req.body.studentAddress,
                studentDOB: req.body.studentDOB,
                studentGender: req.body.studentGender,
                course: req.body.course,
                studentImage: imageUrl,
                semesterName: semesterName,                                                       
                dateofAdmission: dateofAdmission,
                cloudinary_id,
            })
            console.log('Student has been added')
            res.redirect('/admin/student')
        }catch(err){
            console.error(err)
            res.redirect('error/500')
        }
    },
    getStudentById: async (req, res) => {
        try{
            const student = await Student.findById({_id: req.params.id})
            const course = await Course.find()
            res.render('admin/editStudent',{
                student,
                course,
            })
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    editStudent: async (req, res) => {
        try{
            let student = await Student.findById(req.params.id)
            if(!student){
                res.render('error/500')
            }else{
                student = await Student.findOneAndUpdate({_id: req.params.id}, req.body, {
                    new: true,
                    runValidators: true,
                })
                res.redirect('/admin/student')
            }
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    deleteStudent: async (req, res) => {
        try{
            let student = await Student.findById(req.params.id)
            if(!student){
                res.render('error/500')
            }else{
                student = await Student.findOneAndDelete({_id: req.params.id})
                res.redirect('/admin/student')
            }
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },

    // Controller To Fetch Specific Department Details By ID 
    getDepartmentMainById: async (req, res) => {
        try{
            const department = await Department.findById(req.params.id)

            const teacher = await Teacher.find({ department: req.params.id })
            const course = await Course.find({ department: req.params.id })
                res.render('admin/departmentMain',{
                    department,
                    course,
                    teacher,
                })
        }catch(err){
            console.error(err)
            res.render('error/500')
        }       
    },

    // Controller To Fetch Specific Course Details By ID Under Department 
    getCourseMainById: async (req, res) => {
        try{
            const course = await Course.findById(req.params.id)
            const slot = await Slot.find()
            res.render('admin/courseMain',{
                course,
                slot,
            })

        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },

    // Controller To Fetch Specific Semester Details By ID Under Course 
    getSemesterMainById: async (req, res) => {
        try{
            const course = await Course.findById(req.params.id )
            const subject = await Subject.find({course:req.params.id, semester: req.params.sem})
            const sem = req.params.sem
            res.render('admin/semesterMain',{
                subject,
                course,
                sem,
            })
        }catch(err){
            console.error(err)
            res.render('error/500') 
        }
    },

    //Syllabus Controller
    getSyllabus: async (req, res) => {
        try{
            const course = await Course.find()
            const syllabus = await Syllabus.find()
                .populate('course')
            res.render('admin/syllabus', {
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
            })
            console.log('Syllabus has been added')
            res.redirect('/admin/syllabus')
        }catch(err){
            console.error(err)
            res.redirect('error/500')
        }
    },

    addRoutine: async (req, res) => {
        try{
            console.log(req.params)
        } catch (err){
            console.error(err)
        }        
    },
}