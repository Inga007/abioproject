import { Link } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Slider } from "./Slider"
import "../css/home.css"
import "../responsive/home.css"

import row from "../images/line.png"

import { Recommended } from "./Recommended"
import { PinkArea } from "./PinkArea"
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import {GetRecomended} from "./GetRecomended"
import axios from "axios"


const Home =()=>{
 
    const {t,i18n}=useTranslation()
    const location = useLocation();
    const [video,setVideo] = useState([])
    const [isReadMore, setIsReadMore] = useState(true);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    let url = `https://abio.am:8443`;

    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

    const fetchPosts = async () => {
       
      let lang =i18n.language.slice(0,2).toUpperCase()
      
        const res= await axios.get(`${url}/abio/public/get/video/byLang?language=${lang}`)
                                   
        
     
        setVideo(res.data)
        
      }
    
    
      useEffect(() => {
        fetchPosts()
      
      }, [i18n.language]);
    
    return(
        <>
        <div className="container">
      

        <Slider/></div>

        <div className="bgImg">

        {/* video  start*/}
       
        <div className="videoLess">
          <div className="videoMain">
        <p className="videoLess-txt">{t("mainMenu.video")}</p>
           
       
            <div className="videoLess-area">
           
            <iframe width="878" height="440" src={video[0]?.url} title="YouTube video player" style={{border:0}}   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>      
           


            <div ><p className='videoLess-moretxt' onClick={toggleReadMore} >
              {isReadMore ? video[0]?.description.slice(0, 100)+"..." : video[0]?.description}
             
                </p></div>
            {/* <p className="videoLess-moretxt">{video[0]?.description}</p> */}
           <Link to="videoLesson"><button className="video-btn">{t("homePage.more")}</button> </Link>  
            </div>
            </div>
        </div>
             {/* video  end*/}

               
            <GetRecomended/>
            <img className="line-row" src={row} alt="" />
            

            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12178.577477482393!2d44.5980607!3d40.2614342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa1fb02482283%3A0x339ad77fd03f3065!2sABIO%20Garden%20Center!5e0!3m2!1shy!2sam!4v1677585387911!5m2!1shy!2sam"
             style={{border:0}} aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="bottom">
                <PinkArea/>

            </div>
                

        </div>
     
        </>
    )
}

export {Home}