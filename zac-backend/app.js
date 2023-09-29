const express = require('express')
const connectDB = require('./config/database')
const userRoutes = require('./routes/users')
const homeRoutes = require('./routes/home')
const adminRoutes = require('./routes/admin')
const teacherRoutes = require('./routes/teacher')
const libraryRoutes = require('./routes/library')
const timeTableRoutes = require('./routes/timeTable')
const methodOverride = require('method-override')
const passport = require('passport')
const app = express()
const cors = require('cors')

require('dotenv').config({ path: './config/.env' })
connectDB()

app.set('view engine', 'ejs')

// Body Parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

app.use(passport.initialize())

require('./middleware/passport')(passport)

//method-override
app.use(methodOverride("_method"))

app.use('/api/users', userRoutes)

app.use('/', homeRoutes)
app.use('/admin', adminRoutes)
app.use('/teacher', teacherRoutes)
app.use('/library', libraryRoutes)
app.use('/timeTable', timeTableRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})