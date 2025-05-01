import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Booking = () => {
  const [formData,setFormData]=useState({
    bookingInput:"",
    NumberOfSeats:0,
    Level:"",
    Date:"",
    Time:""
  })
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    try{

    }catch(error){
      console.log()
    }
  }

  return (
    <div id='bookingParent'>
      <div className="bookingChild" id='bookingText' >

      </div>

      <div className="bookingChild" id='bookingForm'>
        <form action="" id='bookingForm' onSubmit={handleSubmit}>
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