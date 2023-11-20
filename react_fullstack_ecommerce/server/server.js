const  express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

require('dotenv').config();

const {readdirSync} = require('fs')

const connectDB = require('./config/db')
const app = express()
const port = process.env.PORT;

connectDB()

//connect mongoose cloude database
// mongoose.connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useUnifiedTopology: false
// })
//     .then(() => console.log("เชื่อมต่อเรียบร้อย"))
//     .catch((err) => console.log(err))


// middleware
app.use(morgan('dev'))
app.use(bodyParser.json({limit:'20mb'}))
app.use(cors())




//route

// app.use('/api',require('./routes/api'))

readdirSync('./routes/')
.map((r)=>app.use('/api',require('./routes/'+r)))



app.listen(port, () => console.log(`Server runtime on port ${port}!`))