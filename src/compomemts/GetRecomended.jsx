import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/recom.css"
import "../responsive/recom.css"
import { Pagination, Navigation } from "swiper";
import axios from "axios";
import { useTranslation } from "react-i18next";

import row from "../images/line.png"

import shop from "../images/shop.svg"
import {recomendateData} from "../data/recomendateData"


const GetRecomended=()=>{
  const {t,i18n}=useTranslation()

  let url = `https://abio.am:8443`;
    
    const [rec, setRec]= useState([])

   

    const [cartItems, setCartItems] = useState(() => {
      const ls = localStorage.getItem("bookmarks");
      if (ls) return JSON.parse(ls);
      else return [];
    });
    
    
      useEffect(() => {
     
        localStorage.setItem("bookmarks", JSON.stringify(cartItems));
      
      }, [cartItems]);
      useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem("bookmarks")) || [])
    
    }, [localStorage.getItem("bookmarks")]);
     
  
       const favadd= (product)=>{
     
        const  exist =  cartItems.find((x) => x.productCode === product.productCode);
        if (exist ) {
          setCartItems(
            cartItems.map((x) =>
              x.productCode === product.productCode ? { ...exist } : x
            )
          );
        } else {
          setCartItems([...cartItems, { ...product}]);
        }
       
       
        }
  
    
  
    // const getData = async () => {
    //   let lang =i18n.language.slice(0,2).toUpperCase()
    //   const responce  = await axios.get(`${url}/abio/public/getRecommendedProducts?language=${lang}&page=0&size=50`);
     

    //   setRec(responce.data);
    // };
    
    useEffect( () => {
    const isCanseled = axios.CancelToken.source();
    let lang =i18n.language.slice(0,2)
    axios.get(`https://abio.am:8443/abio/public/getRecommendedProducts?language=${lang}&page=0&size=50`,{
      isCanseled: isCanseled.token
    }
    ).then( responce => {
   setRec(responce.data)
     
    }
      )
   return ()=>{
    isCanseled.cancel()
   }

      // getData();
    }, [i18n.language]);
    
    // const headers = JSON.parse(localStorage.getItem("headers")) ;

    const onAdd = async  (prod) => {
     
      
    
      const response = await axios.post(`${url}/abio/public/cart/addProduct?productCode=${prod}&quantity=1`,{},
        {
        headers: {
          
          // 'X-CART-ID':  headers
        }
      }).catch(er =>console.log(er));
      
      
        };


        const handleChartClick = (e) => {
          e.preventDefault();
          
        }
    
    
    


    return(
        <>
        

            <p className="recommend">{t("Home.recomended")}</p>
            <div className="container">
        <div className="homeSwiper-container">
        <p className="viewAll">{t("Home.all")}</p>

            <Swiper
    breakpoints={{
        0:{
          slidesPerView:2,
          spaceBetween:10,
        },
        500:{
          slidesPerView:2,
          spaceBetween:10,
        },
        744:{
          slidesPerView:2,
          spaceBetween:10,
        },
        1200:{
            slidesPerView:4,
            spaceBetween:10,
          },
      }}

    
        loop={true}
        // loopFillGroupWithBlank={true}
      
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper sliderRec rec"
        id="recSlide"
      >
 
        {rec?.map((item) =>
                        
                        (
                            <SwiperSlide key={item?.productCode} className="rec-card">

                     
                                
            
           
                
           <svg  className="favoritSvg"
            onMouseDown ={handleChartClick}
          onClick={()=>favadd(item)}
           width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="27" height="27" rx="10" fill="#FDFDFF"/>
            <path d="M13.0772 21.0635L6.34668 14.333C4.5542 12.5405 4.50276 9.72478 6.1484 8.07914L6.14856 8.07898C7.79312 6.43292 10.6087 6.48473 12.4022 8.27742C12.4023 8.27745 12.4023 8.27747 12.4023 8.2775L12.7245 8.59973L13.0781 8.95329L13.4316 8.59973L13.7539 8.2775C13.7539 8.27747 13.7539 8.27745 13.754 8.27742C15.5223 6.50988 18.2843 6.4347 19.9378 8.00996L20.0069 8.07906C21.6517 9.72469 21.6003 12.5404 19.8071 14.3329L19.807 14.333L13.0772 21.0635Z" stroke="#0E0E0E"/>
            </svg>
            <Link  className="product__link" to={`/card/${item.productCode}`}>            
             <img className="product-img" src={`${url}/abio/public/files?productCode=${item?.productCode}&fileName=${item.pictureIds[0]}`}/>
             </Link>
             <div className="rec__info">
             <p className="rec_name">{item?.name}</p>
           
            <div className="rec-colorsSlide">
                    { item?.colorCodes?.length > 0 ? item?.colorCodes.map((el, ind)=>{
                      return(
                                 <>
                <div className={el} key={ind}></div>
              
                </>
                      )
                      }
                    ) : null}

             
                
            </div>
       
            <div className="rec-price price__rec">
                 <div className="price swiper__price">
                 <p className="new-price"> {item?.discount=== 0 ? item?.price.toLocaleString() : item?.discountPrice.toLocaleString()} AMD</p>
                     <p className="old-price">{item?.discount > 0  ? item?.price.toLocaleString(): null} </p>
                </div>
  
            
                <img  onClick={()=>onAdd(item.productCode)}
              src={shop}  className="shopcart" alt="shop"  />

        </div>                
             </div>
           
     
                        </SwiperSlide>


                        ))}

      
      </Swiper>
      </div>
      </div>
        </>
    )
}
export {GetRecomended}