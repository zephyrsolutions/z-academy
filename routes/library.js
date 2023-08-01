const express = require('express')
const router = express.Router()
const libraryController = require('../controllers/library')

router.get('/', libraryController.getIndex)
router.get('/libraryDashboard', libraryController.getDashboard)

// Book Category Routes
router.get('/category', libraryController.getCategory)
router.post('/addCategory', libraryController.addCategory)
router.get('/getCategory/:id', libraryController.getCategoryById)
router.put('/editCategory/:id', libraryController.editCategory)

// Book Author Routes
router.get('/author', libraryController.getAuthor)
router.post('/addAuthor', libraryController.addAuthor)
router.get('/getAuthor/:id', libraryController.getAuthorById)
router.put('/editAuthor/:id', libraryController.editAuthor)

// Book Routes
router.get('/book', libraryController.getBook)
router.post('/addBook', libraryController.addBook)
router.get('/getBook/:id', libraryController.getBookById)
router.put('/editBook/:id', libraryController.editBook)

// IssuedBook Routes
router.get('/issuedBook', libraryController.getIssuedBook)
router.post('/addIssuedBook', libraryController.addIssuedBook)
router.get('/getIssuedBook/:id', libraryController.getIssuedBookById)
router.put('/editIssuedBook/:id', libraryController.editIssuedBook)

module.exports = router