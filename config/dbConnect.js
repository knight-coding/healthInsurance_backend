import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

// console.log('MONGO_URI:', process.env.DATABASE_URL);
const connectDB = async () => {
    try{
        mongoose.connection.on('connected', () => {
            console.log('DB Connected');
        })
        await mongoose.connect(`${process.env.DATABASE_URL}/healthLeads`);
    } catch(err){
        console.error(err.message);
    }
}

export default connectDB;