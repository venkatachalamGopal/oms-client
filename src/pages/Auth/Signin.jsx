import React, { useEffect, useState } from 'react'
import "./signin.css"
import Axios from '../../uitils/Axios'
import { NavLink, useNavigate } from 'react-router-dom'

function Signin() {
const navigate = useNavigate()
  const [name,Setname]=useState("")
  const [password,Setpassword]=useState("")
  const handleSubmit =async()=>{
    try {
      if(name ==="" || password ===""){
        alert("please fill the boxs")
        return
      }
      let {data} = await Axios.post("signin",{email:name,password})
      console.log(data)
    localStorage.setItem("token",data.token);
    localStorage.setItem("role",data.details.role);
    localStorage.setItem("Issignin",data.details.Issignin);
    localStorage.setItem("id",data.details.id)
      Setname("")
      Setpassword("")
      navigate("/list")
      
    } catch (error) {
      console.log(error);
      alert(error["response"]["data"])
    }
  }
  useEffect(()=>{
   let value =localStorage.getItem("Issignin")
if(value&&value ==="true"){
     let permission = window.confirm("Are you want sign out  .?")
     if(permission){
      localStorage.clear()
            navigate("/signin")
     }else{
      navigate("/list")
     }

}
  },[])
  return (
    <div className='container' >
      <div className='content-container' >
        <div className='header'>
          <h3> Sign In </h3>
        </div>
        <div className='input-container-algin'>
        
            <label className='input-lable' htmlFor="username">User Name</label>
            <input className='input' type="text" value={name} onChange={(e)=>{Setname(e.target.value)}} name="username" id=""  />
          
        
            <label className='input-lable' htmlFor="password">Password</label>
            <input className='input' type="password" value={password} onChange={(e)=>{Setpassword(e.target.value)}} name="password" id="" />
          
          
        </div>
        <div>
        <NavLink  className='btn-alagin2' to="/signup"  >Create a Account ! Go to Sign Up</NavLink>
          <button className='btn-signin' onClick={handleSubmit} >Sign In</button>
        </div>
        <NavLink  className='btn-alagin2' to="/forgetpassword"  >Forgotpassword ?</NavLink>
      </div>
    </div>
  )
}

export default Signin
