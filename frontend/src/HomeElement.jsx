import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'

export default function HomeElement()  {
    const [data,setData]=useState([])
    const fetchdata=async()=>{
        try{
            const empData=await axios.get("http://localhost:200/home")
            console.log(empData.data.message)
            setData(empData.data.message)
        }catch(error){
            console.log("something went wrong")
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchdata()

    },[])


  return (
    <div>
        <Navbar/>
        <img src="./pic3.png" alt="" style={{width:"100%",height:"100vh"}}/>
        {data.map((e,i)=>(
                <li key={i}>{e.FIRST_NAME}</li>
        ))}
        
    </div>
  )
}
