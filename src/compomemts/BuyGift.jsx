import { useState } from "react";
import "../css/buyGift.css"
import "../responsive/buyGift.css"
import gif from "../images/gif.svg"
import { GetRecomended } from "./GetRecomended"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Link } from 'react-router-dom';

const BuyGift=()=>{
    const [rec, setRec]= useState([])
    const [arrayChoose, setarrayChoose]= useState([])

    const [buttonText, setButtonText] = useState('');
    const [prodCode, setProdCode] = useState('')
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    function handleClick(e) {
        setButtonText(e.target.value);
        setProdCode(e.target.name)
      
      }

      const {t,i18n}=useTranslation()


      let url = `https://abio.am:8443`;


    
  
      const getData = async (lng) => {
        let lang =lng.toUpperCase() 
        const responce  = await axios.get(`${url}/abio/public/getGiftCardProducts?language=${lang}&page=0&size=50`);
                                         
        setRec(responce.data);
      };
      
      useEffect(() => {
        getData(i18n.language);
      }, [rec,i18n.language]);

      const [counter, setCounter] = useState(1);
      const incrementCounter = () => setCounter(counter + 1);
      let decrementCounter = () => setCounter(counter - 1); 
      if(counter<=1) {
        decrementCounter = () => setCounter(1);
      }
  
 
      const onAdd = async  (prod) => {
        const headers = JSON.parse(localStorage.getItem("headers")) ;
        
      
        const response = await axios.post(`${url}/abio/public/cart/addProduct?productCode=${prod}&quantity=${counter}`,{},
          {
          headers: {
            
            'X-CART-ID':  headers
          }
        }).catch(er =>console.log(er));
        
        
          };
          const [cartItems, setCartItems] = useState(() => {
            const ls = localStorage.getItem("bookmarks");
            if (ls) return JSON.parse(ls);
            else return [];
          });

          
          useEffect(() => {
           
                localStorage.setItem("bookmarks", JSON.stringify(cartItems));
            
           
          
          
          }, [cartItems]);
          useEffect(() => {
            setCartItems(JSON.parse(localStorage.getItem("bookmarks")) || [])
        
        }, [localStorage.getItem("bookmarks")]);
         
          const favadd= (product)=>{
             
            const  exist =  cartItems?.find((x) => x.productCode === product.productCode);
            if (exist ) {
              setCartItems(
                cartItems.map((x) =>
                  x.productCode === product.productCode ? { ...exist } : x
                )
              );
            } else {
              
                       if(product?.productCode !== undefined ){
                        
                        setCartItems([...cartItems, { ...product}]);
                       }
              
            }
           
           
            }
      

    return(
        
        <>
        <div className="giftBuys">
        <div className="container">

            <div className="gift__top">
            <p>{t("giftCard.card")} /<span className="buyGift__topGreen">ABIO/BRABION {t("giftCard.card")}</span> </p>
            </div>
        </div>
        <div className="conatiner__buyGift">
        <div className="container">

            <div className="giftBuy__minCont">
            <div className="product___item-img">
            <svg  onClick={()=>favadd(arrayChoose)} width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="27" height="27" rx="10" fill="#FDFDFF"    />
            <path d="M13.0773 21.0635L6.34671 14.333C4.55423 12.5405 4.50279 9.72478 6.14843 8.07914L6.14859 8.07898C7.79315 6.43292 10.6087 6.48473 12.4023 8.27742C12.4023 8.27745 12.4023 8.27747 12.4023 8.2775L12.7246 8.59973L13.0781 8.95329L13.4317 8.59973L13.7539 8.2775C13.7539 8.27747 13.754 8.27745 13.754 8.27742C15.5224 6.50988 18.2844 6.4347 19.9378 8.00996L20.0069 8.07906C21.6518 9.72469 21.6003 12.5404 19.8071 14.3329L19.807 14.333L13.0773 21.0635Z" stroke="#0E0E0E"/>
            </svg>

                    <img src={gif} alt="gif" className="product___item-images" />
            </div>
            <div className="product__info">
                <p className="gift__item-text">Abio/brabion {t("giftCard.card")}</p>
                <p className="gift__item-text1">{t("giftCard.card")}</p>
                <p className="gift__item-price"><span>{buttonText}</span> AMD</p>
                {/* <p className="gift__item-text2">{t("giftCard.availability")}:</p> */}
                <div className="gift__price">
                    <div  className="gift__price-item">
                        {rec?.map(item=>
                        
                         (
                            <button key={item.productCode} name={item.productCode}  value={item?.price} 
                            onClick={handleClick} onMouseDown={()=>setarrayChoose(item)}
                            className="btn__price">{item?.price} AMD</button>
                        )

                        )}
              
                    </div>
         
             
                </div>
                <div className="gift__item-text3">
                        <p className="gift__item-textStrong">{t("giftCard.availability")}: </p>
                        {/* <span className="gift__item-textdont">{arrayChoose?.inStock}</span> */}
                        <span className= {arrayChoose?.inStock ? `gift__item-textdont` : `product__item-textdont noinstock`}>{arrayChoose?.inStock ? t("item.instock"): t("item.notinstock")}</span>
          
                 </div>
                 <div className="gift__item-text4">
                    <div className="gift__itemMinus"  onClick={decrementCounter}>-</div>
                    <div className="gift__itemCount">{counter}</div>
                    <div className="gift__itemPlus" onClick={incrementCounter}>+</div>
                 </div>
                 <div className="gift__item-text5">
                    <button className="gift__item-btn" onClick={()=>onAdd(prodCode)}>{t("item.add")}</button>
                 </div>
                 <div className="gift__item-text6">
                {/* <p>{t("item.payment")}</p> */}
                <Link  target="_blank" to='/PaymentDelivery'>{t("item.payment")} </Link>
                 </div>
                 <div className="gift__item-text7">
                <p>{t("item.detal")}</p>
                 </div>
                 <div className="gift__item-text8">
                    <p>{t("giftCard.attentionTxt")}
                    {t("giftCard.attention")}
                    </p>
                 </div>

               
            </div>
            
            </div>
            <div className="gift__itemRes">
                 <div className="gift__item-text7Res">
                <p>{t("item.detal")}</p>
                 </div>
                 <div className="gift__item-text8Res">
                    <p>{t("giftCard.attentionTxt")}
                    {t("giftCard.attention")}
                    </p>
                 </div>
                 </div>
            <GetRecomended/>
        </div>
        </div>
        </div>
        </>
    )
}
export {BuyGift}