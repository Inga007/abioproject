import "../css/contact.css"
import "../responsive/contact.css"
import contactPhone from "../images/contactPhone.svg"
import contactLocation from "../images/contactLocation.svg"
import contactEmail from "../images/contactEmail.svg"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import map from "../images/map.png"
import { PinkArea } from "./PinkArea"
import { t } from "i18next"
import { useTranslation } from "react-i18next";
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom'


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

const Contact=({toggleTab})=>{
    const {t}=useTranslation()
    const navigate = useNavigate();

    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    const {register,
        handleSubmit,
        reset,
       
        formState: { errors }} = useForm()
    const classes = useStyles();
    const onSubmit = (data) => {
        console.log(data)
        toggleTab(3)
        reset()
        navigate('');
        
         
    
      };
    return(
        <>
         <div className="container">

            <div className="gift__top">
            <p>{t("giftCard.home")} /<span className="buyGift__topGreen">{t("contact.contact")}</span> </p>
            </div>
      </div>
        <div className="contacts">

        <p className="global__contact">{t("contact.contact")}</p>
        <div className="contact__info">
             <div className="contact__info-block">
                <div className="contact__info-icon">
                    <img src={contactPhone} alt="contactPhone" />
                    <a href="tel:+37499520223">+374 99 520223</a>
                    <p>(WhatsApp, Viber)</p>
                </div>
                <div className="contact__info-icon">
                <img src={contactLocation} alt="contactLocation" />
                <a>{t("contact.location")}</a>
                </div>
                <div className="contact__info-icon">
                <img src={contactEmail} alt="contactEmail" />
                <a href = "mailto: info@abio.am">info@abio.am</a>

                </div>
             </div>
             <div className="contact__info-input">
             <form onSubmit={handleSubmit(onSubmit)}  >
                <div className="contact__block">
              <TextField 
               sx={{ minWidth: 250 }}
               className={classes.root}
                label={t("contact.fullName")}  
                placeholder={t("contact.fullName")}  
                variant="outlined" 
                autoComplete="off"   
                {...register("firstName", {required: t("cart.errName")})}
                error={!!errors?.firstName}
                helperText={errors?.firstName ? errors?.firstName.message : null}
                />
              
                </div>
                <div className="contact__block">
              <TextField 
               sx={{ minWidth: 250 }}
               className={classes.root}
                label={t("contact.email")}  
                placeholder={t("contact.email")}  
                variant="outlined" 
                autoComplete="off"   
                {...register("email", {required: t("cart.errEmail")  ,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Invalid email type'
                   
                  }
                }
                )}
                error={!!errors?.email}
                helperText={errors?.email ? errors?.email.message : null} />
              
                </div>
                <div className="contact__block">
              <TextField 
               sx={{ minWidth: 250 }}
               className={classes.root}
                label={t("contact.phone")}  
                placeholder={t("contact.phone")}  
                variant="outlined" 
                autoComplete="off"   
                {...register("phone", {required: t("cart.errPhone")  ,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Please enter number'
                   
                  }
                }
                )}
                error={!!errors?.phone}
              helperText={errors?.phone ? errors?.phone.message : null} />
              
                </div>
                <div className="contact__block">
            <TextField  sx={{ minWidth: 250 }} 
          
           autoComplete="off"  
           className={classes.root}
           placeholder={t("contact.comment")}
           minRows={3}
           multiline
           {...register("comment", {required: t("cart.errComment")  ,
           pattern: {
             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
             message: 'Please add a comment'
            
           }
         }
         )}
         error={!!errors?.comment}
       helperText={errors?.comment ? errors?.comment.message : null}         
              />
           
           </div>
                 <div  className="contact__btn">
                    <button type="submit">{t("contact.send")}</button>
                 </div>
                </form>
               
                 </div>
             
        </div>
        <div className="map__contact">
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12178.577477482393!2d44.5980607!3d40.2614342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa1fb02482283%3A0x339ad77fd03f3065!2sABIO%20Garden%20Center!5e0!3m2!1shy!2sam!4v1677585387911!5m2!1shy!2sam" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>


                </div>
        </div>
                 
                <div className="bottom">
                <PinkArea/>

            </div>
        </div>

       
        </>
    )
}

export {Contact}