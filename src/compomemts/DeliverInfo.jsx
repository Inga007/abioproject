
import  React, { useEffect,  useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FormHelperText from '@mui/material/FormHelperText';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import check from '../images/check.png'
import close from '../images/close.png'
import { useForm ,Controller} from 'react-hook-form';
import {useNavigate} from 'react-router-dom'
import { useTranslation } from "react-i18next";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import InputAdornment from "@material-ui/core/InputAdornment";

// import { DateValidationError } from '@mui/x-date-pickers/models';




import MuiPhoneNumber from 'mui-phone-number';
import {
  parsePhoneNumber,
  isValidPhoneNumber,
  getNumberType,
  validatePhoneNumberLength,
} from 'libphonenumber-js';

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


const initialValue = dayjs();

function DeliverInfo({toggleTab, priceGlob,totalPrice, showpromo, getChildData }) {
  const {t,i18n}=useTranslation()
  const [region, setRegion] = useState([])
 
  // const headers = JSON.parse(localStorage.getItem("headers")) ;
  const [selected, setSelect]=useState(false)
  // const initialValue = dayjs();
  const [valuee, setValue] = useState(dayjs());
  const [selectedCantry, setselectedCantry] = useState('');
  const [selectTime, setselectTime] = useState('');
  const navigate = useNavigate();
  const [showResults, setShowResults] = useState('')
  
  let url = `https://abio.am:8443`;
  const fileInput = React.createRef();

  const [phone, setPhone] = useState(374)
  
  const [lezu, setlezu] = useState('')
  const [token, setToken] = useState('')


  const [error, setError] = useState(null);

 
  
  const ALPHA_NUMERIC_DASH_REGEX = /^[a-zA-Zա-ֆԱ-Ֆаа-яА-Я\s\-]+$/;



  // const ALPHA_NUMERIC_DASH_REGEX  = /\p{Letter}/gu;
  

  const phoneRegExp = /(((\(\d{3}\) ?)|(\d{3}-)|(\d{3}\.))?\d{3}(-|\.)\d{4})/g; 

  
 

 

  let getActiveCountry = JSON.parse(localStorage.getItem('lng'))
  useEffect(() => {
    getActiveCountry?.filter((item) => {
      if(item.active) {
            return  setlezu(item.name)
         } 
         
    } )  
   
   
    
  }, [i18n.language])

  const [input, setInput] = useState(null);
  function handlePhoneChange(e) {
    setInput(e.target.value);
  }

 
  const handleChange = (event ) => {
      
    setselectedCantry(event.target.value);
    
    
  };
  const handletimeChange = (event ) => {
  
    setselectTime(event.target.value);
    
    
  };

  const handleDayChange = (some ) => {
  
    setValue(some);
    
    
  };
  const handleDataChange = (event ) => {
  
      setValue(event.target.value);
      
      
    };


  const cartImage = async ()=>{
    await axios.get(`${url}/abio/public/cart/getDeliveryRegions`,  {
    headers: {
      
    // 'X-CART-ID':  headers
    }
}).then(response => setRegion(response.data));

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

   

   const deliverPrice = async  () => {
 
  if(selectedCantry !== '' || selectedCantry !== null){
      const response = await axios.post(`${url}/abio/public/cart/addDeliveryRegion?deliveryRegionId=${selectedCantry}`,{},
      {
      headers: {
        
        // 'X-CART-ID':  headers
      }
    }
    )
  
  }

  
    
    
      };
   

 useEffect(() => {
  deliverPrice()
  cartImage()
  
},[selectedCantry])



 
     const {
      register,
      handleSubmit,
      control,
      reset,
    
     
      formState: { errors }} = useForm()
    
      const onSubmit = async (data) => {
    
        toggleTab(3)
        reset()
       
        navigate('');
        const baseurl = `${url}/abio/public/cart/user/initiate`
        const response = await axios.post(baseurl,{...data},
        {
        headers: {
          
          // 'X-CART-ID':  headers
        }
      }
      ).then(el => {
       
        //  localStorage.setItem("cartId", JSON.stringify(el.headers['x-order-id'])) 
        // // setOrderId(el.headers['x-order-id'])
        //   setToken(el.headers['x-jwt-token'])
        //   getChildData(el.headers['x-jwt-token']) 
        
        
  
      })
    
      };
  
      
      const classes = useStyles();
      const PromoCode = async ()=>{
        
       
        const response = await axios.post(`${url}/abio/public/cart/applyPromocode?promoCode=${showResults}`,{},
        {
        headers: {
          
          // 'X-CART-ID':  headers
        }
      }
      ).catch(er =>console.log(er))
      
    
       }       
    

      const onblur=()=>{
        setSelect(!selected)
      }
      const getInput = (e) => {
      
      
        setShowResults(e.target.value) ;
              
      
      };
         
        
      const onfocus=() =>{
        setSelect(selected)
      }

      const handlePhoneCh = event => {
        const result = event.target.value.replace(/\D/g, '');
    
        setPhone(result);
      };

  
  return  (
    <>
    <div  className='deliverinfo'>
    
    <div className='formblock'>
    <h2>{t("cart.address")} </h2>
        <form onSubmit={handleSubmit(onSubmit)}  >
        <div>
            <div className="inputBlock">
              <div className="inputDivs">
            <TextField  sx={{ minWidth: 250 }} 
           variant="outlined"
            label={t("cart.name")}
           autoComplete="off"  
           className={classes.root}
           onKeyDown={(event) => {
            if (!ALPHA_NUMERIC_DASH_REGEX.test(event.key)) {
              event.preventDefault();
            }
          }}
         

            // {...register("first_name", {required: t("cart.errName")})}
            error={!!errors?.first_name}
            helperText={errors?.first_name ? errors?.first_name.message : null}
          
                    
              />
              </div>
              <div className="inputDivs">
                
            <TextField sx={{ minWidth: 250 }}
            className={classes.root}
              label={t("cart.surname")} 
              variant="outlined" 
              autoComplete="off"   
              onKeyDown={(event) => {
                if (!ALPHA_NUMERIC_DASH_REGEX.test(event.key)) {
                  event.preventDefault();
                }
              }}
              
              // {...register("last_name", {required: t("cart.errSurname")})}
              error={!!errors?.last_name}
              helperText={errors?.last_name ? errors?.last_name.message : null}
              />
</div>

            </div>

            <div className="inputBlock">
<div className="inputDivs">


            <TextField
             sx={{ minWidth: 250 }} 
             label={t("cart.phone")}  
             className={classes.root}
             variant="outlined"
             autoComplete="off"  
            //  type="number"
          
            // defaultValue="+"
         
            placeholder="(+374) -- --- --- "  
          
           
              // {...register("phone_number", {required: t("cart.errPhone"),
              // minLength: 11,
              //   // pattern:  /^\+?[0-9]{3}-?[0-9]{8,12}$/
              //   // pattern: /[^+{1}|^0-9]/g
                
              //  })}
               value={'+'+ phone}
               onChange={handlePhoneCh}
              //  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'}} 
              error={!!errors?.phone_number}
              helperText={errors?.phone_number ? errors?.phone_number.message : null}
              
              
              />
                

              </div>
              <div className="inputDivs">
              <TextField 
               sx={{ minWidth: 250 }}
               className={classes.root}
                label={t("cart.email")}  
                placeholder={t("cart.email")}  
                variant="outlined" 
                autoComplete="off"   
                // {...register("email", {required: t("cart.errEmail")  ,
                //   pattern: {
                //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                //     message: 'Invalid email type'
                   
                //   }
                // }
                // )}
                error={!!errors?.email}
                helperText={errors?.email ? errors?.email.message : null} />
              
            </div>
            </div>
            <div className="inputBlock">
            <div className="inputDivs">
            <FormControl fullWidth  className={classes.root} id = 'citySelect'
            // {...register("city",{ required: t("cart.errCity")  })  } 
            >
                <InputLabel  >{t("cart.city")} </InputLabel>
                <Select sx={{ minWidth: 250 }}
                 
                    value={selectedCantry}
                    name="city"
                    label={t("cart.city")}
                    onChange={handleChange}
                                  
                    error={!!errors?.address}
                                
                >

                  {
                    region.map((item,i)=>{
                      return(
                        <MenuItem value={item.id} key={i}>
                        {item[`name_${lezu}`]}
                        </MenuItem>
                      )
                    })
                  }
                  
                </Select>
                <FormHelperText
                 error={!!errors?.city}
       
                 >{errors?.city ? errors?.city.message : null}</FormHelperText>
                </FormControl>
                </div>
                <div className="inputDivs">
                <TextField 
                 sx={{ minWidth: 250 }} 
                 className={classes.root}
                 label={t("cart.addressName")} 
                 variant="outlined" 
                  autoComplete="off"   
                // {...register("address", {required: t("cart.errAddressName")})}

                error={!!errors?.address}
                helperText={errors?.address ? errors?.address.message : null}
                 />
             </div>
            </div>
            <h2>{t("cart.info")} </h2>
            <div className="inputBlock">
            
          
              
            <div className="inputDivs">
            {/* <Controller
              name="datatext"
              control={control}
          
              rules={{ required: true }}
              render={({ field: { ref, onChange,  ...field } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs} name = 'datatext'>
                <DatePicker
            
                sx={{ minWidth: 250 }}
                innerRef={ref}
                value={valuee}   
           
                {...register("datatext",
                { required: t("cart.data")  }
                ) }
               
             onChange={handleDayChange}
       
            
             
             aria-invalid={errors.datatext ? "some" : "false"}
                  disablePast
                 
                  className={classes.root}
                 label={t("cart.date")} 
                
                 {...field}
                 // defaultValue={dayjs('2022-07-17')}
                 // onError={(newError) => setError(newError)}
                 slotProps={{
                   textField: {   
                   
                  
                     helperText: errors?.data ? errors?.data.message : null,
                   },
                 }}
             
                 showDaysOutsideCurrentMonth
                 // renderInput={(params) => <TextField  
                 //    helperText={errors?.data ? errors?.data.message : null} {...params} 
                
                 // />}
                 
             />
                </LocalizationProvider>
              )}
            /> */}
            <Controller
    name="data"
    control={control}
    defaultValue={null}
    render={({
        field: {onChange, value},
        fieldState: { error }
    }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}  >
            <DatePicker 
                  label={t("cart.date")} 
                format="DD/MM/YYYY"
                value={dayjs(value)}  
                
                control={control}
                   disablePast
                   showDaysOutsideCurrentMonth
                 {...register("day",
                { required: t("cart.errData")  }
                ) }
                onChange={event => onChange(event.$d.toLocaleDateString())}
                slotProps={{ textField: { error: !!error, helperText: errors?.data ? errors?.data.message : null } }}
            />
        </LocalizationProvider>
    )}
/>
         
               
          
                </div>
                <div className="inputDivs">
                <TextField id="select" label={t("cart.time")} value={selectTime}
                 sx={{ minWidth: 250 }} 
                //  {...register("time", { required: t("cart.time")  }) }
                 className={classes.root} 
                 onChange={handletimeChange}
                 error={!!errors?.time}
                helperText={errors?.time ? errors?.time.message : null}
               select>
                        <MenuItem value="11:00-12:00">11:00-12:00</MenuItem>
                        <MenuItem value="20">12:00-13:00</MenuItem>
                        <MenuItem value="30">13:00-14:00</MenuItem>
                        <MenuItem value="40">14:00-15:00</MenuItem>
                        <MenuItem value="50">15:00-16:00</MenuItem>
                        <MenuItem value="60">16:00-17:00</MenuItem>
                        <MenuItem value="70">17:00-18:00</MenuItem>
                        <MenuItem value="80">18:00-19:00</MenuItem>
                       

                      </TextField>
                      </div>
                
                 
           
                
            </div>
            <div className="inputBlock">
            <div className="inputDivs">
            <TextField  sx={{ minWidth: 250 }} 
            {...register("comment")}
           autoComplete="off"  
           className={classes.root}
           placeholder={t("cart.comment")}
           minRows={3}
           multiline
                    
              />
           
           </div>
         
            
            </div>
          </div>
        
         
            <div className="payleft">
            <div className="paytitle">
             <p>{t("cart.total")} </p>
             <p>{priceGlob?.toLocaleString()} AMD</p>
            </div>
           <div className="line"></div>
           <div className="deliver">
                <p>{t("cart.delivery")}: </p>
                <span> {region?.find((x) => x.id == selectedCantry  )?.price?.toLocaleString() }  AMD</span>
            </div>
            
            <div className="totalPay">
            <p>{t("cart.total")} </p>
             <p>{totalPrice?.toLocaleString()} AMD</p>
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
            showpromo == null ? 
            (<a className="spanforCheck"  onClick={PromoCode  }  >{t("cart.apply")}</a>)  
            : <div className="checkedprom"> <img src={check}  /> 
            <span>{showpromo}</span><img width='15px' onClick={()=>removePromo(showpromo)} className="hidepromo"  src={close}/></div> 
        
        
          ),
        }}
     
      />

         
            </div>
            <div className="lastbtn">
          
                <button type="submit"  > {t("cart.next")}</button>
            
            </div>
                </div>

        </form>

    </div>
    
    </div>
   
    </>
  )
}

export default DeliverInfo
