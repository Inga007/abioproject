import { useState } from "react";
import { useTranslation } from "react-i18next";
import down from "../images/down.png"

const Return=()=>{
    const {t}=useTranslation()
    const [active,setActive]=useState("OnePayment")
    const [activePayment,setActivePayment]=useState(false)
    const [activeBigPayment,setActiveBigPayment]=useState(false)
    const [showActive,setShowActive]=useState(true)
    const paymentData = [
    
        {
            id: 1,
            name:t("PaymentMethod.yerevan"),
            price:"1500"
        },
        {
            id: 2,
            name:t("PaymentMethod.3rdVillage"),
            price:"2500"
        },
        {
            id: 3,
            name:t("PaymentMethod.4thVillage"),
            price:"2500"
        },
        {
            id: 4,
            name:t("PaymentMethod.abovyan"),
            price:"1200"
        },
        {
            id: 5,
            name:t("PaymentMethod.aghveran"),
            price:"7500"
        },
        {
            id: 6,
            name:t("PaymentMethod.airport"),
            price:"3000"
        },
        {
            id: 7,
            name:t("PaymentMethod.akhuryan"),
            price:"14500"
        },
        {
            id: 8,
            name:t("PaymentMethod.alaverdi"),
            price:"19500"
        },
        {
            id: 9,
            name:t("PaymentMethod.amasia"),
            price:"17500"
        },
        {
            id: 10,
            name:t("PaymentMethod.aparan"),
            price:"6500 "
        },
        {
            id: 11,
            name:t("PaymentMethod.aramus"),
            price:"2500"
        },
        {
            id: 12,
            name:t("PaymentMethod.ararat"),
            price:"6500"
        },
        {
            id: 13,
            name:t("PaymentMethod.argavand"),
            price:"2500"
        },
        {
            id: 14,
            name:t("PaymentMethod.arindzh"),
            price:"1200"
        },
        {
            id: 15,
            name:t("PaymentMethod.armavir"),
            price:"5500"
        },
        {
            id: 16,
            name:t("PaymentMethod.artashat"),
            price:"3900"
        },
        {
            id: 17,
            name:t("PaymentMethod.artik"),
            price:"11500"
        },
        {
            id: 18,
            name:t("PaymentMethod.arzni"),
            price:"1200"
        },
        {
            id: 19,
            name:t("PaymentMethod.ashotsk"),
            price:"18500"
        },
        {
            id: 20,
            name:t("PaymentMethod.ashtarak"),
            price:"3200"
        },
        {
            id: 21,
            name:t("PaymentMethod.avshar"),
            price:"5800"
        },
        {
            id: 22,
            name:t("PaymentMethod.berd"),
            price:"22000"
        },
        {
            id: 23,
            name:t("PaymentMethod.berddzor"),
            price:"29800"
        },
        {
            id: 24,
            name:t("PaymentMethod.bjni"),
            price:"4500"
        },
        {
            id: 25,
            name:t("PaymentMethod.byurakan"),
            price:"4500"
        },
        {
            id: 26,
            name:t("PaymentMethod.byureghavan"),
            price:"1200"
        },
        {
            id: 27,
            name:t("PaymentMethod.chambarak"),
            price:"13500"
        },
        {
            id: 28,
            name:t("PaymentMethod.charentsavan"),
            price:"3500"
        },
        {
            id: 29,
            name:t("PaymentMethod.dilijan"),
            price:"10800"
        },
        {
            id: 30,
            name:t("PaymentMethod.dzoraghbyur"),
            price:"2200"
        },
        {
            id: 31,
            name:t("PaymentMethod.echmiadzin"),
            price:"3500"
        },
        {
            id: 32,
            name:t("PaymentMethod.garni"),
            price:"3500"
        },
        {
            id: 33,
            name:t("PaymentMethod.gavar"),
            price:"11500"
        },
        {
            id: 34,
            name:t("PaymentMethod.geghard"),
            price:"4500"
        },
        {
            id: 35,
            name:t("PaymentMethod.goris"),
            price:"27500"
        },
        {
            id: 36,
            name:t("PaymentMethod.gyumri"),
            price:"13800"
        },
        {
            id: 37,
            name:t("PaymentMethod.hrazdan"),
            price:"5500"
        },
        {
            id: 38,
            name:t("PaymentMethod.ijevan"),
            price:"14500"
        },
        {
            id: 39,
            name:t("PaymentMethod.jermuk"),
            price:"18500"
        },
        {
            id: 40,
            name:t("PaymentMethod.jrvezh"),
            price:"1500"
        },
    
    
        {
            id: 41,
            name:t("PaymentMethod.kadzharan"),
            price:"38000"
        },
        {
            id: 42,
            name:t("PaymentMethod.kapan"),
            price:"33800"
        },
        {
            id: 43,
            name:t("PaymentMethod.kasakh"),
            price:"2200"
        },
        {
            id: 44,
            name:t("PaymentMethod.khndzoresk"),
            price:"29500"
        },
        {
            id: 45,
            name:t("PaymentMethod.lusakert"),
            price:"2500"
        },
        {
            id: 46,
            name:t("PaymentMethod.maralik"),
            price:"11000"
        },
        {
            id: 47,
            name:t("PaymentMethod.martuni"),
            price:"14500"
        },
        {
            id: 48,
            name:t("PaymentMethod.masis"),
            price:"3200"
        },
        {
            id: 49,
            name:t("PaymentMethod.meghradzor"),
            price:"7800"
        },
        {
            id: 50,
            name:t("PaymentMethod.meghri"),
            price:"44000"
        },
    
    
        {
            id: 51,
            name:t("PaymentMethod.meghrut"),
            price:"16500"
        },
        {
            id: 52,
            name:t("PaymentMethod.metsamor"),
            price:"4200"
        },
        {
            id: 53,
            name:t("PaymentMethod.mushavan"),
            price:"2500"
        },
        {
            id: 54,
            name:t("PaymentMethod.norHachn"),
            price:"1500"
        },
        {
            id: 55,
            name:t("PaymentMethod.noragavit"),
            price:"2500"
        },
        {
            id: 56,
            name:t("PaymentMethod.norgyugh"),
            price:"1900"
        },
        {
            id: 57,
            name:t("PaymentMethod.noyemberyan"),
            price:"22500"
        },
        {
            id: 58,
            name:t("PaymentMethod.nubarashen"),
            price:"2800"
        },
        {
            id: 59,
            name:t("PaymentMethod.oshakan"),
            price:"3800"
        },
        {
            id: 60,
            name:t("PaymentMethod.proshian"),
            price:"2800"
        },
    
        {
            id: 61,
            name:t("PaymentMethod.ptghni"),
            price:"900"
        },
        {
            id: 62,
            name:t("PaymentMethod.sevan"),
            price:"6800"
        },
        {
            id: 63,
            name:t("PaymentMethod.shirakavan"),
            price:"13500"
        },
        {
            id: 64,
            name:t("PaymentMethod.sisian"),
            price:"22500"
        },
        {
            id: 65,
            name:t("PaymentMethod.spitak"),
            price:"11000"
        },
        {
            id: 66,
            name:t("PaymentMethod.stepanakert"),
            price:"36000"
        },
        {
            id: 67,
            name:t("PaymentMethod.stepanavan"),
            price:"16500"
        },
        {
            id: 68,
            name:t("PaymentMethod.talin"),
            price:"7800"
        },
        {
            id: 69,
            name:t("PaymentMethod.tashir"),
            price:"17500"
        },
        {
            id: 70,
            name:t("PaymentMethod.tsakhkadzor"),
            price:"5900"
        },
        {
            id: 71,
            name:t("PaymentMethod.udzhan"),
            price:"4500"
        },
        {
            id: 72,
            name:t("PaymentMethod.vahagnDistrict"),
            price:"2000"
        },
        {
            id: 73,
            name:t("PaymentMethod.vanadzor"),
            price:"14500"
        },
        {
            id: 74,
            name:t("PaymentMethod.vardashen"),
            price:"2800"
        },
        {
            id: 75,
            name:t("PaymentMethod.vardenis"),
            price:"18500"
        },
        {
            id: 76,
            name:t("PaymentMethod.vayk"),
            price:"15800"
        },
        {
            id: 77,
            name:t("PaymentMethod.vedi"),
            price:"5800"
        },
        {
            id: 78,
            name:t("PaymentMethod.yeghegnadzor"),
            price:"14500"
        },
        {
            id: 79,
            name:t("PaymentMethod.yeghvard"),
            price:"2400"
        },
        {
            id: 80,
            name:t("PaymentMethod.zovuni"),
            price:"2000"
        }
    
    ]
    const bigPaymentData = [
        {
            id: 1,
            name:t("PaymentMethod.yerevan"),
            price:"9000"
        },
        {
            id: 2,
            name:t("PaymentMethod.3rdVillage"),
            price:"13000"
        },
        {
            id: 3,
            name:t("PaymentMethod.4thVillage"),
            price:"13000"
        },
        {
            id: 4,
            name:t("PaymentMethod.abovyan"),
            price:"6000"
        },
        {
            id: 5,
            name:t("PaymentMethod.aghveran"),
            price:"20000"
        },
        {
            id: 6,
            name:t("PaymentMethod.airport"),
            price:"13500"
        },
        {
            id: 7,
            name:t("PaymentMethod.akhuryan"),
            price:"45000"
        },
        {
            id: 8,
            name:t("PaymentMethod.alaverdi"),
            price:"65000"
        },
        {
            id: 9,
            name:t("PaymentMethod.amasia"),
            price:"59000"
        },
        {
            id: 10,
            name:t("PaymentMethod.aparan"),
            price:"30000 "
        },
        {
            id: 11,
            name:t("PaymentMethod.aramus"),
            price:"7500"
        },
        {
            id: 12,
            name:t("PaymentMethod.ararat"),
            price:"32000"
        },
        {
            id: 13,
            name:t("PaymentMethod.argavand"),
            price:"12000"
        },
        {
            id: 14,
            name:t("PaymentMethod.arindzh"),
            price:"5000"
        },
        {
            id: 15,
            name:t("PaymentMethod.armavir"),
            price:"30000"
        },
        {
            id: 16,
            name:t("PaymentMethod.artashat"),
            price:"25000"
        },
        {
            id: 17,
            name:t("PaymentMethod.artik"),
            price:"41000"
        },
        {
            id: 18,
            name:t("PaymentMethod.arzni"),
            price:"6000"
        },
        {
            id: 19,
            name:t("PaymentMethod.ashotsk"),
            price:"63000"
        },
        {
            id: 20,
            name:t("PaymentMethod.ashtarak"),
            price:"16000"
        },
        {
            id: 21,
            name:t("PaymentMethod.avshar"),
            price:"31000"
        },
        {
            id: 22,
            name:t("PaymentMethod.berd"),
            price:"77000"
        },
        {
            id: 23,
            name:t("PaymentMethod.berddzor"),
            price:"95000"
        },
        {
            id: 24,
            name:t("PaymentMethod.bjni"),
            price:"18000"
        },
        {
            id: 25,
            name:t("PaymentMethod.byurakan"),
            price:"23000"
        },
        {
            id: 26,
            name:t("PaymentMethod.byureghavan"),
            price:"5500"
        },
        {
            id: 27,
            name:t("PaymentMethod.chambarak"),
            price:"39000"
        },
        {
            id: 28,
            name:t("PaymentMethod.charentsavan"),
            price:"13000"
        },
        {
            id: 29,
            name:t("PaymentMethod.dilijan"),
            price:"40000"
        },
        {
            id: 30,
            name:t("PaymentMethod.dzoraghbyur"),
            price:"7000"
        },
        {
            id: 31,
            name:t("PaymentMethod.echmiadzin"),
            price:"18000"
        },
        {
            id: 32,
            name:t("PaymentMethod.garni"),
            price:"16000"
        },
        {
            id: 33,
            name:t("PaymentMethod.gavar"),
            price:"41000"
        },
        {
            id: 34,
            name:t("PaymentMethod.geghard"),
            price:"20000"
        },
        {
            id: 35,
            name:t("PaymentMethod.goris"),
            price:"90000"
        },
        {
            id: 36,
            name:t("PaymentMethod.gyumri"),
            price:"49000"
        },
        {
            id: 37,
            name:t("PaymentMethod.hrazdan"),
            price:"21000"
        },
        {
            id: 38,
            name:t("PaymentMethod.ijevan"),
            price:"45000"
        },
        {
            id: 39,
            name:t("PaymentMethod.jermuk"),
            price:"65000"
        },
        {
            id: 40,
            name:t("PaymentMethod.jrvezh"),
            price:"7000"
        },
    
    
        {
            id: 41,
            name:t("PaymentMethod.kadzharan"),
            price:"127000"
        },
        {
            id: 42,
            name:t("PaymentMethod.kapan"),
            price:"116000"
        },
        {
            id: 43,
            name:t("PaymentMethod.kasakh"),
            price:"11000"
        },
        {
            id: 44,
            name:t("PaymentMethod.khndzoresk"),
            price:"95000"
        },
        {
            id: 45,
            name:t("PaymentMethod.lusakert"),
            price:"9000"
        },
        {
            id: 46,
            name:t("PaymentMethod.maralik"),
            price:"41000"
        },
        {
            id: 47,
            name:t("PaymentMethod.martuni"),
            price:"44000"
        },
        {
            id: 48,
            name:t("PaymentMethod.masis"),
            price:"16000"
        },
        {
            id: 49,
            name:t("PaymentMethod.meghradzor"),
            price:"28000"
        },
        {
            id: 50,
            name:t("PaymentMethod.meghri"),
            price:"145000"
        },
    
    
        {
            id: 51,
            name:t("PaymentMethod.meghrut"),
            price:"45000"
        },
        {
            id: 52,
            name:t("PaymentMethod.metsamor"),
            price:"27000"
        },
        {
            id: 53,
            name:t("PaymentMethod.mushavan"),
            price:"11000"
        },
        {
            id: 54,
            name:t("PaymentMethod.norHachn"),
            price:"5500"
        },
        {
            id: 55,
            name:t("PaymentMethod.noragavit"),
            price:"12000"
        },
        {
            id: 56,
            name:t("PaymentMethod.norgyugh"),
            price:"7000"
        },
        {
            id: 57,
            name:t("PaymentMethod.noyemberyan"),
            price:"52000"
        },
        {
            id: 58,
            name:t("PaymentMethod.nubarashen"),
            price:"15000"
        },
        {
            id: 59,
            name:t("PaymentMethod.oshakan"),
            price:"20000"
        },
        {
            id: 60,
            name:t("PaymentMethod.proshian"),
            price:"12000"
        },
    
        {
            id: 61,
            name:t("PaymentMethod.ptghni"),
            price:"4800"
        },
        {
            id: 62,
            name:t("PaymentMethod.sevan"),
            price:"26000"
        },
        {
            id: 63,
            name:t("PaymentMethod.shirakavan"),
            price:"63000"
        },
        {
            id: 64,
            name:t("PaymentMethod.sisian"),
            price:"81000"
        },
        {
            id: 65,
            name:t("PaymentMethod.spitak"),
            price:"37000"
        },
        {
            id: 66,
            name:t("PaymentMethod.stepanakert"),
            price:"125000"
        },
        {
            id: 67,
            name:t("PaymentMethod.stepanavan"),
            price:"55000"
        },
        {
            id: 68,
            name:t("PaymentMethod.talin"),
            price:"40000"
        },
        {
            id: 69,
            name:t("PaymentMethod.tashir"),
            price:"61000"
        },
        {
            id: 70,
            name:t("PaymentMethod.tsakhkadzor"),
            price:"24000"
        },
        {
            id: 71,
            name:t("PaymentMethod.udzhan"),
            price:"23000"
        },
        {
            id: 72,
            name:t("PaymentMethod.vahagnDistrict"),
            price:"11000"
        },
        {
            id: 73,
            name:t("PaymentMethod.vanadzor"),
            price:"45000"
        },
        {
            id: 74,
            name:t("PaymentMethod.vardashen"),
            price:"20000"
        },
        {
            id: 75,
            name:t("PaymentMethod.vardenis"),
            price:"57000"
        },
        {
            id: 76,
            name:t("PaymentMethod.vayk"),
            price:"55000"
        },
        {
            id: 77,
            name:t("PaymentMethod.vedi"),
            price:"31000"
        },
        {
            id: 78,
            name:t("PaymentMethod.yeghegnadzor"),
            price:"53000"
        },
        {
            id: 79,
            name:t("PaymentMethod.yeghvard"),
            price:"11000"
        },
        {
            id: 80,
            name:t("PaymentMethod.zovuni"),
            price:"8000"
        }
    
    ]
    return(
        <>
             <div className="container">
                <p className="payment__text1"> {t("DeliveryReturns.ordersArmenia")}  </p>
                <p className="payment__text3">{t("DeliveryReturns.orders")} </p>
                <p>{t("DeliveryReturns.all")}</p>
                <strong>{t("DeliveryReturns.attention")} </strong>{t("DeliveryReturns.plants")}       

                <div className="payment__down">
                    <div className="payment__down-item" onClick={()=>setActivePayment(!activePayment)}>
                        <p>{t("list.minList")}</p>
                        <img src={down} alt="down" />
                    </div>
                    <div className="tableContainer " style={{ display: activePayment ? "block" : "none" }}>
                    
                    <table>
                  
                         {paymentData.map((item) =>
                              <tr>
                              <th>{item.name}</th>
                              <th>{item.price}</th>
                              <th>{t("item.amd")}</th>
                            </tr>
                          )}
                    
                    </table>    
                    </div>  





                    <div className="payment__down-item" onClick={()=>setActiveBigPayment(!activeBigPayment)}>
                        <p>{t("list.maxList")}</p>
                        <img src={down} alt="down" />
                    </div>
                    <div  className="tableContainer " style={{ display: activeBigPayment ? "block" : "none" }}>
                    
                    <table>
                  
                         {bigPaymentData.map((item) =>
                              <tr>
                              <th>{item.name}</th>
                              <th>{item.price}</th>
                              <th>{t("item.amd")}</th>
                            </tr>
                          )}
                    
                    </table>    
                    </div>  

                </div>   



            </div>
        </>
    )
}
export {Return}