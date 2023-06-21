import React, { useState,useEffect } from 'react'

import "./signup.css"
import { NavLink, useNavigate } from 'react-router-dom'
import Axios from '../../uitils/Axios'


function SignUP() {
  const navigate = useNavigate()
  const [name,Setname]=useState("")
  const [password,Setpassword]=useState("")
  const handleSubmit =async()=>{
  try {
    if(name ==="" || password ===""){
      alert("please fill the boxs")
      return
    }
    let {data} = await Axios.post("signup",{email:name,password})
    
    Setname("")
    Setpassword("")
    navigate("/signin")
    if(data.responce>0){
       alert(data.message)
    }
  } catch (error) {
    //console.log(error.response.data)
    console.log(error)
    alert(error["response"]["data"])
  }
  }


  useEffect(()=>{
    let value =localStorage.getItem("Issignin")
    console.log(value)
 if(value&&value ==="true"){
      let permission = window.confirm("Are you want sign out  .?")
      if(permission){
       localStorage.clear()
             navigate("/signup")
      }else{
       navigate("/list")
      }
 
 }
   },[])
  return (
    <div className='container' >
      <div className='content-container' >
        <div className='header'>
          <h3> Sign Up </h3>
        </div>
        <div className='input-container-algin'>
        
            <label className='input-lable' htmlFor="username">User Name</label>
            <input className='input' type="text" value={name} onChange={(e)=>{Setname(e.target.value)}} name="username" id="" required  />
          
        
            <label className='input-lable' htmlFor="password">Password</label>
            <input className='input' type="password" value={password} onChange={(e)=>{Setpassword(e.target.value)}} name="password" required id="" />
          
          
        </div>
        <div className='btn-alagin2'>
          <NavLink  className='btn-alagin2' to="/signin"  >Go to Sign In</NavLink>
          <button className='btn-signin' onClick={handleSubmit} >Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default SignUP
