// import React, { useRef, useState, useEffect } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "../css/recom.css"
// import "../responsive/recom.css"
// import { Pagination, Navigation } from "swiper";
// import axios from "axios";
// import { useTranslation } from "react-i18next";

// import row from "../images/line.png"

// import shop from "../images/shop.svg"
// import {recomendateData} from "../data/recomendateData"


// const Recommended=()=>{
//   const {t}=useTranslation()

//     // const [recCard, setrecCard] = useState(recomendateData);
//     const [rec, setRec]= useState([])

//   let url = `https://abio.com.ru:8443`;
    
  
//     const getData = async () => {
//       const responce  = await axios.get(`${url}/abio/public/getGiftCardProducts?language=EN&page=0&size=50`);
//       setRec(responce.data);
//     };
    
//     useEffect(() => {
//       getData();
//     }, []);
    
//     const onAdd = async  (prod) => {
//       const headers = JSON.parse(localStorage.getItem("headers")) ;
      
    
//       const response = await axios.post(`${url}/abio/public/cart/addProduct?productCode=${prod}&quantity=1`,{},
//         {
//         headers: {
          
//           'X-CART-ID':  headers
//         }
//       }).catch(er =>console.log(er));
      
      
//         };
    
    


//     return(
//         <>
        

//             <p className="recommend">{t("Home.recomended")}</p>
//             <div className="container">
//         <div className="homeSwiper-container">
//         <p className="viewAll">{t("Home.all")}</p>

//             <Swiper
//     breakpoints={{
//         0:{
//           slidesPerView:2,
//           spaceBetween:10,
//         },
//         500:{
//           slidesPerView:2,
//           spaceBetween:10,
//         },
//         744:{
//           slidesPerView:2,
//           spaceBetween:10,
//         },
//         1200:{
//             slidesPerView:4,
//             spaceBetween:10,
//           },
//       }}

    
//         loop={true}
//         loopFillGroupWithBlank={true}
      
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper sliderRec rec"
//         id="recSlide"
//       >
 
//         {rec?.map((item) =>
                        
//                         (
//                             <SwiperSlide key={item.productCode} className="rec-card">
                           
//              <img className="product-img" src={`${url}/abio/public/files?productCode=${item.productCode}&fileName=${item.pictureIds[0]}`}/>
//              <div className="rec__info">
//              <p className="rec_name">{item.title}</p>
//             <div className="rec-colorsSlide">
//                 <div className="green"></div>
//                 <div className="pinck"></div>
//                 <div className="red"></div>
                
//             </div>
//             <div className="rec-price price__rec">
//                  <div className="price swiper__price">
//                  <p className="new-price"> {item?.discount === 0 ? item?.price : item?.discountPrice} {t("Filter.amd")}</p>
//                      <p className="old-price">{item?.discount > 0  ? item?.price: null} </p>
//                 </div>
  
            
//                 <img  
//               src={shop} alt="shop"  onClick={()=>onAdd(item.productCode)} />
//         </div>                
//              </div>
     
//                         </SwiperSlide>


//                         ))}

      
//       </Swiper>
//       </div>
//       </div>
//         </>
//     )
// }
// export {Recommended}