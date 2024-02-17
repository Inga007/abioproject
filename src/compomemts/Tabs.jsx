import { useState,useEffect } from "react";
import '../css/tabs.css'
import tableimg from '../images/imgtable.png'
import check from '../images/check.png'
import close from '../images/close.png'
import DeliverInfo from './DeliverInfo'


import bankCard from '../images/bankCard.png'
import master from '../images/masterCard.jpg'
import idram from '../images/idram2.png'
import pay from '../images/pay.png'
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useTranslation } from "react-i18next";
import { useForm } from 'react-hook-form';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useLocation, useNavigate } from "react-router-dom"
import { Link, useParams } from "react-router-dom"
import { languagesData } from "../data/languagesData"

import Modal from 'react-modal';
import axios from 'axios'
import { Item } from "./Item";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    
    "& label.Mui-focused": {
      color: "#113E2E"
    },
  "& .MuiOutlinedInput-input": {
      color: "#113E2E"
    },
  
    
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#113E2E"
      }
    }
  }
});
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    
  },
};
Modal.setAppElement('#root');

const Tabs = () =>{
  const navigate= useNavigate()

  const location = useLocation();
  const {t,i18n}=useTranslation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [toggleState, setToggleState] = useState(1);
  const [total,setTotal] = useState([])
  const [filterRadio, setFilterRadio] = useState('')
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const classes = useStyles();

  // const headers = JSON.parse(localStorage.getItem("headers")) ;
  // const cartId = JSON.parse(localStorage.getItem("cartId")) ;

  const {success} = useParams()
  const {fail} = useParams()

  const [cartnum, setCartnum] = useState();
  const initialValue = dayjs('10/05/2023');
    const [value1, setValue1] = useState(initialValue);

    const [modalIsOpen, setIsOpen] = useState(false);

  let url = `https://abio.am:8443`;

 
  let subtitle;
  function openModal() {
    navigate({pathname: '/success',
  })
    setIsOpen(true);
  }
  
  function afterOpenModal() {
 
    subtitle.style.color = '#0E0E0E';
    subtitle.style.fontSize = '24px';
    subtitle.style.textAlign = 'center';

  }

  function closeModal() {
    navigate({pathname: '/tabs',
  })
    setIsOpen(false);
  }

 
 
const [isActive, setIsActive] = useState(false);
const [accordion, setAccordion] = useState(null)
  const toggleaccord = (index) => {
     
    setAccordion(index);
    setIsActive(!isActive)

    
  };
  const [token, setToken] = useState('')

  const getChildData=(val) =>{
   
    setToken(val)
  }
  
  const handlefilter = (event) => {
    setFilterRadio(event.target.value);
 
    
    
  };
  const [mystate, setMyState] = useState("");
  const handlestateChange = (e) => {
    const { name, value } = e.target;
    setMyState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const [bookmarks, setBookmarks] = useState([])
  
  
  const [showResults, setShowResults] = useState('')

  const [selected, setSelect]=useState(false)

 
  const [lezu, setlezu] = useState('')
  let getActiveCountry = JSON.parse(localStorage.getItem('lng'))
  useEffect(() => {
    getActiveCountry?.filter((item) => {
      if(item.active) {
            return  setlezu(item.name)
         } 
         
    } )  
   
   
    
  }, [i18n.language])







  const fetchHeader = async () => {
 

    const response = await axios.get(`${url}/abio/public/cart/getCart`,{
    
  
      headers: {
        
        // 'X-CART-ID':  headers
      }
    }
    )
    setBookmarks( await response.data);  
  
  
  } 


  const onRemove = async  (prod) => {
  
    const response = await axios.post(`${url}/abio/public/cart/deleteProduct?productCode=${prod}`,{},
      {
      headers: {
        
        // 'X-CART-ID':  headers
      }
    }
    )
  
    
      };

const [orderId, setOrderId] = useState([])


      const {register,
        handleSubmit,
       
       reset,
       
        formState: { errors }} = useForm()


   
          
      const onSubmit = async (data) => {
         
    
        reset()
       
        // navigate('');
       
        
        //   axios.post('${url}/abio/public/cart/confirm?paymentType=CASH',{...data},
        //   {
        //   headers: {
            
        //     'X-CART-ID':  headers,
        //     'X-ORDER-ID': cartId ,
        //     'Authorization': `Bearer ${token}`
      
        //   }
        // }
        //   )
        
    
      };
             
      const onSubmit1 = async () => {
         
   
        // reset()
       
        // navigate('');
       
        
     axios.post(`${url}/abio/public/cart/confirm?paymentType=CASH`,{},
          
          {
          headers: {           
          //   'X-CART-ID':  headers,
          //   'X-ORDER-ID': cartId ,
            
          //  'X-JWT-TOKEN': token
     
          }
         }).then(el =>{
        
          setOrderId(el)
          setIsOpen(true);
           } ).then( el=>{
            
          // setTimeout(function() {
          //   localStorage.removeItem('cartId');
          //      localStorage.removeItem('headers');
          // }, 1000)
           }
            

           )
           
            
           
      };

      
//       const onSubmit2 = async (event) => {
         
//         // navigate('');
    
        
//     await axios.post(`banking.idram.am/Payment/GetPayment`,{
//       "EDP_LANGUAGE": "EN",
//       "EDP_REC_ACCOUNT" : 110002245 ,
//       "EDP_DESCRIPTION": "Abio",
//       "EDP_AMOUNT": bookmarks?.globalPrice,
//       "EDP_BILL_NO" : cartId
//      },
//      {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//         //  'X-CART-ID':  headers,
//         //   'X-ORDER-ID': cartId ,
            
//         //   'X-JWT-TOKEN': token
//       }
//      }
          
// ).then(el =>{
//         // console.log(el)
//         setTimeout(function() {
//           localStorage.removeItem('cartId');
//           localStorage.removeItem('headers');
//         }, 1000)
//         navigate('/https://banking.idram.am/Payment/GetPaymen');
//            } )          
           
//       };


const [resPrice, setResPrice] = useState('')
const [resId, setResId] = useState('')

const onSubmit2 =  () => {
//  const res = axios.post(`${url}/abio/public/cart/confirm?paymentType=IDRAM`,{},
          
//   {
//   headers: {           
  //   'X-CART-ID':  headers,
  //   'X-ORDER-ID': cartId ,
    
  //  'X-JWT-TOKEN': token

//   }
//  }).then(el =>{
//   setResPrice(el.data.totalPrice)
//   setResId(el.data.id)

  // setTimeout(function() {
  //   localStorage.removeItem('cartId');
  //      localStorage.removeItem('headers');
  // }, 1000)
   
     axios.post(`https://banking.idram.am/Payment/GetPayment`,{
      "EDP_LANGUAGE": "EN",
      "EDP_REC_ACCOUNT" : 110002245 ,
      "EDP_DESCRIPTION": "Abio",
      "EDP_AMOUNT": 1545,
      "EDP_BILL_NO" : 555
     },{
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
     })
     navigate('');
      
        


      }

      // return (
      //   <form  action="https://banking.idram.am/Payment/GetPayment" method="POST" >  
       
      
      //   <input type="hidden" name="EDP_LANGUAGE" value="EN"  />
      //   <input type="hidden" name="EDP_REC_ACCOUNT" value="110002245"/>
      //   <input type="hidden" name="EDP_DESCRIPTION" value="ABIO" />
      //   <input type="hidden" name="EDP_AMOUNT" value={resPrice}/>
      //   <input type="hidden" name="EDP_BILL_NO" value={resId} />
      //   <input type="submit" className="onSubmit2"  value = "Վճարել " />
      //    </form>
      
      // )



      const toggleCont = ()=>{
        if(accordion === 1) onSubmit()
        // else if(accordion === 2) onSubmit2()
        else if(accordion ===2){
          return (
            <form  action="https://banking.idram.am/Payment/GetPayment" method="POST" >  
 

            <input type="hidden" name="EDP_LANGUAGE" value="EN"  />
            <input type="hidden" name="EDP_REC_ACCOUNT" value="110002245"/>
            <input type="hidden" name="EDP_DESCRIPTION" value="ABIO" />
            <input type="hidden" name="EDP_AMOUNT" value="555"/>
            <input type="hidden" name="EDP_BILL_NO" value="44545" />
            <input type="submit" className="continuShop"    value = "Վճարել " />
             </form>
          )
        }
        else  onSubmit1()
        
      }


      const removePromo = async  (prom) => {
        
        const response = await axios.post(`${url}/abio/public/cart/removePromocode?promoCode=${prom}`,{},
          {
          headers: {
            
            // 'X-CART-ID':  headers
          }
        }
        ).then(res => console.log(res)).catch(er =>console.log(er))

    
        
          };

 

      const Change = async  (prod, qu) => {

        
        if(qu<=0) {
            qu = 1;
          }else {
        const response = await axios.post(`${url}/abio/public/cart/updateProduct?productCode=${prod}&quantity=${qu}`,{},
          {
          headers: {
            
            // 'X-CART-ID':  headers
          }
        }
        ).then(el=>setBookmarks(el.data.quantity))
      
      }
        
          };

   const PromoCode = async ()=>{
    

    const response = await axios.post(`${url}/abio/public/cart/applyPromocode?promoCode=${showResults}`,{},
    {
    headers: {
      
      // 'X-CART-ID':  headers
    }
  }
  ).then(res => console.log(res)).catch(er =>console.log(er))
  

   }       


  useEffect(  () => {
    fetchHeader()
  
    
  }, [Change,onRemove]);

// console.log(bookmarks)



const onblur=()=>{
  setSelect(!selected)
}
const getInput = (e) => {


  setShowResults(e.target.value) ;
 
  

};



  
const onfocus=() =>{
  setSelect(selected)
}



  return  (
    <>
      <div className="continner">
      <p className="cardText">{t("cart.yourCart")}</p>
      </div>
    <div className="cont">
        <div className="continner">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs1   " : "tabs  "}
          onClick={() => toggleTab(1)}
        >
          1.{t("cart.yourCart")}
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs": "tabs"} 
          onClick={() => toggleTab(2)}
        >
          2. {t("cart.information")}
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs2  " : "tabs "}
          // onClick={() => toggleTab(3)}
        >
          3.{t("cart.payment")}
        </button>

        <div className="lineborder"></div>
       
      </div>

      <div className="content-tabs">
        
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
        <div className="cont_text" >
         <div className="first_cont">
            <div className="contHeader">


   
    
            <table>
                  
                 <thead>
                       <tr>
                       <th>{t("cart.code")}</th>
                       <th>{t("cart.details")} </th>
                       <th>{t("cart.price")}</th>
                       <th>{t("cart.quantity")}</th>
                     </tr>
                </thead>
                <tbody>
                   
                    { bookmarks?.cartProductDTOList?.length !==0 ? bookmarks?.cartProductDTOList?.map((el,i)=>{
 
                            return (
                              <>
                     <tr key={el.productCode}>
                           <td >
                      {el.productCode}
                        </td>
                        <td className="spacial_cont">
                          
                           
                            <img src={`${url}/abio/public/files?productCode=${el.productCode}&fileName=${el?.picturePath}`}  alt="" />
                           
                            <div>
                                <p className="flaxible">{t("cart.code")}: {el.productCode}</p>
                          

                            <p>{el?.[`name_${lezu}`]} </p>
                            <div className="span_block">
                            {/* {noCart.find((x) =>  el?.productCode === x?.productCode)?.color ? <> <p>Color:</p>

<p className="span"></p></> : null} */}
                                
                                <img src={close} className="closeimg flaxiblemob" onClick={()=>onRemove(el.productCode)} alt="close" />
                            </div>
                            <p className="flaxible myprice"> {el.discountPrice?.toLocaleString()} AMD</p>
                            <div className="spacial_cont flaxiblemob">

                            <span className="card-minus" onClick={()=>Change(el.productCode, el.quantity -1)} >-</span>
                           
                            <p >{el.quantity<=0 ? el.quantity=1: el.quantity}</p>

                            <span className="card-plus" onClick={()=>Change(el.productCode, el.quantity +1)} >+</span>
                          
                            </div>
                            </div>
                        </td>
                        <td className="forMobile">{el.discountPrice?.toLocaleString()} AMD</td>
                        <td className="forMobile">  <div className="spacial_cont">
                       
                            <span className="card-minus" onClick={()=>Change(el.productCode, el.quantity -1)}>-</span>
                           
                            <p>{el.quantity<=0 ? el.quantity=1: el.quantity}</p>
                           
                            <span className="card-plus"  onClick={()=>Change(el.productCode, el.quantity +1)}>+</span>
                            <img src={close} className="closeimg " onClick={()=>onRemove(el.productCode)} alt="close" />
                            </div>
                            
                            </td>
                            
          </tr>
                              </>
                            )

                            }): <p className="noTable">{t("cart.noItem")}</p>}  
                       
                  
                
                </tbody>
             
             </table> 

             
             <div className="payleft">
            <div className="paytitle">
             <p>{t("cart.total")}</p>
             <p>{total.productCode} {bookmarks?.globalDiscountPrice?.toLocaleString()} AMD</p>
            </div>
           <div className="line"></div>
            <div className="deliver">
                <p>{t("cart.delivery")}:</p>
                <span>{bookmarks?.deliveryPrice?.toLocaleString()} AMD</span>
            </div>
            <div className="totalPay">
            <p>{t("cart.total")}</p>
             <p>{total.price}{bookmarks?.globalPrice?.toLocaleString()} AMD</p>
            </div>
            <div className="promoCode">
     
        <TextField
    className={classes.root }
        label={t("cart.promo")}
        type='search'
        id='inputAdornedEnd '
         onChange={getInput}
       
        
         onBlur={onblur}
         onFocus={onfocus}
        InputProps={{
          readOnly: false,
          className:  'myclass',
          endAdornment: (
            bookmarks?.cartProductDTOList?.[0]?.promocode == null ? 
            (<button type="text" onClick={PromoCode  }  >{t("cart.apply")}</button>)  
            : <div className="checkedprom"> <img src={check} alt="img" />
             <span>{bookmarks?.cartProductDTOList?.[0].promocode}</span><img width='15px' onClick={()=>removePromo(bookmarks?.cartProductDTOList?.[0].promocode)} className="hidepromo"  src={close}/></div> 
        
        
          ),
        }}
     
      />

         
            </div>
            <div className="lastbtn">
              
                <button onClick={() => toggleTab(2)} > {t("cart.next")}</button>
               
            </div>
          
                </div>
            </div>
       
      
         </div>
         
         
          </div>
        </div>
    
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
         <DeliverInfo toggleTab = {toggleTab} totalPrice={bookmarks?.globalPrice} getChildData = {getChildData} priceGlob={bookmarks?.globalDiscountPrice} showpromo ={bookmarks?.cartProductDTOList?.[0]?.promocode}/>
          
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
            
          <div className="contLast">
       
            
  <div>
              <div className="cardContent" 
              // onClick={() => toggleaccord(1)} 
              >
                <input type='radio' id = "paym"
                 checked={filterRadio === '10'}
                 value ={10}
                 onChange={handlefilter}
                //  name="paymant"  
                  />
                <label htmlFor="paym">
                <img src={bankCard} alt="card" />
                <p>{t("cart.bank")}</p>
                </label>
                </div>
                <div className={accordion === 1 ? "accord accord-content" : "accord"}>
                  
                  <div className="contCard">
                  <form id="newsletterForm" onSubmit={handleSubmit(onSubmit)} >
                  <div>

               
                  <div  className="payInput">
                  <TextField 
                     className={classes.root}
                        label={t("cart.cardNumber")}
                        variant="outlined" 
                        autoComplete="off"   
                        inputProps={{ maxLength: 19, minLength: 16} } 
        
                        value={cartnum} 
                        type="tel"          
                        placeholder="XXXX XXXX XXXX XXXX"      
                        onInput={(e) => {
                          const target = e.target;
                          target.value = e.target.value.replace(/[^0-9]/g, "").replace(/(.{4})/g, '$1 ').trim();
                      }}
                       
                        {...register("cardNumber", {required: t("cardNumber")})}
                        error={!!errors?.cardNumber}
                        helperText={errors?.cardNumber ? errors?.cardNumber.message : null}
                      
                        />
                        </div>
                  <div  className="payInput" >
                  <TextField
                  className={classes.root}
                  label={t("cart.nameSurname")}
                  variant="outlined" 
                  autoComplete="off"   
                  {...register("full_name", {required: t("cart.errfullname")})}
                  error={!!errors?.full_name}
                  helperText={errors?.full_name ? errors?.full_name.message : null}
    
    />
                  </div>
                  <div  className="payInput" >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker id="datapicker "
className={classes.root}
 
views={['year', 'month']}
label={t("cart.expiration")}
variant="outlined" 

{...register("year", {required: t("cardNumber")})}
error={!!errors?.year}
helperText={errors?.year ? errors?.year.message : null}
onChange={(newValue) => {
setValue1(newValue);
}}
renderInput={(params) => <TextField {...params} helperText={null} />}
/>


</LocalizationProvider>

<TextField 
id="datacode"
className={classes.root}
label={t("cart.security")} 
variant="outlined" 
autoComplete="off"   
inputProps={{ maxLength: 3} } 
onInput={(e) => {
  const target = e.target;
  target.value = e.target.value.replace(/[^0-9]/g, "");
}}

{...register("cvv", {required: t("cardNumber")})}
error={!!errors?.cvv}
helperText={errors?.cvv ? errors?.cvv.message : null}

/>

                  </div>
                </div>
                </form>
                <div className="master">
                <img src={master}   alt="card" />
                </div>
                </div>
                  </div>
                 
             
              {/* <a href="https://www.idram.am/" target="_blank" className="idram"> */}
                <div className="cardContent" onClick={() => toggleaccord(2)}>
              
              <input type='radio' id="idram" 
              checked={filterRadio === '20'}

              value ={20}
              onChange={handlefilter}
              // name="paymant"
              />
              <label htmlFor="idram">
               <img src={idram} alt="idram" />
               <p>{t("cart.idram")}</p>
               </label>
              </div>
              {/* </a> */}
              
            <div className={accordion === 2 ? "accord accord-content accord-ss" : "accord"}>
         
            <div className="contCard">

                 <div>
                 {/* onSubmit={handleSubmit(onSubmit2)} > */}

                 <form  id="form1"  action="https://banking.idram.am/Payment/GetPayment" method="POST" >  
 

  <input type="hidden" name="EDP_LANGUAGE" value="EN"  />
  <input type="hidden" name="EDP_REC_ACCOUNT" value="110002245"/>
  <input type="hidden" name="EDP_DESCRIPTION" value="ABIO" />
  <input type="hidden" name="EDP_AMOUNT" value={resPrice}/>
  <input type="hidden" name="EDP_BILL_NO" value={resId} />
  {/* <input type="submit" className="continuShop"    value = "Վճարել " /> */}
   </form>
  

</div>
{/* <div className="master">
<img src={master}   alt="card" />
</div> */}
</div>
                 

                  </div>
              <div className="cardContent" onClick={() => toggleaccord(3)}>
              <form onSubmit={handleSubmit(onSubmit1)} >
                <label htmlFor="pay">
              <input type='radio' id='pay' 
               checked={filterRadio === '30'}
              value ={30}
              onChange={handlefilter}
              // name="paymant"
              />
             
              <img src={pay} alt="pay" />
              <p>{t("cart.cash")}</p>
              </label>
              </form>
              </div>
              <div className={accordion === 3 ? "accord accord-content" : "accord"}>
            
                  </div>
              </div>    
<div className="payleft">
            <div className="paytitle">
             <p>{t("cart.total")}</p>
             <p>{total.productCode} {bookmarks?.globalDiscountPrice?.toLocaleString()} AMD</p>
           
            </div>
           <div className="line"></div>
            <div className="deliver">
                <p>{t("cart.delivery")}: </p>
                <span>{bookmarks?.deliveryPrice?.toLocaleString()} AMD</span>
               
            </div>
            <div className="discount">
                <p>{t("cart.discount")}: </p>
                <span> {bookmarks?.promoCodeDiscount?.toLocaleString()} AMD</span>
            </div>
            <div className="totalPay">
            <p>{t("cart.total")}</p>
             <p>{bookmarks?.globalPrice?.toLocaleString()} AMD</p>
            </div>
            <div className="promoCode">
          

       <TextField
    className={classes.root }
        label={t("cart.promo")}
        type='search'
        id='inputAdornedEnd '
         onChange={getInput}
       
        
         onBlur={onblur}
         onFocus={onfocus}
        InputProps={{
          
      
          className:  'myclass',
          endAdornment: (
           bookmarks?.cartProductDTOList?.[0]?.promoCode == null ? 
      
        (<a className="spanforCheck"  onClick={PromoCode  }  >{t("cart.apply")}</a>)  
        : <div className="checkedprom"> <img src={check}  /> <span>{bookmarks?.cartProductDTOList?.[0].promoCode}</span>
        <img width='15px' onClick={()=>removePromo(bookmarks?.cartProductDTOList?.[0].promoCode)} className="hidepromo"  src={close}/></div> 
    
    
      ),
        }}
     
      />
 
         
            </div>
            <div className="lastbtn">
            {accordion=== 1 &&
              <button  
                //  form="newsletterForm"
                  type="submit"> {t("cart.next")}</button>
             }
             {accordion=== 3 &&
              <button  onClick={toggleCont} 
                //  form="newsletterForm"
                  type="submit"> {t("cart.next")}</button>
             }
                {accordion=== 2 &&
              <button  
                 form="form1"
                  type="submit"> {t("cart.next")}</button>
             }
                
            </div>
                </div>
               
                </div> 
                {/* </form> */}
                {/* <Link to="/success" >
                <button onClick={openModal}>Success</button></Link>
                <Link to="/fail" >
                <button >Fail</button></Link> */}
  <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={customStyles}
         
        >
          <div className='modalCont'>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}> <input type="checkbox" className="modalcheck" checked/> Thank You</h2>
          <button className="closeModal" onClick={closeModal}><img src={close}  /></button>
          </div>
          <div className="modalText">Your order is confirmed! Order <span>{orderId?.id}</span> 
           A confirmation e-mail has been sent to <span>{orderId?.email}</span>  </div>
    <Link to='/'>
      <button className="continuShop">Continue Shopping</button></Link>
          </Modal>        
         
             
       
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export {Tabs};