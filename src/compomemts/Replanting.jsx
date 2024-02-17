import ReplantingImg from "../images/Replanting.svg"
import { useTranslation } from "react-i18next";

const Replanting=()=>{
    const {t}=useTranslation()

    return(
        <>
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
        </>
    )
}
export {Replanting}