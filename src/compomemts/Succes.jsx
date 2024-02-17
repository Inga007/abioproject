import React from 'react'
import { useState,useEffect } from "react";


import { useNavigate,Link , useLocation} from "react-router-dom";
import '../css/tabs.css'

  
const Succes=() =>{
    
  const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const edpBillNo = queryParams.get('EDP_BILL_NO');
    let url = process.env.REACT_APP_BASE_URL;
    
  


  return (
    <div className='succes'>
     
          <div className='modalCont'>
          <h2 > <input type="checkbox" className="modalcheck" checked/> Thank You</h2>
          {/* <button className="closeModal" onClick={closeModal}><img src={close}  /></button> */}
          </div>
          <div className="modalText">Your order is confirmed! Order <span>{edpBillNo}</span> 
           A confirmation e-mail has been sent to namesurname@gmail.com  </div>
    <Link to='/'>
      <button className="continuShop">Continue Shopping</button></Link>
              
         
    </div>
  )
}

export {Succes}
