import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next";

import "../css/about.css"
import "../responsive/about.css"

import about1 from "../images/about1.png"
import about2 from "../images/about2.png"
import about3 from "../images/about3.png"
import about4 from "../images/about4.png"

import aboutIcon1 from "../images/aboutIcon1.svg"
import aboutIcon2 from "../images/aboutIcon2.svg"
import aboutIcon3 from "../images/aboutIcon3.svg"
import aboutIcon4 from "../images/aboutIcon4.svg"
import aboutIcon5 from "../images/aboutIcon5.svg"
import aboutIcon6 from "../images/aboutIcon6.svg"
import aboutIcon7 from "../images/aboutIcon7.svg"
import aboutIcon8 from "../images/aboutIcon8.svg"
import aboutLine from "../images/aboutLine.svg"

const AboutAs=()=>{
    const location = useLocation();
    const {t}=useTranslation()
    const AboutTxt=[
        {
          id:1,
          name:t("AboutUs.about6"),
        },
        {
            id:2,
            name:t("AboutUs.about7"),
          },
          {
            id:3,
            name:t("AboutUs.about8"),
          },
          {
            id:4,
            name:t("AboutUs.about9"),
          },
          {
            id:5,
            name:t("AboutUs.about10"),
          },
          {
            id:6,
            name:t("AboutUs.about11"),
          },
          {
            id:7,
            name:t("AboutUs.about12"),
          },
          {
            id:8,
            name:t("AboutUs.about13"),
          },
          {
            id:9,
            name:t("AboutUs.about14"),
          },
          {
            id:10,
            name:t("AboutUs.about15"),
          }
    ]
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    return(
        <>
            <div className="container">

           <div className="gift__top">
            <p>{t("giftCard.home")} /<span className="buyGift__topGreen">{t("footer.about")}</span> </p>
            </div>
            </div>
        <div className="container__about">
        <div className="container">

            <div className="container-top">
            <div className="top__about">
                <p>{t("AboutUs.about1")} </p>
            </div>
            <div className="aboutIcon">
                <p className="aboutIcon__txt">{t("AboutUs.aboutTop1")} </p>
                <div className="about-icon">
                    <div className="aboutIcon__block">
                        <div className="aboutIcon__block-item">
                            <img src={aboutIcon1} alt="aboutIcon1" />
                            <p>{t("AboutUs.aboutTop2")}</p>
                        </div>
                        <div className="aboutIcon__block-item">
                            <img src={aboutIcon2} alt="aboutIcon2" />
                            <p>{t("AboutUs.aboutTop3")}</p>

                        </div>
                        <div className="aboutIcon__block-item">
                            <img src={aboutIcon3} alt="aboutIcon3" />
                            <p>{t("AboutUs.aboutTop4")}</p>

                        </div>
                        <div className="aboutIcon__block-item">
                            <img src={aboutIcon4} alt="aboutIcon4" />
                            <p>{t("AboutUs.aboutTop5")}</p>

                        </div>
                    </div>
                    <div className="aboutIcon__block">
                        <div className="aboutIcon__block-item">
                            <img src={aboutIcon5} alt="aboutIcon5" />
                            <p>{t("AboutUs.aboutTop6")}</p>

                        </div>
                        <div className="aboutIcon__block-item">
                            <img src={aboutIcon6} alt="aboutIcon6" />
                            <p>{t("AboutUs.aboutTop7")}</p>

                        </div>
                        <div className="aboutIcon__block-item">
                            <img src={aboutIcon7} alt="aboutIcon7" />
                            <p>{t("AboutUs.aboutTop8")}</p>

                        </div>
                        <div className="aboutIcon__block-item">
                            <img src={aboutIcon8} alt="aboutIcon8" />
                            <p>{t("AboutUs.aboutTop9")}</p>

                        </div>
                    </div>    
                </div>
            </div>
            <img className="aboutLine" src={aboutLine} alt="aboutLine" />
            <div className="about__area about1__area">
            <div className="about1__img">
                <img src={about1} alt="about1" />
            </div>
            <div className="about__area-text about1__txt">
            <p>{t("AboutUs.about2")} </p>
            </div>
            </div>
            <img className="aboutLine" src={aboutLine} alt="aboutLine" />
            <div className="about__area about2__area">
            <div className="about__area-text">
            <p>{t("AboutUs.about3")} </p>
            </div>
            <div>
                <img src={about2} alt="about2" />
            </div>
            </div>
            {/* responsive  start*/}
            <div className="about2__areaRespons">
            <div className="about2__areaRespon-img">
                <img src={about2} alt="about2" />
            </div>
            <div className="about__area-textRes">
            <p>{t("AboutUs.about3")} </p>
            </div>
          
            </div>
            {/* responsive end */}
            <img className="aboutLine" src={aboutLine} alt="aboutLine" />
            <div className="about__area about3__area">
            <div  className="about3__areaRespon-img">
                <img src={about3} alt="about3" />
            </div>
            <div className="about__area-text about__area-textRes">
            <p>{t("AboutUs.about4")} </p>
            </div>
            </div>
            <img className="aboutLine" src={aboutLine} alt="aboutLine" />
            <div className="about__area about4__area">
            <div className="about__area-text">
             
            {AboutTxt.map((item) =>
                              <ul className="about__list" key={item.id}>
                              <li>{item.name}</li>
                  
                            </ul>
                          )}
            </div>
            <div>
                <img src={about4} alt="about4" />
            </div>
            </div>
                {/* responsive start */}
                <div className="about4__areaRespons">
                <div className="about4__areaRespon-img">
                <img src={about4} alt="about4" />
            </div>
            <div className="about__area-textRes">
             
            {AboutTxt.map((item) =>
                              <ul className="about__listRes" key={item.id}>
                              <li>{item.name}</li>
                  
                            </ul>
                          )}
            </div>
          
            </div>

                {/* responsive end */}

            </div>
          </div>
        </div>
        </>
    )
}
export {AboutAs}