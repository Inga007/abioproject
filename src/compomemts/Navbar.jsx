import logo from "../images/logoabio.png"
import { Link } from "react-router-dom"
import "../css/nav.css"
import "../responsive/nav.css"
import "../i18next"

import { useTranslation } from "react-i18next";
import iconSerch from "../images/iconSerch.png"

import iconCloseSerch from "../images/closeSerch.png"
import down from "../images/drop.svg"
import like from "../images/like.svg"
import shop from "../images/shop.svg"
import { Menu } from "./Menu"

import { useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from "react"
import { languagesData } from "../data/languagesData"
import closeInp from "../images/closeInp.svg"
import closeShop from "../images/closeShop.svg"

import {shopData} from "../data/shopData"
import { BagPage } from "./BagPage"

import phoneImg from "../images/phone.svg"
import axios from "axios"
import { createSearchParams, useNavigate} from "react-router-dom"

const Navbar=({ prop })=>{
  const navigate= useNavigate()
  const [favoritData, setFavoritData] = useState([])
 
  const [q, setQ] = useState("");
  const [searchTerm] = useState(["title"]);

  const [todos , setTodos] = useState([])

  const [shoping, setShopingCard]= useState([])
  const {t,i18n}=useTranslation()
  const [title, setTitle] = useState('')




let url = `https://abio.am:8443`;





// const headers = JSON.parse(localStorage.getItem("headers")) ;
// const [respHeaders, setHeaders] = useState(null)

// const fetchHeader = async () => {

//   if(localStorage.getItem('headers') !== null){
//         try {
//           const response = await axios.get(`${url}/abio/public/cart/getCart`,{
  

//               headers: {
                
//                 'X-CART-ID':  headers
//               }
//             }
//             )
              
           
//               setTitle(await response.data.cartProductDTOList)
//               setShopingCard(await response.data)
           
//           } catch (error) {
//               console.error(error);
//             }
        
//       }
//       else{
//         try {
//           const response = await axios.get(`${url}/abio/public/cart/getCart`);


//         const headers = response.headers['x-cart-id'];
//         // setHeaders(headers);
//          localStorage.setItem("headers", JSON.stringify(headers)) 
        
//          setTitle(await response.data.cartProductDTOList)
//          setShopingCard(await response.data)
         
        
//         } catch (error) {
//           console.error(error);
//         }
//       }
 
  
 

 
 
// } 




// useEffect(  () => {
//   const timer = setTimeout(() => {
//     fetchHeader()
//   }, 3000);
//   return () => clearTimeout(timer);
//   // fetchHeader()

// }, [title]);

// const EXPIRE_TIME = 10*24*1000*60*60; 
// setTimeout(function() {
//   localStorage.removeItem('headers');
// }, EXPIRE_TIME)
  
const [languages, setLanguages] = useState(languagesData);





// const fetchPosts = async (a) => {
// setTodos(JSON.parse(localStorage.getItem("bookmarks")) || [])
                          

// }

useEffect(() => {

const allData = JSON.parse(localStorage.getItem("bookmarks")) || []
if(allData) setTodos(allData)

}, [localStorage.getItem("bookmarks")]);






  const openprofile =(id)=>{
    navigate({pathname: 'search',
    search: `?${createSearchParams(q)}`
    })
    
  }
  const [showFlag,setShowFlag]=useState(false);
  const [showSerch,setShowSerch]=useState(true);
  const [closeSerch,setCloseSerch]=useState(false);
  const [openShop,setOpenShop]=useState(false)
  

 

 


  const switcher = (lng, index) => () => {
    let activeCountry = languages.filter((item) => {
      if(item.name === lng) {
        item.active = true
       
      } else {
        item.active = false
      }
      return item
    })
   
    let element = activeCountry[index]
    activeCountry.splice(index, 1)
    //  console.log(element)
    activeCountry.splice(0, 0, element)
    setLanguages(activeCountry)
    localStorage.setItem('lng', JSON.stringify(activeCountry))
    setShowFlag(false)
    i18n.changeLanguage(lng)
  }

  useEffect(() => {
    let getActiveCountry = JSON.parse(localStorage.getItem('lng'))
    if(getActiveCountry) {
      setLanguages(getActiveCountry)
    }
  }, [])


 
  function searchChange(event) {
 
    setCloseSerch(true)
  }



  

  const onChangeLang = (e)=>{
   
 
        i18n.changeLanguage(e.target.value)
       
      
  }


const renderLang = () =>{
 
  let activeLanguage = languages.filter((item) => {
    if(item.name === i18n.language) {
      item.active = true
     
    } else {
      item.active = false
    }
    return item
  })
 
  let element = activeLanguage[0]
  activeLanguage.splice(0, 1)
  //  console.log(element)
  activeLanguage.splice(0, 0, element)
  setLanguages(activeLanguage)
  localStorage.setItem('lng', JSON.stringify(activeLanguage))
  if(window.location.pathname.includes(`/am`)){
    i18n.changeLanguage('am')
 

  
  }
  if(window.location.pathname.includes(`/en`)){
    i18n.changeLanguage('en')
  }
  
   
  if(window.location.pathname.includes(`/ru`)){
    i18n.changeLanguage('ru')
  }
  

}



  useEffect(()=>{
     
    renderLang()
  
    
   
    
   
  },[i18n.language])

  console.log(languages)










const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
   
    openprofile()
  }
};
  

    return (
      
      <div>

        <div className="container">
          <div className="nav">
            <div className="nav-logo">
              <Link to={`/${i18n.language}`}>
                <img src={logo} alt="logo" className="logoImg"/>
              </Link>
            </div>
            
            {/* <div className="nav-input">
             
              <img src={iconSerch} alt="serch" className="serch-icon" />
              <input type="search" placeholder={t("homePage.search")} value={q}
                    onChange={(e) => setQ(e.target.value)} />
            </div> */}
  
             <div className="nav-input">
            <Link to={`search/${q}`} ></Link>
               <img src={iconSerch} alt="serch" className="serch-icon"  onClick={openprofile}/>
              <input type="text" placeholder={t("homePage.search")}  onKeyDown={handleKeyDown}  value={q}
                    onChange={(e) => setQ(e.target.value)} />
                                </div> 

            <div className="nav-info">
              <div className="nav-info_phone">
                <img className="phoneImg" src={phoneImg} alt="phoneImg" />
                <a href="tel:+37499520223">+374 99 520223</a>
              </div>
              <div className={showSerch ? "aaaa" : "bbbb"}>
                <div className={showSerch ? "serch-flag" : "serchResNo"}>
                  <div className="serchRes">
                    <img
                      src={iconSerch}
                      alt="serch"
                      onClick={() => setShowSerch(!showSerch)}
                    />
                  </div>

                  <div className="flag">
                    <ul className="flags">
                      <div className="flag-container">
                   
                        {languages.map((language, index) => 
                          language.active ? (
                            <li
                              key={language.id}
                              className="global_flag"
                              onClick={() => setShowFlag(!showFlag)}
                            >        
                              <img
                               
                                onClick={switcher(language.name, index)}
                                onChange={onChangeLang}
                                src={language.img}
                                alt="flagUSA"
                                className="bigFlag"
                              />
                              <img
                                
                               
                                onChange={onChangeLang}
                                src={down}
                                alt="arrow down"
                                className="arrow-down"
                              />
                            </li>
                          ) : (
                            <div style={{ display: showFlag ? "block" : "none" }}>
                              {!language.active && (
                                <li
                                  key={language.id}
                                  className="global_flag"
                                >
                                  <img
                         
                                    onClick={switcher(language.name, index)}
                                    src={language.img}
                                    alt="flagUSA"
                                    className="bigFlag"
                                  />
                                </li>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </ul>
                  </div>
                     

                </div>
              </div>
              
  
                       <div className={showSerch ? "closeSerch" : "noCloseSerch"}>
                <div className={showSerch ? "inputSerch" : "inputRes"}>
                  <img src={iconSerch} alt="" className="iconSerch-res" />
                  <input type="text" placeholder={t("homePage.search")} />
                  <img  style={{ display: closeSerch ? "none" : "block" }}
                    src={iconCloseSerch}
                    alt="closeSerch"
                    className="iconCloseSerch"
                    onClick={() => setShowSerch(!showSerch)
                     
                    }
                  />
                </div>
              </div>                 

              <div className="user-icon">
              <Link to="favorit"><img src={like} alt="like" className="like" /> <span className ={todos?.length>0?
                'likespan': 'likenone' }>{todos?.length}</span></Link>
               
                 <div className="headerchat">
                 <img onClick={()=>setOpenShop(!openShop)} src={shop} alt="shop" className="shop" />
                 <span className ={ title?.length >0 ?
                'likespan': 'likenone' }>{ title?.length}</span></div>
              </div>
            </div>
          </div>
        </div>
        <Menu shopMenu={title} shoping={shoping} />
                    

        <div className="shopingCard" style={{display: openShop?"block":"none"}}>
          <BagPage openShop={openShop} setOpenShop={setOpenShop}  shoping={shoping}  />

        </div>
    
      </div>
      
    );
}

export {Navbar}