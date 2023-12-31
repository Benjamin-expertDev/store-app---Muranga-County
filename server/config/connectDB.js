const mongoose = require("mongoose")

const connectDB = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to the database")
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}




module.exports = connectDB