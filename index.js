import express from "express";
import cors from "cors";

import "dotenv/config";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import router from "./routes/index.js";
dotenv.config()

connectDB()

//app configuration
const app = express();
const port = process.env.PORT || 3000;


//middleware
app.use(express.json());

// Enable CORS for all origins
app.use(cors({
  origin: "*",              // allow all clients (Postman, frontend, etc.)
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

//router
app.use("/api",router)


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
