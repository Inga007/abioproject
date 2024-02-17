import React from 'react'
import { useState, useEffect } from 'react';
import closeShop from "../images/closeShop.svg"
import {shopData} from "../data/shopData"
import "../css/bagpage.css"
import "../responsive/bagpage.css"
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import axios from 'axios';


const BagPage=({openShop,setOpenShop,  shoping}) => {
  const {t,i18n}=useTranslation()

  
  const [shopingCard, setShopingCard] = useState(1);
  // const [noCart,setNoCart]=useState([])
  
  // const headers = JSON.parse(localStorage.getItem("headers")) ;
 
  let url = `https://abio.am:8443`;



  const [lezu, setlezu] = useState('')
  let getActiveCountry = JSON.parse(localStorage.getItem('lng'))

  useEffect(() => {
   
     getActiveCountry?.filter((item) => {
    if(item.active) {
      return  setlezu(item.name)
   } 
   
} )  
   
    
  }, [JSON.parse(localStorage.getItem('lng'))])




 
 
  



const onRemove = async  (prod) => {
 
  

  // const response = await axios.post(`${url}/abio/public/cart/deleteProduct?productCode=${prod}`,{},
  //   {
  //   headers: {
      
  //     'X-CART-ID':  headers
  //   }
  // }
  // )

  
  
    };
const Change = async  (prod, qu) => {
    
      
    //   if(qu<=0) {
    //       qu = 1;
    //     }else {
    //   const response = await axios.post(`${url}/abio/public/cart/updateProduct?productCode=${prod}&quantity=${qu}`,{},
    //     {                   
    //     headers: {
          
    //       'X-CART-ID':  headers
    //     }
    //   }
    //   ).then(el=>setShopingCard(el.data.quantity))
    
    // }
      
        };

     

//     useEffect(() => {
    
//       // fetchdatPosts()
//       onRemove()
//       Change()
      

// },[ shopingCard])
  
  
// useEffect(  () => {
//   // fetchdatPosts()

  
// }, [Change,onRemove]);


    
    
  
 
 
    return (
        <>
           <div className="shop__top">
                <p className="shoping-text">{t("shop.cart")}</p>     
                <img onClick={()=>setOpenShop(!openShop)}  src={closeShop} alt="closeShop" />                       
              </div>
      
            { shoping?.length == 0 ?
             (
              <div >
             <p className="shop__top noshop">{t("shop.nocart")}</p>
              </div>                       
             )  :
             
             (
              
              shoping?.cartProductDTOList?.map((item) =>
                             
                (
                  
                  <div key={item.productCode} className="card-shop">
                  <div className="card-img">
                    
                    <img src={`${url}/abio/public/files?productCode=${item.productCode}&fileName=${item?.picturePath}`}  alt="imag" />
                           
                  </div>
                  <div className="card-info">
                  <p className="card-info-name">{item?.[`name_${lezu}`]} </p>
                    <p className="card-info-price">{item?.discountPrice.toLocaleString()} AMD</p>
                    {item?.color ?  <p className="card-info-color">{t("shop.color")}:</p> : null}
                   
                    <div className='card__info-count'>
                      <div className="card-count">
                      <p className="card-minus" onClick={()=>Change(item.productCode,item.quantity -1)}>-</p>
                      <p >{item.quantity<=0 ? item.quantity=1: item.quantity}</p>
                      <p className="card-plus" onClick={()=>Change(item.productCode,item.quantity +1)}>+</p>
                    </div>
                    <button className='remove' onClick={()=>onRemove(item.productCode)}>{t("shop.remove")} </button>
                    </div>
                    
                  </div>
           
                </div>
                
                    )
                    
                  )
        
             )
         
         
             }
            
       
    <div className="shop__down">
                   <div className="shop__down-count">
                    <p>{t("shop.subtotal")} </p>
                    <p> {shoping?.globalDiscountPrice?.toLocaleString()} AMD</p>
                    </div>     
                   <Link onClick={()=>setOpenShop(!openShop)}  to="tabs"><button className="shop__down-btn" >{t("shop.checkout")}</button>  </Link> 
                 <p onClick={()=>setOpenShop(!openShop)} className="shop__down-continu">{t("shop.continue")}</p> 
         </div>
           
       
        </>
    );
  };
export {BagPage}