import { Link } from "react-router-dom"
import { Online } from "./Online"
import {Laboratory} from "./Laboratory"
import {Replanting} from "./Replanting"
import {PlantsHospital} from "./PlantsHospital"
import {PlantsHotel} from "./PlantsHotel"
import "../css/services.css"
import "../responsive/services.css"
import OnlineImg from "../images/Online.svg"
import LaboratoryImg from "../images/Laboratory.svg"
import ReplantingImg from "../images/Replanting.svg"
import HospitalImg from "../images/Hospital.svg"
import Hotel from "../images/Hotel.svg"
import { useTranslation } from "react-i18next";
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { useState } from "react"
const Services =()=>{
    const {t}=useTranslation()
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    const [active,setActive]=useState("OneCard")
    const [openOnline,setOpenOnline]=useState(false)
    const [openLaboratory,setOpenLaboratory]=useState(false)
    const [openReplanting,setOpenReplanting]=useState(false)
    const [openHospital,setOpenHospital]=useState(false)
    const [openHotel,setOpenHotel]=useState(false)

    return(
        <>
                    <div className="container">

        <div className="gift__top">
            <p>{t("giftCard.home")} /<span className="buyGift__topGreen">{t("mainMenu.service")}</span> </p>
            </div>
            </div>
        <div className="servic">
                            
            <div className="container">
                <div className="services">
                    <div className="services__text">
                 
                        <div >
                        <p  className="hover-underline-animation" onClick={()=>setActive("OneCard")}> {t("ServicesOnline.online")}</p>
                        </div>    
                        <div  >
                            <p  className="hover-underline-animation" onClick={()=>setActive("TwoCard")}>{t("ServicesLaboratory.laboratory")}</p>
                        </div>
                        <div >
                            <p  className="hover-underline-animation" onClick={()=>setActive("ThreeCard")}>{t("ServicesReplanting.replanting")}</p>
                        </div>
                        <div >
                            <p  className="hover-underline-animation" onClick={()=>setActive("FourCard")}>{t("ServicesHospital.hospital")}</p> 
                        </div>
                        <div >
                            <p  className="hover-underline-animation" onClick={()=>setActive("FiveCard")}>{t("ServicesHotel.hotel")}</p>
                        </div>
                    </div>
                    <div className="services__item">
                        {active ==="OneCard" &&  <Online/> }
                        {active ==="TwoCard" &&  <Laboratory/>}
                        {active ==="ThreeCard" &&  <Replanting/>}
                        {active ==="FourCard" &&  <PlantsHospital/>}
                        {active ==="FiveCard" &&  <PlantsHotel/>}

                    </div>      
                </div>


                <div className="services__respons">
                <div className="services__text">
                 
                 <div >
                 <p  className="hover-underline-animation" onClick={()=>setOpenOnline(!openOnline)}> {t("ServicesOnline.online")}</p>
                 </div>  
                <div className="services__item" style={{ display: openOnline ? "block" : "none" }}>
                <p className="services__global">{t("ServicesOnline.online")}</p>
        
        <div className="services__info">
            <div className="services__img"><img src={OnlineImg} alt="Online" /></div>
            <div className="services__txt">
            <p>{t("ServicesOnline.request")}</p>
            <p>{t("ServicesOnline.determine")}</p>
            <p>{t("ServicesOnline.care")}</p>
            <p>{t("ServicesOnline.case")}</p>
            <p>{t("ServicesOnline.forOnline")}</p>

            <strong>{t("ServicesOnline.cost")}</strong>


            </div>
            <div>
                <button className="services__btn">
                {t("ServicesOnline.btnService")}
                </button>
            </div>
        </div>
                </div>


                 <div  >
                     <p  className="hover-underline-animation" onClick={()=>setOpenLaboratory(!openLaboratory)} > {t("ServicesLaboratory.laboratory")}</p>
                 </div>
                 <div className="services__item" style={{ display: openLaboratory ? "block" : "none" }}>
                 <p className="services__global">{t("ServicesLaboratory.laboratory")}</p>
            <div>
                <div className="services__img">
                    <img src={LaboratoryImg} alt="Laboratory" />
                </div>
                <div className="services__txt">
                    <p> {t("ServicesLaboratory.ourLaboratory")}</p>
                    <p>{t("ServicesLaboratory.diagnosis")}</p>
                    <p>{t("ServicesLaboratory.research")}</p>
                    <strong>{t("ServicesLaboratory.cost")}</strong>



                </div>
            </div>
                </div>

                 <div >
                     <p  className="hover-underline-animation"  onClick={()=>setOpenReplanting(!openReplanting)}>{t("ServicesReplanting.replanting")}</p>
                 </div>
                        <div className="services__item" style={{ display: openReplanting ? "block" : "none" }}>
                        <p className="services__global">{t("ServicesReplanting.replanting")}</p>
        <div>
            <div className="services__img"> 
                <img src={ReplantingImg} alt="ReplantingImg" />
            </div>
            <div className="services__txt">
             <p>{t("ServicesReplanting.request")}</p>
            <strong>{t("ServicesReplanting.cost")}</strong>


            </div>
        </div>
                        </div>


                 <div >
                     <p  className="hover-underline-animation" onClick={()=>setOpenHospital(!openHospital)}>{t("ServicesHospital.hospital")}</p> 
                 </div>
                 <div className="services__item" style={{ display: openHospital ? "block" : "none" }}>
                 <p className="services__global">{t("ServicesHospital.hospital")}</p>
        <div>
            <div className="services__img">
                <img src={HospitalImg} alt="HospitalImg" />
            </div>
            <div className="services__txt"> 
            <p>  {t("ServicesHospital.plant")}</p>
            <strong>{t("ServicesHospital.cost")}</strong>


            </div>
        </div>                   
                 </div>
                 <div >
                     <p  className="hover-underline-animation" onClick={()=>setOpenHotel(!openHotel)}>{t("ServicesHotel.hotel")}</p>
                 </div>
                 <div className="services__item" style={{ display: openHotel ? "block" : "none" }}>
                 <p className="services__global">{t("ServicesHotel.hotel")}</p>
        <div>
            <div className="services__img">
                <img src={Hotel} alt="hotel" />
            </div>
            <div className="services__txt">
            <p>{t("ServicesHotel.absence")}
            </p>
            <strong>{t("ServicesHotel.attention")} </strong>
            <p>{t("ServicesHotel.terms")}</p>

            <strong>{t("ServicesHotel.cost")}</strong>


            </div>
        </div>                
                 </div>
             </div>
                </div>


            </div>
            </div>
        </>
    )
}

export {Services}