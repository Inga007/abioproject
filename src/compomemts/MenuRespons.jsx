import row from "../images/row.png"
import down from "../images/down.png"
import "../css/menuRes.css"
import "../responsive/home.css"
import { useState } from "react"
import { useTranslation } from "react-i18next";
import dropdownWhite from "../images/downWhite.svg"
import { Link } from "react-router-dom";
import topWhiteClose from "../images/topWhite.svg"
import topBlack from "../images/topBlack.svg"
import topWhite from "../images/whiteDown.svg"      
import { shopData } from "../data/shopData";
import MenuCatalog  from "../compomemts/MenuCatalog";
const MenuRespons=({openBurger, setOpenBurger})=>{
    const {t, i18n}=useTranslation()
  
    // console.log(openBurger)

    const [isOpenCatalog,setisOpenCatalog]=useState(true)
    const [isOpencategoryPlantsSeeds,setisOpencategoryPlantsSeeds]=useState(true)
    const [isOpencategoryIndoorPlants,setisOpencategoryIndoorPlants]=useState(false)
    const [isOpencategorySeedsBulbs,setisOpencategorySeedsBulbs]=useState(false)
    const [isOpencategorySoilsFertilizers,setisOpencategorySoilsFertilizers]=useState(false)
    const [isOpencategoryChemicals,setisOpencategoryChemicals]=useState(false)
    const [isOpencategoryPlastic,setisOpencategoryPlastic]=useState(false)
    const [isOpencategoryToolsMaterials,setisOpencategoryToolsMaterials]=useState(false)
    const [isOpencategoryGardenTools,setisOpencategoryGardenTools]=useState(false)
    const [isOpencategoryCoverings,setisOpencategoryCoverings]=useState(false)
    const [isOpencategoryCachePotsVases,setisOpencategoryCachePotsVases]=useState(false)
    const [isOpencategoryRecreation,setisOpencategoryRecreation]=useState(false)
    const [isOpencategoryBBQ,setisOpencategoryBBQ]=useState(false)
    const [isOpencategoryBathhouseSauna,setisOpencategoryBathhouseSauna]=useState(false)
    const [isOpencategoryPlaygroundPool,setisOpencategoryPlaygroundPool]=useState(false)
    const [isOpencategoryFurniture,setisOpencategoryFurniture]=useState(false)
    const [isOpencategoryDecor,setisOpencategoryDecor]=useState(false)

    const [isOpencategoryHouse,setisOpencategoryHouse]=useState(false)
    const [isOpencategoryGarden,setisOpencategoryGarden]=useState(false)

    
    const  [isOpenCatalogSeeds,setisOpencategorySeeds]=useState(true)

        return(
                <div style={{display:openBurger?"none":"block"}}>
                <div>
                <div className="catalogRes" onClick={()=>setisOpenCatalog(!isOpenCatalog)}>
                <p className="catalog-nameRes"> {t("mainMenu.catalog1")}</p>
                <img src={down} alt="down" className="downRes" />
                <img src={dropdownWhite} alt="dropdownWhite" className="dropdownWhiteRes" />
                </div>
                <img src={row} className="rowres" alt="" />
                </div>
    
        <div style={{display:isOpenCatalog?"none":"block"}}>
        
            <ul className="nocategoryRes">
        {shopData.map( (menu,index)=>{

const depthLevel = 0;
return < MenuCatalog items={menu} key={index} depthLevel={depthLevel} handleActive={() => setOpenBurger(!openBurger)}  />;
})}
</ul>
        <img src={row} className="rowres" alt="" />

        </div>    

    
                <div className="catalogRes" onClick={()=>setOpenBurger(!openBurger)}    >
                <Link  className="link__category" to={`/${i18n.language}/Services`}>
                    <p className="catalog-nameRes"> {t("mainMenu.service")}</p> </Link>
                </div>
                <img src={row} className="rowres" alt="" />
    
                <div className="catalogRes" onClick={()=>setOpenBurger(!openBurger)}  >
                <Link  className="link__category" to={`/${i18n.language}/videoLesson`}>
                    <p className="catalog-nameRes"> {t("mainMenu.video")}</p> </Link>
                </div>
                <img src={row} className="rowres" alt="" />
    
                <div className="catalogRes" onClick={()=>setOpenBurger(!openBurger)} >
                <Link  className="link__category" to="giftCard">
                    <p className="catalog-nameRes"> {t("mainMenu.gift")}</p> </Link>
                </div>
                <img src={row} className="rowres" alt="" />
    
                <div className="catalogRes" onClick={()=>setOpenBurger(!openBurger)} >
                <Link  className="link__category" to="PaymentDelivery">
                    <p className="catalog-nameRes"> {t("mainMenu.payment")}</p> </Link>
                </div>
    
                </div>

            
        )
    
}
export {MenuRespons}