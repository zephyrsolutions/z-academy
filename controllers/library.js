const { render } = require('ejs')
const { request } = require('express')
const cloudinary = require('../middleware/cloudinary')
const Category = require('../models/Category')
const Author = require('../models/Author')
const Book = require('../models/Book')
const IssuedBook = require('../models/IssuedBook')
const Student = require('../models/Student')


module.exports = {
    getIndex: (req, res) => {
        res.render('library/libraryIndex')
    },

    getDashboard: (req, res) => {
        res.render('library/libraryDashboard')
    },

    // Book Category Controller
    getCategory: async (req, res) => {
        try{
            const category = await Category.find()
            res.render('library/category', {
                category,
            })
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },

    addCategory: async (req, res) => {
        try{
            const categoryStatus = 1
            await Category.create({
                categoryName: req.body.categoryName,
                categoryStatus: categoryStatus,
            })
            console.log('Category has been added')
            res.redirect('/library/category')
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    getCategoryById: async (req, res) => {
        try{
            const category = await Category.findById({ _id: req.params.id })
            res.render('library/editCategory', {
                category
            })
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    editCategory: async (req, res) => {
        try{
            let category = await Category.findById(req.params.id)
            if(!category){
                res.render('error/500')
            }else{
                category = await Category.findOneAndUpdate({ _id: req.params.id }, req.body, {
                    new: true,
                    runValidators: true,
                })
                res.redirect('/library/category')
            }
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },

    // Book Author Controller
    getAuthor: async (req, res) => {
        try{
            const author = await Author.find()
            res.render('library/author', {
                author,
            })
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    addAuthor: async (req, res) => {
        try{
            const creationDate = new Date().toISOString().slice(0, 10)
            const updationDate = new Date().toISOString().slice(0, 10)
            await Author.create({
                authorName: req.body.authorName,
                creationDate: creationDate,
                updationDate: updationDate,
            })
            console.log('Author has been added')
            res.redirect('/library/author')
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    getAuthorById: async (req, res) => {
        try{
            const author = await Author.findById({ _id: req.params.id })
            res.render('library/editAuthor', {
                author,
            })
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    editAuthor: async (req, res) => {
        try{
            let author = await Author.findById(req.params.id)
            if(!author){
                res.render('error/500')
            }else{
                author = await Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
                    new: true,
                    runValidators: true,
                })
                console.log('Author edited')
                res.redirect('/library/author')
            } 
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    getBook: async (req, res) => {
        try{
            const author = await Author.find()
            const category = await Category.find()
            const book = await Book.find()
                .populate('category')
                .populate('author')
            res.render('library/book', {
                book,
                category,
                author,
            })
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    addBook: async (req, res) => {
        try{
            // Upload the file to Cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);
            const imageUrl = result.secure_url;
            const cloudinary_id = result.public_id;
            const regDate = new Date().toISOString().slice(0, 10)
            const updationDate = new Date().toISOString().slice(0, 10)
            const isIssued = 0
            await Book.create({
                bookName: req.body.bookName,
                category: req.body.category,
                author: req.body.author,
                ISBNNumber: req.body.ISBNNumber,
                bookPrice: req.body.bookPrice,
                bookImage: imageUrl,
                isIssued: isIssued,
                regDate: regDate,
                updationDate: updationDate,
                cloudinary_id,
            })
            console.log('Book has been added')
            res.redirect('/library/book')
        }catch(err){
            console.error(err)
            res.redirect('error/500')
        }
    },
    getBookById: async (req, res) => {
        try{
            const book = await Book.findById({ _id: req.params.id })
            const category = await Category.find()
            const author = await Author.find()
            res.render('library/editBook', {
                book,
                category,
                author,
            })
        }catch(err){
            console.error(err)
            res.redirect('error/500')
        }
    },
    editBook: async (req, res) => {
        try{
            let book = await Book.findById(req.params.id)
            if(!book){
                res.render('error/500')
            }else{
                book = await Book.findOneAndUpdate({ _id: req.params.id }, req.body, {
                    new: true,
                    runValidators: true,
                })
                console.log('Book edited')
                res.redirect('/library/book')
            }
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },

    // IssuedBook Controllers

    getIssuedBook: async (req, res) => {
        try{
            const book = await Book.find()
            const student = await Student.find()
            const issuedBook = await IssuedBook.find()
                .populate('book')
                .populate('student')
            res.render('library/issuedBook', {
                issuedBook,
                book,
                student,
            })
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    addIssuedBook: async (req, res) => {
        try{
            const issuesDate = new Date().toISOString().slice(0, 10)
            const returnDate = 0
            const returnStatus = 0
            const fine = 0
            await IssuedBook.create({
                book: req.body.book,
                student: req.body.student,
                issuesDate: issuesDate,
                returnDate: returnDate,
                returnStatus: returnStatus,
                fine: fine, 
            })
            console.log('Book Added')
            res.redirect('library/issuedBook')
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    getIssuedBookById: async (req, res) => {
        try{
            const issuedBook = await IssuedBook.findById({ _id: req.params.id })
            const student = await Student.find()
            const book = await Book.find()
            res.render('library/editIssuedBook', {
                issuedBook,
                student,
                book,
            })
        }catch(err){
            console.error(err)
            res.render('error/500')
        }
    },
    editIssuedBook: async (req, res) => {
        try{
            let issuedBook = await IssuedBook.findById(req.params.id)
            if(!issuedBook){
                res.render('error/500')
            }else{
                issuedBook = await IssuedBook.findOneAndUpdate({ _id: req.params.id }, req.body, {
                    new: true,
                    runValidators: true,
                })
                console.log('IssuedBook edited')
                res.redirect('/library/issuedBook')
            }
        }catch(err){
            console.error(err)
            res.redirect('error/500')
        }
    },

}