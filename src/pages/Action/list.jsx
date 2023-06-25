import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Axios from '../../uitils/Axios';
import { Button } from '@mui/material';


export default function List() {
    const [list,Setlist]= useState([])
    const navigate = useNavigate()
    let role = localStorage.getItem("role");
    const getdata =async()=>{
          try {
            let {data}  = await Axios.get("list")
            console.log(data);
          Setlist(data);
          } catch (error) {
            console.log(error);
            alert(error["response"]["data"])
            if(error["response"]["data"]==="jwt expired"){
                localStorage.clear()
                navigate("/home")
            }
          }
    }
    useEffect(()=>{
   let IssignIn = localStorage.getItem("Issignin");
   
   if(!IssignIn){
    navigate("/home")
   }
   getdata();
    },[])

 const handledelete = async(id)=>{
    try {
      let {data} = await Axios.delete("delete/"+id)
      if(data.responce>0){
       alert(data.message);
       getdata();
      }else{
       alert(data)
      }
    } catch (error) {
      console.log(error);
      alert(error["response"]["data"])
      if(error["response"]["data"]==="jwt expired"){
          localStorage.clear()
          navigate("/home")
      }
    }
 }
 const HandlesigOut =async()=>{
    let {data} = await Axios.get("signout")
    alert(data)
    localStorage.clear()
    navigate("/home")
 }

  return (
    <div>
      <div className='add-btn-align'>
      <Button variant='outlined'  color='error' onClick={()=>{HandlesigOut()}}>Sign Out</Button>
      {
        role !== "user" && <Button variant='outlined'  color='primary' onClick={()=>{navigate("/create")}}>ADD</Button>
      }
      </div>
        {
            list.length>0 &&  <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>S.No</TableCell>
                  <TableCell align="left">Product Name</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Rating</TableCell>
                  <TableCell align="left">Available Quantity</TableCell>
                  {
                    role !== "user" && <TableCell align="left">Action</TableCell>
                  }
                </TableRow>
              </TableHead>
              <TableBody>
                {list?.map((row,i) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {i+1}
                    </TableCell>
                    <TableCell align="left">{row.productname}</TableCell>
                    <TableCell align="left">{row.price}</TableCell>
                    <TableCell align="left">{row.rating}</TableCell>
                    <TableCell align="left">{row.quantity}</TableCell>
                    <TableCell align="left">
                       { role !== "user" ? ( 
                        <>
                         <Button variant='outlined' color='success' onClick={()=>{navigate(`/edit/${row.id}`)}} >Edit</Button>  
                         {
                           role ==="manager" && <Button variant="outlined" color="error" onClick={()=>{handledelete(row.id)}} >Delete</Button>
                         }
                        </>
                      ) : null
                       }
                    </TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>
        }
      
    </div>
  )
}
