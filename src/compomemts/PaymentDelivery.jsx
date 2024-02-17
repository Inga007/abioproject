import { useState } from "react"
import "../css/payment.css" 
import { Return } from "./Return"
import { Rules } from "./Rules"
import down from "../images/down.png"
import {PinkArea} from "./PinkArea"
import row from "../images/line.png"
import map from "../images/map.png"
import "../responsive/payment.css"
import { useTranslation } from "react-i18next";
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
 
const PaymentDelivery=()=>{
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    const [active,setActive]=useState("OnePayment")
    const [activePayment,setActivePayment]=useState(false)
    const [activeBigPayment,setActiveBigPayment]=useState(false)
    const [showActive,setShowActive]=useState(true)
    const {t}=useTranslation()

    return(
        <>
                            <div className="container">

            <div className="gift__top">
            <p>{t("giftCard.home")} /<span className="buyGift__topGreen">{t("mainMenu.payment")}</span> </p>
            </div>
            </div>
        <div className="payment">
    
            <div className="container">
             
                <div className="payment__top">
               <div onClick={()=>setShowActive(!showActive)}
                > 
                <p onClick={()=>setActive("OnePayment")}
                 className={showActive?"paymenttxt":"paymentnone"}>{t("PaymentRules.paymentRules")}</p></div>
                <div onClick={()=>setShowActive(!showActive)}
                >
                    <p onClick={()=>setActive("TowPayment")} 
                   className={showActive?"paymentnone":"paymenttxt"}>{t("DeliveryReturns.deliveryReturns")}</p></div>
                </div>
                 <div className="payment__item">
                        {active ==="OnePayment" &&  <Rules/>}
                        {active ==="TowPayment" &&  <Return/>}

                 </div> 
             

               
            </div>
            <img className="line-row" src={row} alt="" />
            

            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12178.577477482393!2d44.5980607!3d40.2614342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa1fb02482283%3A0x339ad77fd03f3065!2sABIO%20Garden%20Center!5e0!3m2!1shy!2sam!4v1677585387911!5m2!1shy!2sam" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div className="bottom">
                <PinkArea/>
            </div>
        </div>
        </>
    )
}
export {PaymentDelivery}