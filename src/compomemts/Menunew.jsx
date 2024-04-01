import { Link } from "react-router-dom"
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

import Dropdown from "../compomemts/Dropdown";

const Menunew = ({ items, depthLevel }) =>{

    const [dropdown, setDropdown] = useState(false);

    let ref = useRef();

    const {t,i18n } = useTranslation();
  
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

    const onMouseEnter = () => {
      setDropdown(true);
    };
  
    const onMouseLeave = () => {
       setDropdown(false);
    };

    return (
      <li
      className="item  block1"
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}

      > 
        {items?.child ? (
          <>
          {items?.url ?
           <Link  
          className="item-name  activeItem1" to={`/product/cat/dog/sheep/${i18n.language}`}  
         >
           
            {items.title}
           
            <img className="leftDown_img" src={leftDown} alt="image"  onClick={() => setDropdown((prev) => !prev)} />
            
            </Link> : <p  className="item-name  activeItem1">   {items.title}
           
           <img className="leftDown_img" src={leftDown} alt="image"  onClick={() => setDropdown((prev) => !prev)} /></p>}
            {" "}
            
            <Dropdown
              depthLevel={depthLevel}
              submenus={items.child}
              dropdown={dropdown}
            />{" "}
          </>
        ) : (
        <>
       
          <Link  
          className="item-name activeItem " to={`/product/cat/dog/${i18n.language}`} >
            {items.title} </Link>
            
        
            </>
          
        )}{" "}
      </li>
    );



}
export default Menunew