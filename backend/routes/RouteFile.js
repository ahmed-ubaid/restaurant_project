const express=require('express')
const router=express.Router()
const CryptoJS = require('crypto-js');

const mysql = require('mysql2/promise');
const mysqlServices=require("../mysql");
const UtilityClass= require("../functions/UtilityClass");
const utility=new UtilityClass()

router.get('/id',(req,res)=>{
    res.send("user data")
})


router.get('/home',async(req,res)=>{
    try{
        console.log(await mysqlServices.run(mysqlServices.prototype.fetchReservationData))
    }catch(error){
        console.log("something went wrong")
    }
})

router.get('/about',async(req,res)=>{
})

router.get('/menu',async(req,res)=>{
})

router.get('/booking',async(req,res)=>{
})

router.get('/payment',async(req,res)=>{
})

router.post('/booking',async(req,res)=>{
    const {email,ReservationName,NumberOfSeats,LevelOfReservation,DateOfReservation,TimeOfReservation}=req.body
    
    const res_id=CryptoJS.SHA256(`${ReservationName,NumberOfSeats,LevelOfReservation,DateOfReservation,TimeOfReservation,email}`).toString(CryptoJS.enc.Hex)
    
    console.log(res_id)
    
    try{
        await mysqlServices.run(mysqlServices.prototype.saveReservation,ReservationName, NumberOfSeats, LevelOfReservation, DateOfReservation, TimeOfReservation,email);
        
    }catch(error){
        console.log("Something went wrong")
    }

    res.json({message:"ok"})
})


module.exports=router
