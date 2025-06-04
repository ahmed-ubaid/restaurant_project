const express=require('express')
const app=express()
const cookieParser=require('cookie-parser')
const session= require('express-session')
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


const dotenv=require('dotenv');
dotenv.config();


const routerBooking=require("./routes/RouteFile.js")


const restClasss=require("./functions/Restaurant.js")
const Restaurant=new restClasss(10)
app.get('/admin',(req,res)=>{
    res.send({rest:Restaurant.seatsAvailable})
})
app.use('/',routerBooking)


app.listen(200,()=>{
    console.log("app is listening")
})

      