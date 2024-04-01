import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../css/slide.css";
import "../responsive/slide.css"

import axios from "axios";
import { useTranslation } from "react-i18next";
import {slideData} from "../data/slideData"

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard ,Autoplay} from "swiper";
import { useState, useEffect } from "react";



const Slider =(props)=>{
  const {t,i18n}=useTranslation()
    const [slideCard,setslideCard]=useState([])

    const [lezu, setlezu] = useState('')
    const [isReadMore, setIsReadMore] = useState(true);
  
    let url = `https://abio.am:8443`;

    const toggleReadMore = () => {
      setIsReadMore(isRe => !isRe);
    };


  let getActiveCountry = JSON.parse(localStorage.getItem('lng'))
  useEffect(() => {
    getActiveCountry?.filter((item) => {
      if(item.active) {
            return  setlezu(item.name)
         } 
         
    } )  
    
    
  }, [JSON.parse(localStorage.getItem('lng'))])


    const fetchPosts = async () => {
      let lang =i18n.language.slice(0,2)
                                 
    const res= await axios.get(`https://abio.am:8443/abio/public/get/headers?language=${lang}`).then(res =>{
      setslideCard(res.data)
    })
  
      
      
    }
  
  
    useEffect(() => {
      fetchPosts()
      
    
    },[]);
  

    return(
        <div className="homeSwiper-container">
          <Swiper
       

      breakpoints={{
        0:{
          slidesPerView:1,
          spaceBetween:3,
        },
        500:{
          slidesPerView:2,
          spaceBetween:3,
        },
        744:{
          slidesPerView:2,
          spaceBetween:3,
        },
        1200:{
            slidesPerView:3,
            spaceBetween:3,
          },
      }}

      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
            
        className="mySwiper HomeSlider"
        id="HomeSlide"
      >
    {slideCard?.map((item) =>
                        
                        (
                    <SwiperSlide key={item?.id} className="slide_block">
                            <div className="slide_item">
                                <img src={`${url}/abio/public/header/picture?productCode=${item?.id}`} alt="image" />
                                
                                <div className="text-slide">
                                
                                {/* <p className="strongTxt-slide"> {item[`headLine_${lezu}`]}</p> */}
            {item[`headLine_${lezu}`]?.length < 27 ? <p className="strongTxt-slide"> {item[`headLine_${lezu}`]}</p>
            : <p className='strongTxt-slide' onClick={setIsReadMore(isRe => !isRe)} >
            {item[`headLine_${lezu}`]?.length > 27 && isReadMore ? item[`headLine_${lezu}`]?.slice(0, 24) : item[`headLine_${lezu}`]?.slice(0, 34)}{
             isReadMore ? `...` : null
            }

             </p> 


            }
                          
   
                                <p className="boldTxt-slide">{item[`description_${lezu}`]}</p>
                                <Link to={item?.url}> <button className="btn__forSlide">{t("giftCard.buy")}</button></Link>
                                </div>
                               
                            </div>
                        </SwiperSlide>
                            )
                          )}
   
     
      </Swiper>

        </div>
    )
}

export {Slider}