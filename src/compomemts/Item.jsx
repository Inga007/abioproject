import { GetRecomended } from "./GetRecomended"
import prod from "../images/prod.png"
import React from "react"
import fave from "../images/fave.png"
import smollLine from "../images/smolLine.svg"
import row from "../images/newLine.svg"
import favorit from "../images/raphael_fave.svg"
import item from "../images/item.svg"
import "../css/item.css"
import "../responsive/item.css"
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useLocation } from "react-router";
import { useState } from "react"
import axios from "axios"
// import ReactImageMagnify from 'react-image-magnify';
import { useTranslation } from "react-i18next";
import { BiChevronLeft, BiChevronRight} from 'react-icons/bi'


const Item=()=>{
  const {t,i18n}=useTranslation()

   const {productCode}=useParams()
   const {category2} = useParams()
  const {category3} = useParams()
  const [productdetail, setProduct] = useState([])

   const location = useLocation();

   const [slider,setSlider] = useState(0)
   useEffect(() => {
     window.scrollTo(0, 0);
   }, [location]);


  let url = `https://abio.am:8443`;

  //  const [noCart,setNoCart]=useState([])
 
   const scrollRef = React.useRef(null) ;
  
   const scroll = (direction) =>{
     const {current} = scrollRef;
     if(direction === "left"){
    
       current.scrollLeft -= 80;
     }else {
    
       current.scrollLeft += 80;
     }
   }


   

   function handleClick(index){
     
      
      setSlider(index)
   }
   
 const [counter, setCounter] = useState(1);
  let incrementCounter = () => setCounter((count) => count + 1 >= productdetail?.quantity ?  productdetail?.quantity : count + 1 );
 
  let decrementCounter = () => setCounter(counter - 1); 
  if(counter<=1) {
    decrementCounter = () => setCounter(1);
  }


  const incrementslider= () => setSlider(slider + 1);
  if(slider>=productdetail?.pictureIds?.length) {
    const {current} = scrollRef;
    current.scrollLeft = 0;
      setSlider(0);
    

  }
  let decrementslider= () => setSlider(slider - 1); 
  if(slider<=0) {
  
    decrementslider = () => setSlider(0);
  
  }
   
   
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
     
      const  exist =  cartItems.find((x) => x.productCode === product.productCode);
      if (exist ) {
        setCartItems(
          cartItems.map((x) =>
            x.productCode === product.productCode ? { ...exist } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...product}]);
      }
     
     
      }
   const fetchdata =  async ()=>{
    let lang =i18n.language.slice(0,2).toUpperCase()
      await axios.get(`${url}/abio/public/get/product/${productCode}?language=${lang}`
         
        ).then((res) => {
        
         setProduct(res.data)
        
   
      }).catch((err) => {
        console.log(err)
      })
     }

     useEffect(() => {
      fetchdata();
      
    }, [i18n.language, slider]);

    
  
    const onAdd = async  (prod) => {
      const headers = JSON.parse(localStorage.getItem("headers")) ;
      
    
      const response = await axios.post(`${url}/abio/public/cart/addProduct?productCode=${prod}&quantity=${counter}`,{},
        {
        headers: {
          
          'X-CART-ID':  headers
        }
      }).catch(er =>console.log(er));
      
      
        };

    return productdetail && (
        <>
              <div className="top__item container ">
               
                     <p>
                      {productdetail.category2} / 
                    <span className="green__text">{productdetail.category3}</span>
                    </p>

        </div> 
       

        <div className="product__item">

           <div className="container__item">
            <div className="product__item-block  ">
      

                <div className="global_item_img">
                  <div  className="product___item-img  imgChange">
                <svg 
                onClick={()=>favadd(productdetail)}
                width="40" height="36" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect width="40" height="36" rx="10" fill="#FDFDFF"/>
               <path d="M13.0772 21.0635L6.34668 14.333C4.5542 12.5405 4.50276 9.72478 6.1484 8.07914L6.14856 8.07898C7.79312 6.43292 10.6087 6.48473 12.4022 8.27742C12.4023 8.27745 12.4023 8.27747 12.4023 8.2775L12.7245 8.59973L13.0781 8.95329L13.4316 8.59973L13.7539 8.2775C13.7539 8.27747 13.7539 8.27745 13.754 8.27742C15.5223 6.50988 18.2843 6.4347 19.9378 8.00996L20.0069 8.07906C21.6517 9.72469 21.6003 12.5404 19.8071 14.3329L19.807 14.333L13.0772 21.0635Z" stroke="#0E0E0E"/>
               </svg>
              
                
           {/* <ReactImageMagnify {...{
                     smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        className: "product___item-images",
                   
                  src: `${url}/abio/public/files?productCode=${productCode}&fileName=${productdetail?.pictureIds?.[slider] }`
      
                      },
                     largeImage: {
                      src: `${url}/abio/public/files?productCode=${productCode}&fileName=${productdetail?.pictureIds?.[slider] }`,
                      width:1200,
                      height: 1440,
                    
                        
                      
                      
                       
                     },
                    
                   
                  }} />  */}
                  </div>
<div className="galleryBlock app_gallery_content" >
<div className='app_gallery_images' ref= {scrollRef}> 
       {productdetail?.pictureIds?.map((gallery,index) =>(
              <div className='gallery_image_card flex__center' key = {index} >
         
              <img src={ `${url}/abio/public/files?productCode=${productdetail?.productCode}&fileName=${productdetail?.pictureIds[index] }`}
             alt="gallery" 
             className={slider == index ? ' active' : 'gallery'}
             onClick={()=>handleClick(index)}/>
           
         </div>
       ))

       }
     </div>
     <div className='app_gallery_icons'>
     < BiChevronLeft className='gallery_arrow_left'  onMouseDown={decrementslider} onClick ={() => scroll('left')}/>
     < BiChevronRight className='gallery_arrow_right' onMouseDown={incrementslider}  onClick ={() => scroll('right')}/>
     </div>
     </div>
                </div>
                <div className="product__item-text">
                <p className="product__item-text1">{productdetail?.title}</p>
                <p className="product__item-text2">{productdetail?.name}</p>
                  <div className="product__item-price">
                    <p className="product__item-priceNew">{productdetail?.discount === 0 ? productdetail?.price?.toLocaleString() : productdetail?.discountPrice?.toLocaleString()} AMD</p>
                    <p className="product__item-priceOld">{productdetail?.discount > 0  ? productdetail?.price?.toLocaleString(): null} 
                    {/* {t("item.amd")} */}
                    </p>
                </div>  
                
                
                <div className="product__item-text3">
                        <p className="product__item-textStrong"> {t("item.code")}: </p>
                        <span className="product__item-textdont">{productdetail?.productCode}</span>
                 </div>
                 <div className="product__item-text3">
                        <p className="product__item-textStrong">{t("item.dimensions")}: </p>
                        <span className="product__item-textdont">{productdetail?.dimensions} </span>
                 </div>
                 { productdetail?.colorCodes?.length > 0 ? 
                 <div className="product__item-text3">
                        <p className="product__item-textStrong">{t("item.color")}: </p>
                        <div className="product__item-color">
                        {productdetail?.colorCodes?.map((data ,i)=>{
                          
                           return (
                              <>
                             <div className={data} key={productdetail?.productCode}></div> 
                           {/* <div className={img[i]?.id === slider ?` ${img[i]?.color} clickeddot` : `${img[i]?.color}`}  key= {productdetail?.productCode}
                            onClick={()=>handleClick(i)}></div> */}
                           
                            </>
                         )
                            
                         })}
                        </div>
                 </div>
: null}
                 <div className="product__item-text3">
                        <p className="product__item-textStrong">{t("item.availability")}: </p>
                        <span className= {productdetail?.inStock ? `product__item-textdont` : `product__item-textdont noinstock`}>{productdetail?.inStock ? t("item.instock"): t("item.notinstock")}</span>
                 </div>
                 <div className="product__item-text4">
                    <div className="product__itemMinus" onClick={decrementCounter}>-</div>
                    <div className="product__itemCount">{counter<=0 ? counter=1:  counter}</div>
                    <div className="product__itemPlus" onClick={incrementCounter}>+</div>
                 </div>
                 <div className="product__item-text5">
                  <Link to ='tabs'>
                    <button className="product__item-btn" onClick={()=>onAdd(productdetail?.productCode)}>{t("item.add")}</button></Link>
                 </div>
                 <div className="product__item-text6">
                  <Link  target="_blank" to='/PaymentDelivery'>{t("item.payment")} </Link>
                {/* <p>{t("item.payment")}</p> */}
                 </div>
                 <div className="product__item-text7">
                <p>{t("item.detal")}</p>
                 </div>
                 <div className="product__item-text8">
                    <p>{productdetail?.description}
                    </p>
                 </div>
             
                </div>
                
            </div>
            <div className="responsProduct">
                 <div className="product__item-text7Res">
                <p>{t("item.detal")}</p>
                 </div>
                 <div className="product__item-text8Res">
                    <p>{productdetail?.description}
                    </p>
                 </div>
                 </div>
                </div>
           <GetRecomended/>
           
           </div>
        </>
    )
}
export {Item}