const Crypto=require("crypto-js")
const mysql = require('mysql2/promise');
const mysqlServices=require("../mysql");
const Sobj=new mysqlServices()

class Restaurant{
    constructor(totalSeats){
        this.totalSeats=totalSeats
        this.seatsAvailable=totalSeats
    }
    bookSeats(add){
        if(seatsAvailable==0){
            return 0
        }else{
            this.seatsAvailable+=add
        }
    }
    cancelReservation(sub){
        this.seatsAvailable-=sub
    }

}

module.exports=Restaurant

/*
    ReservationName,
    NumberOfSeats,
    LevelOfReservation,
    DateOfReservation,
    TimeOfReservation
*/