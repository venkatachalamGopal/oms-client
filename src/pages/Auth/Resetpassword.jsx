import { Checkbox } from '@mui/material';
import React, {  useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from '../../uitils/Axios';

function Resetpassword() {
    const navegate = useNavigate();
    const params = useParams()
    const [password,Setpassword]=useState('');
    const[repassword,Setrepassword] = useState("");
    const [click,Setclick]=useState(false)
const handleSubmit =async()=>{
 try {
    let token = params.token
    console.log(token)
    if(password === '' || repassword==='' && password !== repassword){
        alert("please fill the correct value on the password and re-password")
    }
    if(token){

        let {data} = await Axios.post("reset-password",{token,password,repassword})
        if(data.responce>0){
            alert(data.message)
            navegate("/home")
        }else{
            alert("Somthing Went Worng ! please try Agan")
        }
    }else{
        alert("Somthing Went Worng ! please try Agan")
    }
 
 } catch (error) {
    console.log(error);
    alert(error["response"]["data"])
 }
}
  return (
    <div className='container' >
    <div className='content-container' >
      <div className='header'>
        <h3> Forget password </h3>
      </div>
      <div className='input-container-algin'>
      
          <label className='input-lable' htmlFor="email">Password</label>
          <input className='input' type="text" value={password} onChange={(e)=>{Setpassword(e.target.value)}} name="email"  id=""  />
          <label className='input-lable' htmlFor="email"> Re-enter the Password</label>
          <input className='input' type={click?"text":"password"} value={repassword} onChange={(e)=>{Setrepassword(e.target.value)}} name="email"  id=""  />
      </div>
      Show Passwod
      <Checkbox checked={click} onChange={(e)=>{Setclick(e.target.checked)}} color="primary" />
      <div>
        <button className='btn-signin' onClick={handleSubmit} >Submit</button>
      </div>
    </div>
  </div>
  )
}

export default Resetpassword
