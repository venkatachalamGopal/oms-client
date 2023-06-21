import React, { useEffect, useState } from 'react'
import "./Edit.css"
import { useNavigate, useParams } from 'react-router-dom'
import Axios from '../../uitils/Axios';
import { Button } from '@mui/material';

function Edit() {
  
    const navigater = useNavigate()
    const[Isedit,SetIsedit]= useState(false)
    const[name,Setname] = useState("");
    const[email,Setemail]= useState("");
    const[phone,Setphone]= useState(0);
    const [address,Setadress]=useState("")
    let {id} = useParams()
    const getdata =async()=>{
        try{
            let {data} = await Axios.get("edit/"+id)

            Setname(data.name);
            Setemail(data.email);
            Setphone(data.phone)
            Setadress(data.address.city)
        }
        catch(error){
            if(error["response"]["data"]==="jwt expired"){
                localStorage.clear()
                navigater("/home")
            }
        }
    }   
    useEffect(()=>{
       if(Number(id)){
        SetIsedit(true);
       getdata()
    }
    },[])
    const handleSubmit =async()=>{
        let details ={
            name,
            email,
            phone,
            "address":{
               city:address
            },
            
        }
        let url =''
        Isedit ? url = "update/"+id: url = "add"
    try {
        let {data} = await Axios.post(url,details)
        if(data.responce>0){
            alert(data.message);
            navigater("/list")
            
        }
    } catch (error) {
        console.log(error);
        alert(error["response"]["data"])
        if(error["response"]["data"]==="jwt expired"){
            localStorage.clear()
            navigater("/home")
        }
    }

    }
  return (
    <div className='container' >
    <div className='content-container' >
      <div className='header'>
       {
         Isedit ?  <h3> Edit # {id}</h3> : <h3>ADD</h3>
       }
      </div>
      <div className='input-container-algin'>
      
          <label className='input-lable' htmlFor="username">User Name</label>
          <input className='input' type="text" value={name} onChange={(e)=>{Setname(e.target.value)}} name="username" required  />
          <label className='input-lable' htmlFor="email">Email</label>
          <input className='input' type="email" value={email} onChange={(e)=>{Setemail(e.target.value)}} name="email" required />
          <label className='input-lable' htmlFor="password">Phone</label>
          <input className='input' type="text" value={phone} onChange={(e)=>{Setphone(e.target.value)}} name="phone" required />
          <label className='input-lable' htmlFor="adrress">Address</label>
          <input className='input' type="text" value={address} onChange={(e)=>{Setadress(e.target.value)}} name="adrress" required />
      </div>
      <div className='btn-alagin2'>
        <Button variant="outlined" onClick={()=>{handleSubmit()}} color="success">Submit</Button>
      </div>
    </div>
  </div>
  )
}

export default Edit
