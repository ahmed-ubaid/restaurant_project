const express=require('express')
const app=express()
const bodyParser=require("body-parser")
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(bodyParser.json())
const cors=require('cors')
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["POST","GET"],
    credentials:true
}))


const mysql = require('mysql2/promise');
const mysqlServices=require("./mysql");
const Sobj=new mysqlServices()

const dotenv=require('dotenv')
dotenv.config();


app.get('/home',async(req,res)=>{
   // console.log(
   const data=await mysqlServices.run(mysqlServices.prototype.fetchData)
   
   res.json({message:data})
})

app.get('/about',async(req,res)=>{

})
app.get('/menu',async(req,res)=>{
    
})
app.get('/booking',async(req,res)=>{
    
})
app.listen(200,()=>{
    console.log("app is listening")
})

