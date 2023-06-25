import React, { useEffect, useState } from 'react'
import "./Edit.css"
import { useNavigate, useParams } from 'react-router-dom'
import Axios from '../../uitils/Axios';
import { Button } from '@mui/material';

function Edit() {
  
    const navigater = useNavigate()
    const[Isedit,SetIsedit]= useState(false)
    const[productname,Setproductname] = useState("");
    const[price,Setprice]= useState("");
    const[rating,Setrating]= useState(0);
    const [quantity,Setquantity]=useState("")
    let {id} = useParams()
    const getdata =async()=>{
        try{
            let {data} = await Axios.get("edit/"+id)

            Setproductname(data.productname);
            Setprice(data.price);
            Setrating(data.rating)
            Setquantity(data.quantity)
        }
        catch(error){
            if(error["response"]["data"]==="jwt expired"){
                localStorage.clear()
                navigater("/home")
            }
        }
    }   
    useEffect(()=>{
       if(id){
        SetIsedit(true);
       getdata()
    }
    },[])
    const handleSubmit =async()=>{
        let details ={
            productname,
            price,
            rating,
            quantity,
            
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
         Isedit ?  <h3> Edit </h3> : <h3>ADD</h3>
       }
      </div>
      <div className='input-container-algin'>
      
          <label className='input-lable' htmlFor="productname">Product Name</label>
          <input className='input' type="text" value={productname} onChange={(e)=>{Setproductname(e.target.value)}} name="productname" required  />
          <label className='input-lable' htmlFor="price">Price</label>
          <input className='input' type="text" value={price} onChange={(e)=>{Setprice(e.target.value)}} name="price" required />
          <label className='input-lable' htmlFor="rating">Rating</label>
          <input className='input' type="text" value={rating} onChange={(e)=>{Setrating(e.target.value)}} name="rating" required />
          <label className='input-lable' htmlFor="quantity">Quantity</label>
          <input className='input' type="text" value={quantity} onChange={(e)=>{Setquantity(e.target.value)}} name="quantity" required />
      </div>
      <div className='btn-alagin2'>
        <Button variant="outlined" onClick={()=>{handleSubmit()}} color="success">Submit</Button>
      </div>
    </div>
  </div>
  )
}

export default Edit
