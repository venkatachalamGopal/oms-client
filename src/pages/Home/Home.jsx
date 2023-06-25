import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    let navigate =  useNavigate()
  return (
    <div className="main-contaniner">
      <div className="sub1-cointainer">
        <div className="heading">
          {" "}
          Order Management System App
        </div>
        <div className="middle-sepperation">
       <div>
          <h3> so, let's start. Welcome you.</h3>
          
          <div className="auth-middle-algin">
            
           <button className="btn-signin1" onClick={()=>{navigate("/signin")}}>Sign In </button>
           <button className="btn-signup1" onClick={()=>{navigate("/signup")}}>Sign UP</button>
          </div>
       </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
