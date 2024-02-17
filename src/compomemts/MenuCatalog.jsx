import { Link,useLocation } from "react-router-dom"


import "../css/menu.css"
import "../responsive/menu.css"
import { useState, useEffect, useRef } from "react";

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
import {shopData} from "../data/shopData"
import { useTranslation } from "react-i18next";

import Dropdownsecond from "../compomemts/Dropdownsecond";

const MenuCatalog = ({ items, depthLevel , handleActive }) =>{
  const {t,i18n } = useTranslation();
    const [dropdown, setDropdown] = useState(false);
    const [openBurger, setopenBurger] = useState(false);
    const location = useLocation();

    let ref = useRef();

   
  
    useEffect(() => {
      const handler = (event) => {
        if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         
        }
      };
      document.addEventListener("mousedown", handler);
      document.addEventListener("touchstart", handler);
      return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", handler);
        document.removeEventListener("touchstart", handler);
      };
    }, [dropdown]);


    // useEffect(() => {
    //   setopenBurger(false)
    // }, [location]);
    const onMouseEnter = () => {
      setDropdown(true);
    };
  
    const onMouseLeave = () => {
       setDropdown(false);
    };

    return (
      <li
      className="cat_item"
        ref={ref}
  

      > 
        {items?.child ? (
          <>
          {items.url ?
         (
          <>
              <div className="activeIndoor " >
          <Link  
          to={`/product/cat/dog/${i18n.language}`}
          // onMouseEnter={onMouseEnter}
          // onMouseLeave={onMouseLeave}
          // onClick={() => setDropdown((prev) => !prev)}
          onClick={handleActive}
          >
       
            {items.title}
         
           
            </Link> 
        
            <img className="imgdown someClass" src={down} alt="image" onClick={() => setDropdown((prev) => !prev)}  />
  

            </div>
                     </>

       
          ) : <div  className="activeIndoor "> <Link    onClick={handleActive} to={`/product/cat/dog/${i18n.language}`} 
        
            >{items.title } </Link>
             <img className="imgdown someClass" src={down} alt="image"  onClick={() => setDropdown((prev) => !prev)} /> 
             </div>}
            {" "}
            
            <Dropdownsecond
              depthLevel={depthLevel}
              submenus={items.child}
              dropdown={dropdown}
              handleActive={handleActive}
            />{" "}
           
          </>
        ) : (
        <>
       
          <Link  
          className="activeIndoor "  onClick={handleActive} to={`/product/cat/dog/${i18n.language}`} >
            {items.title} bsdb</Link>
            
        
            </>
          
        )}{" "}
        
      </li>
    );



}
export default MenuCatalog