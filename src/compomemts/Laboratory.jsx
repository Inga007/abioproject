import LaboratoryImg from "../images/Laboratory.svg"
import { useTranslation } from "react-i18next";

const Laboratory=()=>{
    const {t}=useTranslation()

    return(
        <>
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
        </>
    )
}
export {Laboratory}