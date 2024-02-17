import { Link } from "react-router-dom"
import logo from "../images/logoabio.png"

import visa from "../images/visa.png"
import master from "../images/master.png"
import idram from "../images/idram.png"
import paypal from "../images/paypal.png"
import instagram from "../images/instagram.svg"
import facebook from "../images/facebook.svg"
import phoneFooter from "../images/phoneFooter.svg"
import locationFooter from "../images/locationFooter.svg"
import clockFooter from "../images/clockFooter.svg"
import webSoft from "../images/webSoft.png"
import email from "../images/email.svg"
import line from "../images/line.svg"
import mir from "../images/mir.svg"
import american from "../images/american.svg"
import arca from "../images/arca.svg"
import "../css/footer.css"
import { useTranslation } from "react-i18next";

const Footer=()=>{
    const {t}=useTranslation()

    return(
        <>
        <div className="desktop__footer">
            
        <div className="footer">
        <div className="container">

            <div className="footer-maket">
            <div className="footer-block">
                <img src={logo} alt="logo"  className="footer__logo"/>
            </div>
            <div className="footer-block block-itemFooter">
                <Link className="footer__link" to=""> <p>{t("footer.catalog")}</p></Link>   
                <Link className="footer__link" to="Services"><p>{t("footer.service")}</p></Link>
                <Link className="footer__link" to="videoLesson"><p>{t("footer.video")}</p></Link>
                <Link className="footer__link" to="giftCard"><p>{t("footer.gift")}</p></Link> 

            </div>
    
            <div className="footer-block block-itemFooter ">
                <Link className="footer__link" to="about"><p>{t("footer.about")}</p></Link>
                <Link className="footer__link" to="contact"><p>{t("footer.contacts")}</p></Link>
                <Link className="footer__link" to="privacyPolicy">  <p>{t("footer.policy")}</p></Link>
                <Link className="footer__link" to="PaymentDelivery"><p>{t("footer.payment")}</p></Link>

            </div>
            <div className="footer-block withIcon">
                <div className="footer-block__icon">
                <img src={phoneFooter} alt="phoneFooter" className="footer-icon"/>
                    <a href="tel:+37499520223" className="call" >+374 99 520223</a>
                    {/* <p>+374 99 520223</p> */}
                </div>
                <div className="footer-block__icon">
                    <img src={email} alt="email" className="footer-icon"/>
                    <a className="call" href="mailto:info@abio.am">info@abio.am</a>
                </div>
                <div className="footer-block__icon">
                <img src={locationFooter} alt="locationFooter" className="footer-icon"/>
                    <p>{t("contact.location")}</p>
                </div>
                <div className="footer-block__icon">
                <img src={clockFooter} alt="clockFooter" className="footer-icon"/>
                    <p>{t("Home.open")}:
                    <br />
                     9:30 - 19:00</p>
                </div>

            </div>
            <div className="footer-block connect ">
                <div>
                <p>{t("footer.connect")}</p>
                <div className="footer-block__item">
                <a href="https://www.facebook.com/abiogardencenter/" target="_blank" ><img  src={facebook} alt="facebook" /></a> 
                <a href="https://www.instagram.com/abio_garden/"  target="_blank" ><img src={instagram} alt="instagram" /></a> 
                </div>
                </div>
                <div>
                <p>{t("footer.paymentMethods")}</p>
                <div className="footer-block__cards">
                <div className="footer-block__cards-item">
                     <img src={visa} alt="visa" />
                    <img src={master} alt="master" />
                    <img src={idram} alt="idram" /> 
                    </div>
                    <div className="footer-block__cards-item">
                    <img src={mir} alt="mir" />
                    <img src={american} alt="american" />
                    <img src={arca} alt="arca" />
                    </div>
                </div>
                </div>
  
            </div>
            </div>
        </div>   
        </div>
        <div className="connectRes">
            <div className="paymont">
            <div >
            <p>{t("footer.connect")}</p>
                <div className="footer-block__item">
               <a href="https://www.facebook.com/abiogardencenter/" target="_blank" ><img  src={facebook} alt="facebook" /></a> 
                <a href="https://www.instagram.com/abio_garden/"  target="_blank" ><img src={instagram} alt="instagram" /></a> 
                </div>
            </div>  
            <div >
            <p>{t("footer.paymentMethods")}</p>
                <div className="footer-block__cards">
                <div className="footer-block__cards-item">
                     <img src={visa} alt="visa" />
                    <img src={master} alt="master" />
                    <img src={idram} alt="idram" /> 
                    </div>
                    <div className="footer-block__cards-item">
                    <img src={mir} alt="mir" />
                    <img src={american} alt="american" />
                    <img src={arca} alt="arca" />
                    </div>
                </div>
            </div>
            </div>
        </div>

        </div>

        <div className="mobile__footer">
            <div className="mobile__footer-item">
                <div className="mobile__footer-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="icone__mobile">
                     <div className="mobile__footer-withIcon">
                   
                    <div>
                    <div className="mobile__footer__icon">
                    <img src={phoneFooter} alt="phoneFooter" className="footer-icon"/>
                  {/* <p  className="mobile__footer__icon-txt "> +374 99 520223</p>  */}
                     <a className="call" href="tel:+37499520223" >+374 99 520223</a>
                     
                </div>
                <div className="mobile__footer__icon">
                    <img src={clockFooter} alt="clockFooter" className="footer-icon"/>
                    <p className="mobile__footer__icon-txt">{t("Home.open")}: 
                    <br /> 
                    9:30 - 19:00</p>
                </div>
      
                    </div>
                <div>
                <div className="mobile__footer__icon ">
                <img src={email} alt="email" className="footer-icon" />
                    {/* <p className="mobile__footer__icon-txt">info@abio.am</p> */}
                    <a className="call" href="mailto:info@abio.am">info@abio.am</a>
                </div>
                <div className="mobile__footer__icon">
                    <img src={locationFooter} alt="locationFooter" className="footer-icon"/>
                    <p className="mobile__footer__icon-txt">{t("contact.location")}</p>
                </div>
               
                </div>
                </div>
                </div>
            </div>
            {/* <img src={line} alt="line" className="line" /> */}
            <div className="mobile__footer-item item__footerMob">
                <div className="mobile__footer-block">
                <Link className="footer__link" to="products"> <p>{t("footer.catalog")}</p></Link>   
                <Link className="footer__link" to="Services"><p>{t("footer.service")}</p></Link>
                <Link className="footer__link" to="videoLesson"><p>{t("footer.video")}</p></Link>
                <Link className="footer__link" to="giftCard"><p>{t("footer.gift")}</p></Link> 
                </div>
                <div className="mobile__footer-block">
                <Link className="footer__link" to="about"><p>{t("footer.about")}</p></Link>
                <Link className="footer__link" to="PaymentDelivery"><p>{t("footer.payment")}</p></Link>
                
                </div>
                <div className="mobile__footer-block">
                <Link className="footer__link" to="contact"><p>{t("footer.contacts")}</p></Link>
                <Link className="footer__link" to="privacyPolicy">  <p>{t("footer.policy")}</p></Link>
              
                </div>
                <div className="mobile__footer-item">
            <div className="connectRes">
            <div className="paymont">
            <div >
            <p>{t("footer.connect")}</p>
                <div className="footer-block__item">
               <a href="https://www.facebook.com/abiogardencenter/" target="_blank"><img  src={facebook} alt="facebook" /></a> 
               <a href="https://www.instagram.com/abio_garden/" target="_blank"> <img src={instagram} alt="instagram" /></a>
                </div>
            </div>
            <div >
            <p>{t("footer.paymentMethods")}</p>
                <div className="footer-block__cards">
                    <div className="footer-block__cards-item">
                     <img src={visa} alt="visa" />
                    <img src={master} alt="master" />
                    <img src={idram} alt="idram" /> 
                    </div>
                    <div className="footer-block__cards-item">
                    <img src={mir} alt="mir" />
                    <img src={american} alt="american" />
                    <img src={arca} alt="arca" />
                    </div>
                </div>
            </div>
            </div>
            
        </div>
            </div>

            </div>
            {/* <img src={line} alt="line" className="line" /> */}

        
        </div>
        <div className="footer__end">
            <div className="footer__end_content">
            <p className="abio__center">ABIO Garden Center © 2023</p>
            </div>
            <div className="footer__end-img"> 
            <a href="https://www.websoft.am/" target="_blank">{t("Home.created")}</a>
            <img src={webSoft} alt="webSoft" />
         
            </div>
          
        </div>

        </>
    )
}
export {Footer}