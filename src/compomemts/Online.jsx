import OnlineImg from "../images/Online.svg"
import { useTranslation } from "react-i18next";

const Online=()=>{
    const {t}=useTranslation()

    return(
        <>
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
        
        </>
    )
}
export {Online}