import { Link } from "react-router-dom"
import "../css/menu.css"
import "../responsive/menu.css"
import down from "../images/drop.svg"
import burger from "../images/burger.png"
import close from "../images/close.png"
import logo from "../images/logoabio.png"
import iconCloseSerch from "../images/closeSerch.png"
import iconePhone from "../images/iconePhone.png"
import catalogdown from "../images/catalogdown.svg"
import leftDown from "../images/leftDown.svg"
import I from "../images/i.png"
import iconSerch from "../images/iconSerch.png"

import { useTranslation } from "react-i18next";
import dropdownWhite from "../images/white.svg"
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react"
import like from "../images/like.svg"
import shop from "../images/shop.svg"
import { languagesData } from "../data/languagesData"
import {shopData} from "../data/shopData"

import Menunew  from "../compomemts/Menunew"
import {MenuRespons} from "../compomemts/MenuRespons"
import { BagPage } from "./BagPage"
import axios from "axios"
import { createSearchParams, useNavigate} from "react-router-dom"

const Menu =({shopMenu ,shoping})=>{
  const navigate= useNavigate()
  const [favoritData, setFavoritData] = useState([])

  const [q, setQ] = useState("");
  const [searchTerm] = useState(["name"]);
  const [todos , setTodos] = useState([])

  


//   useEffect(() => {
//     setTodos(JSON.parse(localStorage.getItem("bookmarks")) || [])

// }, [todos]);

// const fetchPosts = async (a) => {
//   setTodos(JSON.parse(localStorage.getItem("bookmarks")) || [])
                            
  
//   }
  
//   useEffect(() => {
//   fetchPosts(todos)
  
//   }, [fetchPosts]);


useEffect(() => {

  const allData = JSON.parse(localStorage.getItem("bookmarks")) || []
  if(allData) setTodos(allData)
  
  }, [localStorage.getItem("bookmarks")]);
  
  
  
  

  const openprofile =(id)=>{
    navigate({pathname: 'search',
    search: `?${createSearchParams(q)}`
    })
    
  }
    const [openBurger,setOpenBurger]=useState(true)
    const [showSerch,setShowSerch]=useState(true);
    const [closeSerch,setCloseSerch]=useState(false);
    const [languages, setLanguages] = useState(languagesData);
    const [showFlag,setShowFlag]=useState(false);
    const [openShop,setOpenShop]=useState(false)
  
    const [closeMenu, setCloseMenu]=useState(false)///style={{display:closeMenu?"none":"block"}}
    const {t}=useTranslation()
    const {i18n } = useTranslation();

  

    
    

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
    }, [i18n.language])
  
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
    // useEffect(()=>{
    //   for (let index = 0; index < document.getElementsByClassName('lang').length; index++) {
    //     const element = document.getElementsByClassName('lang')[index];
    //     if(element.value === i18n.language){
    //       element.setAttribute("selected", "true")
    //     }
    //   }
    // },[])

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
       
        openprofile()
      }
    };

    //   function searchprod(items) {
    //     return items.filter((item) => {
    //         return searchTerm.some((newItem) => {
    //             return (
    //                 item[newItem]
    //                     .toString()
    //                     .toLowerCase()
    //                     .indexOf(q.toLowerCase()) > -1
                        
    //             );
    //         });
    //     });
    // }

    return(
        <>
                <div className="container">

        <nav >
        <div className="nav__forRes">
                <div className="nav__forRes-top">
                  <div className="nav-logo">
                <Link to={`/${i18n.language}`}>
                  <img src={logo} alt="logo" className="logoImg"/>
                </Link>
                  </div>
                    <div className="phoneForRes">
                <img src={iconePhone} alt="iconePhone" />
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
                        {languages?.map((language, index) =>
                        
                          language.active ? (
                            <li
                              key={language.id}
                              className="global_flag"
                              onClick={() => setShowFlag(!showFlag)}
                            >
                              <img
                                onClick={switcher(language.name, index)}
                                src={language.img}
                                alt="flagUSA"
                                className="bigFlag"
                              />
                              <img
                               
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
                <Link to={`search/${q}`} ></Link>
                  <img src={iconSerch} alt="serch" className="iconSerch-res" onClick={openprofile}/>
                  <input type="text" placeholder={t("homePage.search")} 
                  value={q}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => setQ(e.target.value)} />
                  <img  style={{ display: closeSerch ? "none" : "block" }}
                    src={iconCloseSerch}
                    alt="closeSerch"
                    className="iconCloseSerch"
                    onClick={() => setShowSerch(!showSerch)
                     
                    }
                  />
                </div>
              </div>
                </div>
                <div className="nav__forRes-down">

                   <div className="burger" onClick={()=>setOpenBurger(!openBurger)}>
                    <img className="burgerImg" src={burger} alt="burger" style={{display:openBurger?"block":"none"}} />
                    <img className="closeImg" src={close} alt="close" style={{display:openBurger?"none":"block"}}/>
                   </div>
                <div className="user-iconRes">
                <Link to="favorit"><img src={like} alt="like" className="like" /> <span className ={todos.length>0?
                'likespan': 'likenone' }>{todos.length}</span></Link>
                   <div className="headerchat">
                 <img onClick={()=>setOpenShop(!openShop)} src={shop} alt="shop" className="shop" />
                 <span className ={shopMenu?.length>0?
                'likespan': 'likenone' }>{shopMenu?.length}</span></div>
                    
                </div>
          
                </div>
            
              </div>
 
             <div className="menuRes">
            <div className={openBurger?"ResponsMenuNon":"ResponsMenu"} >
            <MenuRespons openBurger={openBurger} setOpenBurger={setOpenBurger}/>
            </div>
            </div>
          
            <ul className={openBurger?"global-menu":"global-menuRes"}>
           
                <li className="global-menu-block" > 
                <div className="catalog__categoria">
                  <li className="global-menu__item catalog">{t("mainMenu.catalog")}</li>   
                <img src={down} alt="down" className="catalogIcone" /> 
                <img src={catalogdown} alt="catalogdown" className="catalogGreen" />
                </div>
              
                <div>
                <ul className="global-menu-block1 " >
                  {shopData.map( (menu,index)=>{

                    const depthLevel = 0;
                    return < Menunew items={menu} key={index} depthLevel={depthLevel} />;

//                     return (
//                       <li className="item block1" >
//                      {item.name}
//                       <img className="leftDown_img block1img" src={leftDown} alt="" />
                     
//                     <ul className="global-menu-block11" >
             
//                        <li className="global-menu-block11__item"> 
                     
//                        {item?.child?.map((item)=>{
//                                   return (   
//                                     <div className="item itemNew">     
//                                        <Link  onClick={()=>{setCloseMenu(false)}}
//                                         className="item-name activeindoor" to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.indoorPlants")}`} >
//                                   {item?.name}
                                    
                                
//                                        </Link>
//                                        <img className="leftDown_img" src={leftDown} alt="" />
//                                        </div>

//                                          )
//                                         })}
                                          
                       
                  
                   
                   

//                                 <ul className="global-menu__block12 ">
//                                 {item?.child.map((item, index)=>{
//                                   return (
//                                     <li className="item itemNew">
//                                     <Link  onClick={()=> setCloseMenu(true)}
//                                      className="item-name activeItem "  
//                                      to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.indoorPlants")}/${t("SecondColumnMenu.floweringPlants")}`}>
//                                       {item?.child?.name}</Link>
                                   
//                                 </li>
//                                   )

// })}
                            
//                                {/* <li className="item itemNew">  
//                                <Link  onClick={()=> setCloseMenu(true)}
//                                to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.indoorPlants")}/${t("SecondColumnMenu.decorativeLeafyPlants")}`}
//                                 className="item-name activeItem "
//                                 >
//                                       {item?.child?.child?.name}</Link>
//                                </li>
//                                <li className="item itemNew"> 
//                                <Link  onClick={()=> setCloseMenu(true)}
//                                 className="item-name activeItem " 
//                                 to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.indoorPlants")}/${t("SecondColumnMenu.fruitPlants")}`}>
//                                       {item?.child?.child?.name}</Link>
//                                </li>
//                                 <li className="item itemNew">
//                                     <Link  onClick={()=> setCloseMenu(true)}
//                                      className="item-name activeItem " 
//                                      to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.indoorPlants")}/${t("SecondColumnMenu.cactusSucculents")}`}
//                                      >     {item?.child?.child?.name}</Link>
//                                     </li>
//                                 <li className="item itemNew">
//                                     <Link  onClick={()=> setCloseMenu(true)}
//                                      className="item-name activeItem " 
//                                      to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.indoorPlants")}/${t("SecondColumnMenu.ampelousPlants")}`}
//                                      >  {item?.child?.child?.name}</Link>
//                                    </li> */}
//                                 </ul>
//                         </li>                    
//                     </ul>
//                 </li>
          

                    // )
                  })}
                 {/* <li className="item block1">
                      {t("catalogMenu.plantsSeeds")}
                      <img className="leftDown_img block1img" src={leftDown} alt="" />
                     
                    <ul className="global-menu-block11" >
                       <li className="global-menu-block11__item"> 
                       <div className="item itemNew">
                                      
                                       <Link  onClick={()=>{setCloseMenu(false)}}
                                        className="item-name activeindoor" to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.indoorPlants")}`} >
                                       {t("FirstColumnMenu.indoorPlants")}
                                       </Link>
                                       <img className="leftDown_img" src={leftDown} alt="" />
                                          
                       
                  
                       </div>
                   

                                <ul className="global-menu__block12 ">
                                <li className="item itemNew">
                                    <Link  onClick={()=> setCloseMenu(true)}
                                     className="item-name activeItem "  
                                     to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.indoorPlants")}/${t("SecondColumnMenu.floweringPlants")}`}>
                                      {t("SecondColumnMenu.floweringPlants")}</Link>
                                   
                                </li>
                               <li className="item itemNew">  
                               <Link  onClick={()=> setCloseMenu(true)}
                               to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.indoorPlants")}/${t("SecondColumnMenu.decorativeLeafyPlants")}`}
                                className="item-name activeItem "
                                >
                                  {t("SecondColumnMenu.decorativeLeafyPlants")}</Link>
                               </li>
                               <li className="item itemNew"> 
                               <Link  onClick={()=> setCloseMenu(true)}
                                className="item-name activeItem " 
                                to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.indoorPlants")}/${t("SecondColumnMenu.fruitPlants")}`}>
                                  {t("SecondColumnMenu.fruitPlants")}</Link>
                               </li>
                                <li className="item itemNew">
                                    <Link  onClick={()=> setCloseMenu(true)}
                                     className="item-name activeItem " 
                                     to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.indoorPlants")}/${t("SecondColumnMenu.cactusSucculents")}`}
                                     >{t("SecondColumnMenu.cactusSucculents")}</Link>
                                    </li>
                                <li className="item itemNew">
                                    <Link  onClick={()=> setCloseMenu(true)}
                                     className="item-name activeItem " 
                                     to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.indoorPlants")}/${t("SecondColumnMenu.ampelousPlants")}`}
                                     >{t("SecondColumnMenu.ampelousPlants")}</Link>
                                   </li>
                                </ul>
                        </li>
                        
                       <li className="item itemNew">
                        <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem" 
                         to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.bigindoor")}`}>{t("FirstColumnMenu.bigindoor")}</Link>
                       </li> 
                       <li className="item itemNew">
                        <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem" 
                         to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.outdoorPlants")}`}>{t("FirstColumnMenu.outdoorPlants")}</Link>
                        </li> 
                       <li className="global-menu__block-item ">
                        <div className="item itemNew activeseedsBulbs">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeseedsBulbs "
                              to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.seedsBulbs")}`}>{t("FirstColumnMenu.seedsBulbs")}</Link> 
                            <img className="leftDown_img" src={leftDown} alt="" />


   
                        </div>
                   
                        <ul className="global-menu__block2">
                            <li className="item itemNew">
                           <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                            className="item-name activeItem " 
                            to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.seedsBulbs")}/${t("FirstColumnMenu.bloomy")}`}>{t("FirstColumnMenu.bloomy")}</Link> 
                            </li>
                            <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem " 
                                 to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.seedsBulbs")}/${t("FirstColumnMenu.horticultural")}`}>{t("FirstColumnMenu.horticultural")}</Link>
                            
                            </li>
                            <li className="item itemNew">
                           <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                            className="item-name activeItem "
                             to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.seedsBulbs")}/${t("FirstColumnMenu.herb")}`}>{t("FirstColumnMenu.herb")}</Link> 
                            </li>
                            <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem " 
                                 to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.seedsBulbs")}/${t("FirstColumnMenu.grass")}`}>{t("FirstColumnMenu.grass")}</Link>
                            
                            </li>
                        </ul>
                        </li> 
                    </ul>


                </li>  */}

                {/* <li className="global-menu__blok2" >
                    <div className="item itemNew activesoilsFertilizers">
                       {t("catalogMenu.soilsFertilizers")}
                       <img className="leftDown_img" src={leftDown} alt="" />

                       
                    </div>
                  

                    <ul className="global-menu__blok2-item">
                        <li  className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem "
                              to={`${t("catalogMenu.soilsFertilizers")}/${t("FirstColumnMenu.soils")}`}>{t("FirstColumnMenu.soils")}</Link>
                            </li>
                        <li  className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem "
                              to={`${t("catalogMenu.soilsFertilizers")}/${t("FirstColumnMenu.turf")}`}>{t("FirstColumnMenu.turf")}</Link>
                            </li>
                        <li  className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem " 
                             to={`${t("catalogMenu.soilsFertilizers")}/${t("FirstColumnMenu.additive")}`}>{t("FirstColumnMenu.additive")}</Link>
                            </li>
                        <li  className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem " 
                             to={`${t("catalogMenu.soilsFertilizers")}/${t("FirstColumnMenu.ferlitizers")}`}>{t("FirstColumnMenu.ferlitizers")}</Link>
                            </li>
                        <li  className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem " 
                             to={`${t("catalogMenu.soilsFertilizers")}/${t("FirstColumnMenu.decorativeFilling")}`}>{t("FirstColumnMenu.decorativeFilling")}</Link>
                            </li>
                    </ul>

                </li> */}
                
{/*                 
                <li className="global-menu__block3 ">
                    <div className="item itemNew">
                    {t("catalogMenu.chemicals")}
                                      <img className="leftDown_img" src={leftDown} alt="" />

                    </div>
 

                    <ul className="global-menu__block3-item">
                        <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem" 
                             to={`${t("catalogMenu.chemicals")}/${t("FirstColumnMenu.herbicides")}`}>{t("FirstColumnMenu.herbicides")}</Link>
                            </li>
                        <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem " 
                             to={`${t("catalogMenu.chemicals")}/${t("FirstColumnMenu.fungicides")}`}>{t("FirstColumnMenu.fungicides")}</Link>
                            </li>
                        <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem" 
                             to={`${t("catalogMenu.chemicals")}/${t("FirstColumnMenu.pesticides")}`}>{t("FirstColumnMenu.pesticides")}</Link>
                            </li>
                            <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem " 
                             to={`${t("catalogMenu.chemicals")}/${t("FirstColumnMenu.stimulantFertilizers")}`}>{t("FirstColumnMenu.stimulantFertilizers")}</Link>
                            </li>
                    </ul>
                </li>

                <li className="global-menu__block4 ">
                    <div className="item itemNew ">
                    {t("catalogMenu.cachePotsVases")}
                      <img className="leftDown_img block4Img" src={leftDown} alt="" />

                    </div>
                    
                    <ul className="global-menu__block4-item">
                        <li className="global-menu__block41">
                            <div className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem activeplastic" 
                             to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.plastic")}`}>{t("FirstColumnMenu.plastic")}</Link>
                               <img className="leftDown_img" src={leftDown} alt="" />
                                                     </div>
                           
                            <ul className="global-menu__block42">
                                <li className="item itemNew ">
                                    <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                     className="item-name activeItem "
                                      to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.plastic")}/${t("SecondColumnMenu.desktop")}`}>{t("SecondColumnMenu.desktop")}</Link>
                                    </li>
                                <li className="item itemNew ">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem " 
                                 to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.plastic")}/${t("SecondColumnMenu.outdoor")}`}>{t("SecondColumnMenu.outdoor")}</Link></li>
                                <li className="item itemNew ">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem "  
                                 to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.plastic")}/${t("SecondColumnMenu.balconies")}`}>{t("SecondColumnMenu.balconies")}</Link></li>
                                <li className="item itemNew ">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem " 
                                 to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.plastic")}/${t("SecondColumnMenu.hanging")}`}>{t("SecondColumnMenu.hanging")}</Link></li>

                            </ul>
                        </li>
                        <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem" 
                             to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.ceramics")}`}>{t("FirstColumnMenu.ceramics")}</Link>
                            </li>
                        <li className="item itemNew">
                        <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem" 
                         to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.concrete")}`}>{t("FirstColumnMenu.concrete")}</Link>
</li>
                        <li className="item itemNew">
                        <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem" 
                         to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.gypsum")}`}>{t("FirstColumnMenu.gypsum")}</Link>
</li>
                        <li className="item itemNew">
                        <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem" 
                         to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.fiber")}`}>{t("FirstColumnMenu.fiber")}</Link>
</li>
                        <li className="item itemNew">
                        <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem" 
                         to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.wood")}`}>{t("FirstColumnMenu.wood")}</Link>
</li>
                        <li className="item itemNew">
                        <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem" 
                         to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.phalaenopsisPlanter")}`}>{t("FirstColumnMenu.phalaenopsisPlanter")}</Link>
</li>
                        <li className="item itemNew">
                        <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem"
                          to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.selfWateringPlanter")}`}>{t("FirstColumnMenu.selfWateringPlanter")}</Link></li>
                        <li className="item itemNew">
                        <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem" 
                         to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.racks")}`}>{t("FirstColumnMenu.racks")}</Link> </li>
                        <li className="item itemNew">
                        <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem" 
                         to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.stakes")}`}>{t("FirstColumnMenu.stakes")}</Link>
</li>
                    </ul>
                </li>
                
                <li className="global-menu__block5 ">
                    <div className="item itemNew">
                    {t("catalogMenu.toolsMaterials")}
                                      <img className="leftDown_img block5Img" src={leftDown} alt="" />

                    </div>
                    
                    <ul className="global-menu__block5-item">
                        <li className="item itemNew">
                        <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem" 
                         to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.wateringSpraying")}`}>{t("FirstColumnMenu.wateringSpraying")}</Link>
                            </li>
                        <li className="item itemNew">
                        <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem"
                          to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.dripWatering")}`}>{t("FirstColumnMenu.dripWatering")}</Link>
</li>
                        <li className="global-menu__block51 ">
                            <div className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem activegardenTools" 
                             to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.gardenTools")}`}>{t("FirstColumnMenu.gardenTools")}</Link> 
                               <img className="leftDown_img" src={leftDown} alt="" />
   
                            </div>
                        
                            <ul className="global-menu__block52">
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem" 
                                 to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.gardenTools")}/${t("SecondColumnMenu.tools")}`}>{t("SecondColumnMenu.tools")}</Link></li>
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem"
                                  to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.gardenTools")}/${t("SecondColumnMenu.lawnmowes")}`}>{t("SecondColumnMenu.lawnmowes")}</Link></li>
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem" 
                                 to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.gardenTools")}/${t("SecondColumnMenu.trolleys")}`}>{t("SecondColumnMenu.trolleys")}</Link></li>
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem"
                                  to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.gardenTools")}/${t("SecondColumnMenu.bordersFences")}`}>{t("SecondColumnMenu.bordersFences")}</Link></li>

                            </ul>

                        </li>
                        <li className="global-menu__block53 ">
                            <div className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem activecoverings" 
                             to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.coverings")}`}>{t("FirstColumnMenu.coverings")}</Link>
                               <img className="leftDown_img" src={leftDown} alt="" />
       
                            </div>
                           
                            <ul className="global-menu__block54">
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem" 
                                 to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.coverings")}/${t("SecondColumnMenu.artificialGrass")}`}>{t("SecondColumnMenu.artificialGrass")}</Link></li>
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem" 
                                 to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.coverings")}/${t("SecondColumnMenu.shadeNet")}`}>{t("SecondColumnMenu.shadeNet")}</Link></li>
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem"
                                  to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.coverings")}/${t("SecondColumnMenu.horticulturalFleece")}`}>{t("SecondColumnMenu.horticulturalFleece")}</Link></li>
                            </ul>
                        </li>
                        <li className="item itemNew"><Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem"
                          to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.gardenLighting")}`}>{t("FirstColumnMenu.gardenLighting")}</Link></li>
                        <li className="item itemNew"><Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem" 
                         to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.traps")}`}>{t("FirstColumnMenu.traps")}</Link></li>
                        <li className="item itemNew"><Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem"
                          to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.constructionTools")}`}>{t("FirstColumnMenu.constructionTools")}</Link></li>
                        <li className="item itemNew"><Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem" 
                         to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.stepLadders")}`}>{t("FirstColumnMenu.stepLadders")}</Link></li>
                        <li className="item itemNew"><Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem" 
                         to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.containers")}`}>{t("FirstColumnMenu.containers")}</Link></li>
                        <li className="item itemNew"><Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem"
                          to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.workwear")}`}>{t("FirstColumnMenu.workwear")}</Link></li>
                    </ul>
                </li>

                <li className="global-menu__block6 ">
                    <div className="item itemNew">
                    {t("catalogMenu.recreation")}
                     <img className="leftDown_img block6Img" src={leftDown} alt="" />

                    </div>
                   
                    <ul className="global-menu__block6-item">
                        <li className="global-menu__block61 ">
                            <div className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem activebbq" 
                             to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.bbq")}`}>{t("FirstColumnMenu.bbq")}</Link>
                              <img className="leftDown_img" src={leftDown} alt="" />  

                            </div>
                             
                            
                            <ul className="global-menu__block61-item">
                                <li className="item itemNew"> <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem" 
                                 to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.bbq")}/${t("SecondColumnMenu.braziers")}`}>{t("SecondColumnMenu.braziers")}</Link></li>
                                <li className="item itemNew"> <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem" 
                                 to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.bbq")}/${t("SecondColumnMenu.bbqAccessories")}`}>{t("SecondColumnMenu.bbqAccessories")}</Link></li>
                            </ul>
                        </li>
                        <li className="global-menu__block62 ">
                            <div className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem activeSauna" 
                             to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.bathhouseSauna")}`}> {t("FirstColumnMenu.bathhouseSauna")}</Link>
                               <img className="leftDown_img" src={leftDown} alt="" />

  
                            </div>
                       
                            <ul className="global-menu__block62-item">
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem" 
                                 to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.bathhouseSauna")}/${t("SecondColumnMenu.saunaAccessories")}`}>{t("SecondColumnMenu.saunaAccessories")}</Link> </li>
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem" 
                                 to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.bathhouseSauna")}/${t("SecondColumnMenu.aromas")}`}>{t("SecondColumnMenu.aromas")}</Link></li>
                            </ul>
                        </li>
                        <li className="global-menu__block63">
                            <div className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem activePool" 
                             to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.playgroundPool")}`}>{t("FirstColumnMenu.playgroundPool")}</Link> 
                               <img className="leftDown_img" src={leftDown} alt="" />
   
                            </div>
                       

                            <ul className="global-menu__block63-item">
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem"
                                  to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.playgroundPool")}/${t("SecondColumnMenu.hammocks")}`}>{t("SecondColumnMenu.hammocks")}</Link></li>
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem" 
                                 to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.playgroundPool")}/${t("SecondColumnMenu.trampolines")}`}>{t("SecondColumnMenu.trampolines")}</Link></li>
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem"
                                  to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.playgroundPool")}/${t("SecondColumnMenu.sunshade")}`}>{t("SecondColumnMenu.sunshade")}</Link></li>
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem"
                                  to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.playgroundPool")}/${t("SecondColumnMenu.swingsSlides")}`}>{t("SecondColumnMenu.swingsSlides")}</Link></li>
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem"
                                  to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.playgroundPool")}/${t("SecondColumnMenu.tents")}`}>{t("SecondColumnMenu.tents")}</Link></li>
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem"
                                  to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.playgroundPool")}/${t("SecondColumnMenu.mattressesRugs")}`}>{t("SecondColumnMenu.mattressesRugs")}</Link></li>
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem" 
                                 to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.playgroundPool")}/${t("SecondColumnMenu.sunbeds")}`}>{t("SecondColumnMenu.sunbeds")}</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="global-menu__block7 ">
                    <div className="item itemNew">
                   {t("catalogMenu.furniture")}
                   <img className="leftDown_img block7Img" src={leftDown} alt="" />

                    </div>
                  
                    <ul className="global-menu__block71">
                        <li className="item global-menu__house-item "> <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem activeHouse"
                          to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.house")}`}>{t("FirstColumnMenu.house")}</Link>
                                           <img className="leftDown_img" src={leftDown} alt="" />

                                   
                      <ul className="global-menu__block71-item ">
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem" 
                                 to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.house")}/${t("SecondColumnMenu.shelves")}`}>{t("SecondColumnMenu.shelves")}</Link></li>
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem" 
                                 to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.house")}/${t("SecondColumnMenu.drawerUnit")}`}>{t("SecondColumnMenu.drawerUnit")}</Link></li>
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem" 
                                 to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.house")}/${t("SecondColumnMenu.tables")}`}>{t("SecondColumnMenu.tables")}</Link></li>
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem" 
                                 to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.house")}/${t("SecondColumnMenu.benches")}`}>{t("SecondColumnMenu.benches")}</Link></li>
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem" 
                                 to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.house")}/${t("SecondColumnMenu.consoles")}`}>{t("SecondColumnMenu.consoles")}</Link></li>
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem"
                                  to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.house")}/${t("SecondColumnMenu.pouffes")}`}>{t("SecondColumnMenu.pouffes")}</Link></li>
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem" 
                                 to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.house")}/${t("SecondColumnMenu.screens")}`}>{t("SecondColumnMenu.screens")}</Link></li>
                                <li className="item itemNew">
                                <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                                 className="item-name activeItem" 
                                 to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.house")}/${t("SecondColumnMenu.mirrors")}`}>{t("SecondColumnMenu.mirrors")}</Link></li>
                        </ul>
                        </li>
                        <li className="global-menu__block72 ">
                            <div className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem activeGarden" 
                             to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.garden")}`}>{t("FirstColumnMenu.garden")}</Link>
                                            <img className="leftDown_img" src={leftDown} alt="" />
                         </div>
                          
                        <ul className="global-menu__block72-item">
                            <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem" 
                             to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.garden")}/${t("SecondColumnMenu.diningGroups")}`}>{t("SecondColumnMenu.diningGroups")}</Link></li>
                            <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem" 
                             to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.garden")}/${t("SecondColumnMenu.soafasCouches")}`}>{t("SecondColumnMenu.soafasCouches")}</Link></li>
                            <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem"
                              to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.garden")}/${t("SecondColumnMenu.chairsArmchairs")}`}>{t("SecondColumnMenu.chairsArmchairs")}</Link></li>
                            <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem"
                              to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.garden")}/${t("SecondColumnMenu.gardenHouses")}`}>{t("SecondColumnMenu.gardenHouses")}</Link></li>
                            <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem"
                              to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.garden")}/${t("SecondColumnMenu.swings")}`}>{t("SecondColumnMenu.swings")}</Link></li>
                        </ul>
                        </li>
                        <li className="item itemNew">
                        <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem" 
                         to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.canopiesAwningsCurtains")}`}>{t("FirstColumnMenu.canopiesAwningsCurtains")}</Link>
                        </li>

                    </ul>
                </li>
                <li className="global-menu__block8 ">
                    <div className="item itemNew">
                      {t("catalogMenu.decor")}
                      <img className="leftDown_img" src={leftDown} alt="" />

                    
                    </div>
                   
                    <ul className="global-menu__block8-item">
                        <li className="item itemNew">
                        <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem"
                          to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.slidingPartitionsScreens")}`}>{t("FirstColumnMenu.slidingPartitionsScreens")}</Link></li>
                        <li className="item itemNew">
                        <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                         className="item-name activeItem" 
                         to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.baskets")}`}>{t("FirstColumnMenu.baskets")}</Link></li>
                        <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem" 
                             to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.chestsBoxes")}`}>{t("FirstColumnMenu.chestsBoxes")}</Link></li>
                        <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem"
                              to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.clocks")}`}>{t("FirstColumnMenu.clocks")}</Link></li>
                        <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem" 
                             to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.holdersforBottles")}`}>{t("FirstColumnMenu.holdersforBottles")}</Link></li>
                        <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem" 
                             to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.figurines")}`}>{t("FirstColumnMenu.figurines")}</Link></li>
                        <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem"
                              to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.vases")}`}>{t("FirstColumnMenu.vases")}</Link></li>
                        <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem"
                              to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.picktures")}`}>{t("FirstColumnMenu.picktures")}</Link></li>
                        <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem"
                              to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.lampsandCandles")}`}>{t("FirstColumnMenu.lampsandCandles")}</Link></li>
                        <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem"
                              to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.newyearDccor")}`}>{t("FirstColumnMenu.newyearDccor")}</Link></li>
                        <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem" 
                             to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.artificialFlowers")}`}>{t("FirstColumnMenu.artificialFlowers")}</Link></li>
                        <li className="item itemNew">
                            <Link  onClick={()=>{setCloseMenu(!closeMenu)}}
                             className="item-name activeItem"
                              to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.other")}`}>{t("FirstColumnMenu.other")}</Link></li>
                    </ul>
                </li>  */}
                </ul>
                </div>
                </li>
                <img src={I} className="row" alt="" />








                <Link className="menu__item" to={`/${i18n.language}/Services`}><li className="global-menu__item "> {t("mainMenu.service")} </li></Link>
                <img src={I} className="row" alt="" />
               <Link className="menu__item" to={`/${i18n.language}/videoLesson`}> <li className="global-menu__item ">{t("mainMenu.video")}</li></Link>
                <img src={I} className="row" alt="" />
              <Link className="menu__item" to="/giftCard"> <li className="global-menu__item ">{t("mainMenu.gift")}</li></Link> 
                <img src={I} className="row" alt="" />
                <Link className="menu__item" to="/PaymentDelivery"> <li className="global-menu__item ">{t("mainMenu.payment")}</li></Link>

            </ul>
  
        </nav>
        {/* <div className="row-line"></div> */}
        <div className="shopingCard" style={{display: openShop?"block":"none"}}>
            <BagPage openShop={openShop} setOpenShop={setOpenShop} shoping ={shoping}/>
        </div>
        </div>
        </>
    )
}

export {Menu}