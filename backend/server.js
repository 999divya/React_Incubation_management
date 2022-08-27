require('dotenv').config()
const express = require('express');
const app = express()
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn')
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const corsOptions = require('./config/corsOptions');
const PORT = process.env.PORT||5000

//database connection
connectDB();

//Cross origin resorce sharing
app.use(cors(corsOptions));

//built-in middleware for json
app.use(express.json());



//routes

app.use('/api/auth', require('./routes/auth'))
app.use('/api/admin', require('./routes/adminRouter'));
app.use('/api/user', require('./routes/userRouter'));


//error handler
app.use(errorHandler)

mongoose.connection.once('open',()=>{
    console.log('connected to mongodb');
    app.listen(PORT,()=>{
        console.log(`server is listening on PORT no. ${PORT}.....`)
    })
})

