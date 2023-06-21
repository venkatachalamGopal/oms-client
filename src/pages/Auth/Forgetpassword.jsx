import React, { useState } from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import Axios from '../../uitils/Axios'

function Forgetpassword() {
  const navigate = useNavigate()
  const [email,Setemail]=useState("")
  const handleSubmit =async()=>{
        if(email !==""){
          console.log(email)
          try {
            let {data} = await Axios.post("forget-password",{email})
            if(data.responce>0){
              alert(data.message);
              navigate("/home")
            }
          } catch (error) {
            console.log(error)
            alert(error["response"]["data"])
          }
        
        }else{
          alert("please fill email feild")
          return ;
        }
       
  }
  return (
    <div className='container' >
    <div className='content-container' >
      <div className='header'>
        <h3> Forget password </h3>
      </div>
      <div className='input-container-algin'>
      
          <label className='input-lable' htmlFor="email">Email</label>
          <input className='input' type="text" value={email} onChange={(e)=>{Setemail(e.target.value)}} name="email"  id=""  />
        
      </div>
      <div>
      <NavLink  className='btn-alagin2' to="/signup"  >Create a Accepunt ! Go to Sign Up</NavLink>
        <button className='btn-signin' onClick={handleSubmit} >Submit</button>
      </div>
    </div>
  </div>
  )
}

export default Forgetpassword
