import { useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "../css/gift.css"
import "../responsive/gift.css"
import gif from "../images/gif.svg"
import { useTranslation } from "react-i18next";
import giftIcon from "../images/aGift.svg"
const GiftCard=()=>{
    const location = useLocation();
    const {t}=useTranslation()

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);

    const aGift=[
        {id:1,
        name:t("giftCard.advantages1")
        },
        {id:2,
            name:t("giftCard.advantages2")
        },
        {id:3,
            name:t("giftCard.advantages3")
        },
        {id:4,
            name:t("giftCard.advantages4")
        },
        {id:5,
            name:t("giftCard.advantages5")
        },
        {id:6,
            name:t("giftCard.advantages6")
            }
    ]  

    return(
        <>
        <div className="gifts">
        <div className="container">

            <div className="gift__top">
                <p>{t("giftCard.home")} / <span className="gift__top-green">{t("giftCard.card")}</span>  </p>
            </div>
        </div>
       

        <div className="gift__container">
        <div className="container">
            <div className="gift__minCont">
                <div className="giftCard__block ">
                    <div className="giftCard-item block-item">
                    <p className="giftCard-itemTxt">{t("giftCard.gift")}</p>
                    <p className="giftCard-itemInfo"> {t("giftCard.great")} </p>
                 <div className="giftCard-itemRes">
                 <Link to="buyGift" className="giftCard-Link">  <button className="giftCard-itemBtn">{t("giftCard.buy")}</button></Link>
                <img  className="gifImgRes" src={gif} alt="" />
                </div> 
                
                    </div>
                    <div className="giftCard-item">
                        <img  className="gifImg" src={gif} alt="" />
                    </div>
                </div>

                <div className="giftCard__Info">
                    <p className="GiftTop__info">{t("giftCard.advantages")}</p>
                    <div className="advantages">
                    {
                        aGift.map((item)=>{
                            return(
                                <div className="giftIcon">
                                <img src={giftIcon} alt="aGift" />
                                <p className="giftIcon__txt">{item.name}</p>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
            <div className="gift__maxCont">
                <p className="attention">
                    <span className="attentionTxt">{t("giftCard.attentionTxt")}</span>
                    {t("giftCard.attention")} </p>
            </div>  
               </div>
        </div>
   
        </div>
        </>
    )
}

export {GiftCard}