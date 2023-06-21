import React, { useEffect, useState } from 'react';
import { BrowserRouter as Routers,Route,Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Signin from '../pages/Auth/Signin';
import SignUP from '../pages/Auth/SignUP';
import List from "../pages/Action/list";
import Edit from '../pages/Action/Edit';
import Forgetpassword from '../pages/Auth/Forgetpassword';
import Resetpassword from '../pages/Auth/Resetpassword';

export default function Router() {

  return (
    <>
    <Routers>
      <Routes>
        <Route path='*' match element={<Home/>} />
        <Route path='signin' element={<Signin/>}/>
        <Route path="signup" element ={<SignUP/>}/>
         <Route path='list' element={<List/>}/> 
      <Route path='edit/:id' element={<Edit/>}/> 
      <Route path='create' element={<Edit/>}/>
      <Route path='forgetpassword' element={<Forgetpassword/>}/>
      <Route path = "reset-password/:token" element={<Resetpassword/>}/>
      </Routes>
    </Routers>
    </>
  )
}
