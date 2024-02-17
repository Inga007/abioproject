import { useState ,useEffect} from "react";
import "../css/product.css"
import "../css/recom.css"
// import {favoritData} from "../data/favoritData"
import shop from "../images/shop.svg"
import axios from 'axios'
import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next";
import { Link ,  useParams,  useSearchParams} from "react-router-dom";
const Search=()=>{
  const [seeMore,setSeeMore]=useState(true)
  const location = useLocation();
  const {t,i18n}=useTranslation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const search = useParams()
  

  const [searchParams , setSearchParams]= useSearchParams()
  
    const [favoritData, setFavoritData] = useState([])
    const [favoritName, setFavoritName] = useState([])
  
  let url = `https://abio.am:8443`;
   
  
  const [q, setQ] = useState('');
  const [searchTerm] = useState(["name","productCode"]);
  
  const params = Object.fromEntries([...searchParams])
  
  const next = Object.keys(params).toString()
  const searchnext = Object.keys(params)
  
  const [cartItems, setCartItems] = useState(() => {
    const ls = localStorage.getItem("bookmarks");
    if (ls) return JSON.parse(ls);
    else return [];
  });
  useEffect(() => {
   
    localStorage.setItem("bookmarks", JSON.stringify(cartItems));
  
  }, [cartItems]);
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
  

let lang =i18n.language?.slice(0,2).toUpperCase()

const url1 = axios.get(`${url}/abio/public/getByProductCodeContaining?language=${lang}&productCode=${next}&page=0&size=50`)
const url2 = axios.get(`${url}/abio/public/getByNameContaining?language=${lang}&searchName=${next}&page=0&size=50`)


useEffect(() => {
   axios.all([url1,url2]).then(axios.spread((...responses) =>{
   
    setFavoritData(responses[0].data);
    setFavoritName(responses[1].data)
    
    
   
  }))
  
 
}, [next]);



const onAdd = async  (prod) => {
  const headers = JSON.parse(localStorage.getItem("headers")) ;
  

  const response = await axios.post(`${url}/abio/public/cart/addProduct?productCode=${prod}&quantity=1`,{},
    {
    headers: {
      
      'X-CART-ID':  headers
    }
  }).catch(er =>console.log(er));
  
  
    };

    const handleChartClick = (e) => {
      e.preventDefault();
      
    }

    let fire =searchprod(favoritData)
    

  function searchprod(items) {
      return items.filter((item) => {
          return searchTerm.some((newItem) => {    
               
              return (
                
                  item[newItem]
                      .toString()
                      .toLowerCase()
                      .indexOf(next.toLowerCase()) > -1
                      
              );
              
          });
      });
  }

  let fire1 =searchprod1(favoritName)
    

  function searchprod1(items) {
      return items.filter((item) => {
          return searchTerm.some((newItem) => {    
               
              return (
                
                  item[newItem]
                      .toString()
                      .toLowerCase()
                      .indexOf(next.toLowerCase()) > -1
                      
              );
              
          });
      });
  }


   
   
    return(
        <>
           <div className="container">

          <div className="favorit__top">
        <p>{t("Home.home")} /  </p>  <span className="favorit__top-green">{t("homePage.search")} </span> 
        </div>
           </div>
        <div className="favorite" >
        <div className="container">

            <div className="favorit__container">
             { fire.length == 0 & fire1.length == 0
              ?(
                next  ? <>
                <div className="no__favorit">
            <p className="noText"> {t("homePage.result")} "{next ? next : null}"</p>
                <Link to="/" className="back_home">{t("homePage.go")}</Link>
                 </div>    
                 </> : null
             )  :
     (
      fire?.map((item) =>
                     
        (
          <div key={item.productCode}>
          <div className="product my_product_card" >
              <div onClick={()=>favadd(item)}>
              <svg  className="favoritSvg" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="27" height="27" rx="10" fill="#FDFDFF"/>
          <path d="M13.0772 21.0635L6.34668 14.333C4.5542 12.5405 4.50276 9.72478 6.1484 8.07914L6.14856 8.07898C7.79312 6.43292 10.6087 6.48473 12.4022 8.27742C12.4023 8.27745 12.4023 8.27747 12.4023 8.2775L12.7245 8.59973L13.0781 8.95329L13.4316 8.59973L13.7539 8.2775C13.7539 8.27747 13.7539 8.27745 13.754 8.27742C15.5223 6.50988 18.2843 6.4347 19.9378 8.00996L20.0069 8.07906C21.6517 9.72469 21.6003 12.5404 19.8071 14.3329L19.807 14.333L13.0772 21.0635Z" stroke="#0E0E0E"/>
          </svg>
              </div>
            
          <Link  className="product__link" to={`/card/${item.productCode}`}>

              
              <img className="product-img" src={`${url}/abio/public/files?productCode=${item.productCode}&fileName=${item.pictureIds[0]}`}/>
              <p className="rec_name">{item?.name}</p>

          
              <div className="rec-colors">
              { item?.colorCodes?.length > 0 ? item?.colorCodes.map((el, ind)=>{
                      return(
                                 <>
                <div className={el} key={ind}></div>
             
                </>
                      )
                      }
                    ) : null}
              </div>
            
              <div className="rec-price">
                  
                   <div className="price">
                   <p className="new-price"> {item?.discount === 0 ? item?.price?.toLocaleString() : item?.discountPrice?.toLocaleString()} AMD</p>
                     <p className="old-price">{item?.discount > 0  ? item?.price?.toLocaleString(): null} </p>
                  </div>
    
                  <img  onClick={handleChartClick}
             className="shopIcon" src={shop} alt="shop"  onMouseDown={()=>onAdd(item.productCode)} />
          </div>
          </Link>

          </div>

          </div>
            )
          )

     )
             }
              { fire1.length == 0 & fire.length == 0 
              ?(

                searchnext === null  ?  <>
                <div className="no__favorit">
         
           <p className="noText gg"> {t("homePage.result")} "{searchnext }"</p> 
                <Link to="/" className="back_home">{t("homePage.go")}</Link> 
                 </div>  </> : null
          
             )  :
     (
      fire1?.map((item) =>
                     
        (
          <div key={item.productCode}>
          <div className="product my_product_card" >
              <div onClick={()=>favadd(item)}>
              <svg  className="favoritSvg" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="27" height="27" rx="10" fill="#FDFDFF"/>
          <path d="M13.0772 21.0635L6.34668 14.333C4.5542 12.5405 4.50276 9.72478 6.1484 8.07914L6.14856 8.07898C7.79312 6.43292 10.6087 6.48473 12.4022 8.27742C12.4023 8.27745 12.4023 8.27747 12.4023 8.2775L12.7245 8.59973L13.0781 8.95329L13.4316 8.59973L13.7539 8.2775C13.7539 8.27747 13.7539 8.27745 13.754 8.27742C15.5223 6.50988 18.2843 6.4347 19.9378 8.00996L20.0069 8.07906C21.6517 9.72469 21.6003 12.5404 19.8071 14.3329L19.807 14.333L13.0772 21.0635Z" stroke="#0E0E0E"/>
          </svg>
              </div>
            
          <Link  className="product__link" to={`/card/${item.productCode}`}>

              
              <img className="product-img" src={`${url}/abio/public/files?productCode=${item.productCode}&fileName=${item.pictureIds[0]}`}/>
              <p className="rec_name">{item?.name}</p>

            
              <div className="rec-colors">
              { item?.colorCodes?.length > 0 ? item?.colorCodes.map((el, ind)=>{
                      return(
                                 <>
                <div className={el} key={ind}></div>
               
                </>
                      )
                      }
                    ) : null}
              </div>
             
              <div className="rec-price">
                  
                   <div className="price">
                   <p className="new-price"> {item?.discount === 0 ? item?.price?.toLocaleString() : item?.discountPrice?.toLocaleString()} AMD</p>
                     <p className="old-price">{item?.discount > 0  ? item?.price?.toLocaleString() : null} </p>
                  </div>
    
                  <img  onClick={handleChartClick}
             className="shopIcon" src={shop} alt="shop"  onMouseDown={()=>onAdd(item.productCode)} />
          </div>
          </Link>

          </div>

          </div>
            )
          )

     )
             }
           
          
           
            </div>

          </div>
        </div>
        </>
    )
}
export {Search}