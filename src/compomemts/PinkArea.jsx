import car from "../images/car.svg"
import "../responsive/home.css"
import { useTranslation } from "react-i18next";


const PinkArea=()=>{
    const {t}=useTranslation()

    return(
        <>
         <div className="pinkArea">
                  <div className="withcar">
                  <img src={car} alt="" />
                  <p>{t("Home.delivery")} </p>
                    </div> 
                 
        </div>
        </>
    )
}
export {PinkArea}