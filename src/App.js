import {BrowserRouter as Router, Route, Routes, useParams ,matchPath,useMatch , Link, Navigate , useNavigate } from "react-router-dom";
import {Home} from "./compomemts/Home"
import { Layout } from "./compomemts/Layout";
import { Services } from "./compomemts/Services";
import { useLayoutEffect } from 'react';
import { useState, useEffect, useCallback} from "react"
import { useTranslation } from 'react-i18next';
import { Item } from "./compomemts/Item";
import { PaymentDelivery } from "./compomemts/PaymentDelivery";
import { Card } from "./compomemts/Card";
import { VideoPlayer } from "./compomemts/VideoPlayer";
import {BagPage} from "./compomemts/BagPage"
import { Products } from "./compomemts/Products";
import { Contact } from "./compomemts/Contact";
import { Favorit } from "./compomemts/Favorit";
import { AboutAs } from "./compomemts/AboutUs";
import { GiftCard } from "./compomemts/GiftCard";
import { BuyGift } from "./compomemts/BuyGift";
import { PrivacyPolicy } from "./compomemts/PrivacyPolicy";
import {Tabs} from "./compomemts/Tabs"
import {Succes} from './compomemts/Succes'
import {Fail} from './compomemts/Fail'
import { Search } from "./compomemts/Search";
import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";



function App() {
  
  const {t,i18n}=useTranslation()
const {lang} = useParams()
 const {category1} =useParams()
 const {category2} =useParams()

 const {category3} =useParams()

//  function getRoute(path) {
//   let args = Array.prototype.slice.call(arguments, 1);
//   let count = -1;
//   return path.replace(/:[a-zA-Z?]+/g, function (match) {
//       count += 1;
//       return args[count] !== undefined ? args[count] : match;
//   });
// };
// let newPath = getRoute('/product/:category/:category2/:category3/:lang', `${category1}`, `${category2}`,`${category3}`,`${i18n.language}`);
// console.log(newPath)

// const repalacePathParams = (path, params, prefix = ':') => {
//   let newPath = path

//   Object.entries(params).forEach(([key, value]) => {
//     newPath = newPath.replace(prefix + key, value)
//   })
//   return newPath
// }
// const match = useMatch("/:firstRoute/:secondRoute/*");

// repalacePathParams('/product/:category/:category2/:category3/:lang', { lang: `${i18n.language}` })

  if (window.location.pathname === "/"){
    window.location.replace(`/${i18n.language}`)
  } 

  // const stateObj = { foo: "product" };
  // window.history.replaceState(stateObj, "", `${i18n.language}`);
    // window.location.replace("am", `${i18n.language}`);
   
   
    

  function getAllData(){
    if ( window.location.pathname === `/am` || window.location.pathname === `/ru` 
    || window.location.pathname === `/en`) {
    
      
      window.history.pushState('',undefined, `/${i18n.language}`)
      
    }
   
    else if( window.location.pathname === `/am/Services` || window.location.pathname === `/en/Services` || window.location.pathname === `/ru/Services`){
      window.history.pushState('',undefined,`/${i18n.language}/Services`)
    }
    else if( window.location.pathname.includes(`/product`) ){
    let x=  window.location.pathname.split('/').slice(0,-1).join('/') + `/${i18n.language}`
      window.history.pushState('',undefined,  `${x}`)
    }
  //   else if(window.location.pathname.includes('/am')){
  //  i18next.changeLanguage('am')
     
  //   }
    //  if(window.location.pathname.includes('/en')){
    //   i18next.changeLanguage('en')
    //   window.history.pushState('',undefined, `/${i18n.language}`)
    //           }

    //  else if(window.location.pathname.includes('/ru')){
    //     i18next.changeLanguage('ru')
    //     window.history.pushState('',undefined, `/${i18n.language}`)
    //             }         
    //   else if(window.location.pathname.includes('/am')){
    //             i18next.changeLanguage('am')
    //             window.history.pushState('',undefined, `/${i18n.language}`)
                        // }
  }
 
  const handleLanguageChanged = useCallback(() => {
   
    getAllData();
   

    
}, []);
   useEffect(() => {
    i18next.on('languageChanged',handleLanguageChanged )
 

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
  };
 
  }, [handleLanguageChanged]);

 
   

  // useEffect(() => {
  //   const handler = (event) => {
  //     event.preventDefault();
  //   };

  //   document.addEventListener("contextmenu", handler);

  //   return () => {
  //     document.removeEventListener("contextmenu", handler);
  //   };
  // }, []);

  return (
    <>

    <Router >
     <Routes>
      
      <Route path= '/'
   

        element={<Layout  />}
        >
   
     
        
      <Route index  
       path= {`/:${i18n.language}`}
      // element={<Navigate to={`/${i18n.language}`} replace />}

      element={<Home />}
      />
      <Route path={`/:${i18n.language}/Services`} element={<Services/>} />
      <Route path="PaymentDelivery" element={<PaymentDelivery/>} />    
      <Route path="bagPage" element={<BagPage />} />
      <Route path="card/:productCode" element={<Item/>}/>
      <Route path="card" element={<Card />}/>
      <Route path={`/:${i18n.language}/videoLesson`} element={<VideoPlayer/>}/>
      <Route path="contact" element={<Contact/>} />
      <Route path="favorit" element={<Favorit/>}/>
      <Route path="about" element={<AboutAs/>} />
      <Route path="giftCard" element={<GiftCard/>}/>
      <Route path="giftCard/buyGift" element={<BuyGift/>}/>
      <Route path="privacyPolicy" element={<PrivacyPolicy/>}/>
      <Route path="tabs" element={<Tabs />} />
      <Route path="search" element={<Search />} />
      <Route path="idram/success" element={<Succes/>}/>
      <Route path="idram/fail" element={<Fail/>}/>
     
      <Route path="card/:productCode/tabs" element={<Tabs/>}/>
      <Route path={`/product/:category1?/:category2?/:category3?/:lang`} element={<Products/>}/>
      </Route>
      {/* </Route> */}
      
    </Routes>

    </Router>

    </>
  );
}

export default App;
