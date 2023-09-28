const express = require('express')
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const adminRoutes = require('./routes/admin')
const teacherRoutes = require('./routes/teacher')
const libraryRoutes = require('./routes/library')
const timeTableRoutes = require('./routes/timeTable')
const methodOverride = require('method-override')
const app = express()
const cors = require('cors')

require('dotenv').config({ path: './config/.env' })
connectDB()

app.set('view engine', 'ejs')

// Body Parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use(cors())

//method-override
app.use(methodOverride("_method"))

app.use('/', homeRoutes)
app.use('/admin', adminRoutes)
app.use('/teacher', teacherRoutes)
app.use('/library', libraryRoutes)
app.use('/timeTable', timeTableRoutes)

app.listen(5000, () =>{
    console.log('Server running on port 5000')
})