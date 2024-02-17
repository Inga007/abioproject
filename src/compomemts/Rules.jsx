import { useTranslation } from "react-i18next";

const Rules=()=>{
    const {t}=useTranslation()

    return(
        <>
        <div className="container">
                <p className="payment__text1"> {t("PaymentRules.available")}</p>
                <p className="payment__text2">{t("PaymentRules.bankCards")}</p>
                <p className="payment__text2">{t("PaymentRules.transfer")}</p>
                <p className="payment__text2">{t("PaymentRules.cash")}.</p>
                <p className="payment__text3">{t("PaymentRules.online")} </p>
            </div>
        </>
    )
}
export {Rules}