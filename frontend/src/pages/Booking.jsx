import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import "../style/booking.css"
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const navigate=useNavigate()
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
    
        try{
        await axios.post("http://localhost:200/booking",formData)
        .then((res)=>{
          if(res.data.message==='ok'){
          setFormData({
            ReservationName:"",
            NumberOfSeats:"",
            LevelOfReservation:"",
            DateOfReservation:"",
            TimeOfReservation:""
          })
          navigate('/payment',{state:{objdata:formData}})
          }
        }
        )
    }catch(error){
      console.log(error)
    }

  }

  return (
    <div id='bookingParent'>
      <div className="bookingChild" id='bookingText' >
        Make a Reservation
      </div>

      <div className="bookingChild" id='bookingForm'>
        <form action="/booking" id='FormBody' onSubmit={handleSubmit}>
          <input type="text" 
          className="bookingInput formChild" 
          name='ReservationName'
          id='ReservationName'
          placeholder='Reversation Name'
          onChange={handleChange}
          required
          />

          <input type="number" 
          className="bookingInput formChild"  
          name='NumberOfSeats'
          id='NumberOfSeats'
          placeholder='Number of Attendees'
          onChange={handleChange}
          required
          />

         
            <select
              className="bookingInput formChild"
              name="LevelOfReservation"
              id="LevelOfReservation"
              onChange={handleChange}
              defaultValue=""
              required
            >
              <option value="" disabled>
                Reservation Tiers
              </option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Diamond">Diamond</option>
            </select>   

          <input type="date"
          className="bookingInput formChild"  
          name='DateOfReservation'
          id='DateOfReservation'
          placeholder='Date of Booking'
          onChange={handleChange}
          required
          />

          <input type="time" 
          min="09:00" max="22:00"
          className="bookingInput formChild" 
          name='TimeOfReservation'
          id='TimeOfReservation' 
          placeholder='Time of Arrival'
          onChange={handleChange}
          required
          />

          <button className='"formChild"' id='submitButn'>    
            Make a Reservation
          </button>

        </form>
      </div>
    </div>
  )
}

export default Booking