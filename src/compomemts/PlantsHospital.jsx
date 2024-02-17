import HospitalImg from "../images/Hospital.svg"
import { useTranslation } from "react-i18next";

const PlantsHospital=()=>{
    const {t}=useTranslation()

    return(
        <>
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
        </>
    )
}

export {PlantsHospital}