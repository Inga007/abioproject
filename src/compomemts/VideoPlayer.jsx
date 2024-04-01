import React, { useState,useRef  } from 'react';
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next";
import { useCollapse } from 'react-collapsed'

import "../css/video.css"
import "../responsive/video.css"
import iconSerch from "../images/iconSerch.png"
import axios from 'axios';

import { videoData } from '../data/videoData';

import Readmore from './Readmore';

const VideoPlayer=()=>{
  const {t,i18n}=useTranslation()

  let url = `https://abio.am:8443`;
  const [itemsToShow, setItemsToShow] = useState(3);

  
  const [video,setVideo] = useState([])
  const [q, setQ] = useState("");
  const [searchTerm] = useState(["title"]);


 


  const fetchPosts = async (lng) => {
    let lang =lng.slice(0,2)
  
    const res= await axios.get(`${url}/abio/public/get/video/byLang?language=${lang}`)
                              
                               
    
 
    setVideo(res.data)
    
  }


  useEffect(() => {
    fetchPosts(i18n.language)
  
  }, [i18n.language]);



  const [seeMore,setSeeMore]=useState(true)
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    const showmore = () => {
      setItemsToShow(video.length)
  }

  const showless = () => {
      setItemsToShow(3)
  }



 
  function searchprod(items) {
    return items.filter((item) => {
        return searchTerm.some((newItem) => {
            return (
                item[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
                    
            );
        });
    });
}

let fire =searchprod(video)


    return(
         <>
        <div className='videos'>
        <div className="container">

          <div className='gift__top'>
        <p>{t("Home.home")} / <span className='video__top-green'>{t("mainMenu.video")}</span></p>
          </div>
       </div>
        <div className='video__container'>
        <div className="container">

          <div className='video__serch'>
          <img src={iconSerch} alt="serch"  className='video__serch-icon' onClick={fire}/>
            <input type="text" placeholder={t('homePage.search')} value={q}  onChange={(e) => setQ(e.target.value)} />
          </div>
         <div className='min__containerVideo'>
         <p className='allVideo'>
          {t("Home.allvideo")}</p>
            {videoData.slice(0, itemsToShow).map((item, index) =>
            
         <Readmore  key ={item.id}  item={item}/>
            
            )
            
            }
            {(itemsToShow === 3) ?
             <button className='video__btn' onClick={showmore}>{t("Home.showMore")}</button>: 
             <button className='video__btn' onClick={showless}>{t("Home.showLess")}</button>}
        </div>
        </div>


        </div>
        </div>
        </>
    )
}
export {VideoPlayer}