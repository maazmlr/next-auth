import mongoose, { mongo } from "mongoose";
import 'dotenv/config'
const connect=async()=>{

    try{
    mongoose.connect(process.env.MONGO_URL !)

    const connection=mongoose.connection;
    connection.on('connected',()=>{
    console.log('MongoDB connected');

    connection.on('error',()=>{
        console.log("mongoose connection error during connection");
        process.exit()
    })
})
    }
    catch(err){
        console.log(err)
    }
}

export default connect;