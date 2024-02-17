import { useTranslation } from "react-i18next";
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import "../css/privacyPolicy.css"
const PrivacyPolicy=()=>{
    const {t}=useTranslation()
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    return(
        <>
            <div className="policy">
            <div className="container">

                <div className="gift__top">
                    <p>{t("Home.home")} /<span className="buyGift__topGreen">{t("PrivacyPolicy.name")}</span> </p>
                </div>
            </div>
                    <div className="policy__minCont">
                    <div className="container">

                        <div className="policy__info">
                        <p className="policty__textGlobal">{t("PrivacyPolicy.terms")}</p>
                       
                        <p className="policty__textStrong terms">
                            {t("PrivacyPolicy.order")}-
                            <span className="policty__text terms">{t("PrivacyPolicy.orderText")}</span>
                
                        </p>  
                        <p className="policty__textStrong terms">{t("PrivacyPolicy.products")}
                        -<span  className="policty__text terms">{t("PrivacyPolicy.productsText")}</span>
                        </p>
                        <p className="policty__textStrong terms">{t("PrivacyPolicy.site")}
                        -<span  className="policty__text terms">{t("PrivacyPolicy.siteText")}</span>
                        </p>
                        <p className="policty__textStrong terms">{t("PrivacyPolicy.data")}
                        -<span  className="policty__text terms">{t("PrivacyPolicy.dataText")}</span>
                        </p>
                        <p className="policty__textStrong terms">{t("PrivacyPolicy.client")}
                        -<span  className="policty__text terms">{t("PrivacyPolicy.clientText")}</span>
                        </p>
                        <p className="policty__text terms">{t("PrivacyPolicy.abio")}</p>
                        </div>

                        <div className="policy__info">
                        <p className="policty__textGlobal">{t("PrivacyPolicy.general")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.generalText1")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.generalText2")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.generalText3")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.generalText4")}</p>
                        </div>

                        <div className="policy__info">
                        <p className="policty__textGlobal">{t("PrivacyPolicy.clientsData")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.clientsText1")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.clientsText2")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.clientsText3")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.clientsText4")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.clientsText5")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.clientsText6")}</p>

                        </div>
                        <div className="policy__info">
                        <p className="policty__textGlobal">{t("PrivacyPolicy.processing")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.processingText1")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.processingText2")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.processingText3")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.processingText4")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.processingText5")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.processingText6")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.processingText7")}</p>

                        </div>
                        <div className="policy__info">
                        <p className="policty__textGlobal">{t("PrivacyPolicy.conditions")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.conditionsText1")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.conditionsText2")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.conditionsText3")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.conditionsText4")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.conditionsText5")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.conditionsText6")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.conditionsText7")}</p>

                        <p className="policty__textGlobal">{t("PrivacyPolicy.rights")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.rightsText1")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.rightsText2")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.rightsText3")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.rightsText4")}</p>
                        
                        </div>
                        <div className="policy__info">
                        <p className="policty__textGlobal">{t("PrivacyPolicy.measures")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.measuresText")}</p>

                        </div>
                        <div className="policy__info">
                        <p className="policty__textGlobal">{t("PrivacyPolicy.cookie")}</p>
                        <p className="policty__text">{t("PrivacyPolicy.cookieText")}</p>

                        </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export {PrivacyPolicy}