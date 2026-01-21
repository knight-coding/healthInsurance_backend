import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import router from "./routes/index.js";
import connectDB from './config/dbConnect.js';
import corsOptions from './config/corsOptions.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors(corsOptions));

app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.use(router);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});