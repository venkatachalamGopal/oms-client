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
          Customer Relationship Management System (CRM) Demo Applicaton
        </div>
        <div className="middle-sepperation">
       <div>
       <div className="explination-para">
            A CRM system gives everyone — from sales, customer service, business
            development, recruiting, marketing, or any other line of business —
            a better way to manage the external interactions and relationships
            that drive success. A CRM tool lets you store customer and prospect
            contact information, identify sales opportunities, record service
            issues, and manage marketing campaigns, all in one central location
            — and make information about every customer interaction available to
            anyone at your company who might need it. With visibility and easy
            access to data, it's easier to collaborate and increase
            productivity. Everyone in your company can see how customers have
            been communicated with, what they’ve bought, when they last
            purchased, what they paid, and so much more. CRM can help companies
            of all sizes drive business growth, and it can be especially
            beneficial to a small business, where teams often need to find ways
            to do more with less.
          </div>
          <h1> so, let's start. Welcome you.</h1>
          <div className="auth-middle-algin">
            
           <button className="btn-signin1" onClick={()=>{navigate("/signin")}}>Sign In </button>
           <button className="btn-signup1" onClick={()=>{navigate("/signup")}}>Sign UP</button>
          </div>
       </div>
          <img
            className="crm-img"
            src="https://variablesoft.com/CrmContent/img/data-collection.jpg"
            alt=""
          />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
