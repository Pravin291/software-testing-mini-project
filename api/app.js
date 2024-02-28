import express from 'express';
import path from 'path'
import userRouter from "./routes/user.js"
import {connectDB} from "./database/db.js"
import cors from 'cors'

import {config} from 'dotenv'
import cookieParser from 'cookie-parser';
const app = express();
const port = 3000;
app.use(cors());
app.use(cors({
    origin: 'http://localhost:3001',  // Update with the actual origin of your React app
    credentials: true,
  }));
config({
    path:"./database/config.env"
})
app.set('view engine',"ejs")
app.use(express.static(path.join(path.resolve(),"public")))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(userRouter)

connectDB()

app.get("/",(req,res)=>{
    console.log(process.env.url)
    res.render('user') 
})

app.listen(port,(req,res)=>{
    console.log(`server is running at port ${port}`);
})