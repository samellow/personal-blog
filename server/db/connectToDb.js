const mongoose = require('mongoose');

const MONGODB_URL = 'mongodb+srv://sammykaris48:UTIKIbpKel6CATKa@blog.5717wof.mongodb.net/Blog?retryWrites=true&w=majority&appName=Blog'

const connectToMongoDB =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL || MONGODB_URL);
        console.log('connected to database');
    } catch (error) {
        console.log('error connecting to database', error.message);

    }
}

module.exports = connectToMongoDB;