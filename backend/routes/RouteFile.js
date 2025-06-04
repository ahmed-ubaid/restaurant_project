const express=require('express')
const router=express.Router()


const mysql = require('mysql2/promise');
const mysqlServices=require("../mysql");
const UtilityClass= require("../functions/UtilityClass");
const utility=new UtilityClass()

router.get('/id',(req,res)=>{
    res.send("user data")
})


router.get('/home',async(req,res)=>{
   //const data=await mysqlServices.run(mysqlServices.prototype.fetchReservationData)
   //console.log(data)
})
router.get('/about',async(req,res)=>{

})
router.get('/menu',async(req,res)=>{
    
})
router.get('booking',async(req,res)=>{

})
router.get('/payment',async(req,res)=>{
    console.log("here")
    /*const {ReservationName,NumberOfSeats,LevelOfReservation}=req.query
    console.log(utility.calculatePrice(NumberOfSeats,LevelOfReservation))*/
})
router.post('/booking',async(req,res)=>{
    const {ReservationName,NumberOfSeats,LevelOfReservation,DateOfReservation,TimeOfReservation}=req.body
    
    res.json({message:"ok"})
    
    console.log(ReservationName,NumberOfSeats,LevelOfReservation,DateOfReservation,TimeOfReservation)
    
    await mysqlServices.run(mysqlServices.prototype.saveReservation,ReservationName, NumberOfSeats, LevelOfReservation, DateOfReservation, TimeOfReservation);

    //await mysqlServices.run(Sobj.saveReservation(ReservationName,NumberOfSeats,LevelOfReservation,DateOfReservation,TimeOfReservation))
    //const data=await mysqlServices.run(mysqlServices.prototype.fetchData)
    // res.redirect(`/payment?ReservationName=${ReservationName}&NumberOfSeats=${NumberOfSeats}&LevelOfReservation=${LevelOfReservation}`)
})


module.exports=router
