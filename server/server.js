const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const connectToMongoDB = require('./db/connectToDb');

const articleRoutes = require('./routes/articleRoutes');
const app = express();


const PORT = process.env.PORT || 3000;


//middleware
app.use(express.json());
app.use(cookieParser());
app.use('/api/article', articleRoutes)



app.get('/', (req,res)=>{
    res.send('Hello there')
})

app.listen(PORT, ()=>{
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`);
})