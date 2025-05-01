import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Booking = () => {
  const [formData,setFormData]=useState({
    ReservationName:"",
    NumberOfSeats:"",
    LevelOfReservation:"",
    DateOfReservation:"",
    TimeOfReservation:""
  })
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(formData)
    
        try{
        await axios.post("http://localhost:200/booking",formData)
        .then(
          setFormData({
            ReservationName:"",
            NumberOfSeats:"",
            LevelOfReservation:"",
            DateOfReservation:"",
            TimeOfReservation:""
          })
        )
    }catch(error){
      console.log(error)
    }

  }

  return (
    <div id='bookingParent'>
      <div className="bookingChild" id='bookingText' >

      </div>

      <div className="bookingChild" id='bookingForm'>
        <form action="/booking" id='bookingForm' onSubmit={handleSubmit}>
          <input type="text" 
          className="bookingInput" 
          name='ReservationName'
          id='ReservationName'
          placeholder='Reversation Name'
          onChange={handleChange}/>

          <input type="text" 
          className="bookingInput" 
          name='NumberOfSeats'
          id='NumberOfSeats'
          placeholder='Number of Attendees'
          onChange={handleChange}/>

          <input type="text" 
          className="bookingInput" 
          name='LevelOfReservation'
          id='LevelOfReservation'
          placeholder='Revrsation Tiers'
          onChange={handleChange}/>

          <input type="text" 
          className="bookingInput" 
          name='DateOfReservation'
          id='DateOfReservation'
          placeholder='Date of Booking'
          onChange={handleChange}/>

          <input type="text" 
          className="bookingInput"
          name='TimeOfReservation'
          id='TimeOfReservation' 
          placeholder='Time of Arrival'
          onChange={handleChange}/>

          <button> Make a Reservation</button>
        </form>
      </div>
    </div>
  )
}

export default Booking