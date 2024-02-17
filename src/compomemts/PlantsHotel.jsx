import Hotel from "../images/Hotel.svg"
import { useTranslation } from "react-i18next";


const PlantsHotel=()=>{
    const {t}=useTranslation()

    return(
        <>
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
        </>
    )
}

export {PlantsHotel}