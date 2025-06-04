import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Payment() {
  const location=useLocation()
  const obj=location.state.objdata
  console.log(obj)
  const calculatePrice=(num,rank)=>{
      num=Number(num)
      rank=rank.toLowerCase() 
      switch(rank){
          case "silver":
              return num>5?num*1:num*2
          case "gold":
              return num>5?num*2:num*3
          case "diamond":
              return num>5?num*3:num*4
      }
  }
  return (
    <div>
      payment for {calculatePrice(obj.NumberOfSeats,obj.LevelOfReservation)}
    </div>
  )
}
/*


ReservationName:"",
            obj.NumberOfSeats:"",
            obj.LevelOfReservation:"",
            DateOfReservation:"",
            TimeOfReservation:""
*/