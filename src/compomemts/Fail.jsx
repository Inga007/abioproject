import React from 'react'
import { useState,useEffect } from "react";


import { useNavigate,Link } from "react-router-dom";
import '../css/tabs.css'

  
const Fail=() =>{
    
 
    
  


  return (
    <div className='succes'>
     
          <div className='modalCont'>
          
          {/* <button className="closeModal" onClick={closeModal}><img src={close}  /></button> */}
          </div>
          <div className="errortext">Your order is not confirmed! </div>
    <Link to='/'>
      <button className="continuShop">Continue Shopping</button></Link>
              
         
    </div>
  )
}

export {Fail}
