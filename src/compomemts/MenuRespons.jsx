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
  
    console.log(openBurger)

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
        {/* <div className={isOpenCatalog?"category1":"nocategoryRes"}>
            <div className="category-itemResRes" onClick={()=>setOpenBurger(!openBurger)}></div>
            <div className={isOpencategoryPlantsSeeds?"category-itemRes":"category-itemRes__active2"} 
            onClick={()=>setisOpencategoryPlantsSeeds(!isOpencategoryPlantsSeeds)}>
                <p >{t("catalogMenu.plantsSeeds")}</p>
                <img  src={down} alt="down" className={isOpencategoryPlantsSeeds?"down":"nodown"} />
                <img src={topWhite} alt="whiteDown" className="dropdownWhite"/>
                <img  style={{display:isOpencategoryPlantsSeeds?"none":"block"}} src={topBlack} alt="topBlack" />
            </div>            

            <div className={isOpencategoryPlantsSeeds?"category1-item1Res":"nocategory1-item1Res"}>
            <div className={isOpencategoryIndoorPlants?"category-itemRes__active":"category-itemRes"}
             onClick={()=>setisOpencategoryIndoorPlants(!isOpencategoryIndoorPlants)}>
                
                <Link className="link__category"  onClick={()=>setOpenBurger(!openBurger)} 
                to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.indoorPlants")}`}>{t("FirstColumnMenu.indoorPlants")}</Link>
                
                <img  src={down} alt="down" className="down" />
                <img src={topWhite} alt="whiteDown" className="dropdownWhite" />
                <img  style={{display:isOpencategoryIndoorPlants?"block":"none"}} src={topWhiteClose} alt="topWhiteClose" />
            </div>
                <div style={{display:isOpencategoryIndoorPlants?"block":"none"}} >
                <div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.indoorPlants")}/${t("SecondColumnMenu.floweringPlants")}`}
                >{t("SecondColumnMenu.floweringPlants")}</Link>
                
            </div><div className="category-itemRes">
            <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
             to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.indoorPlants")}/${t("SecondColumnMenu.decorativeLeafyPlants")}`}>
                {t("SecondColumnMenu.decorativeLeafyPlants")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`{t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.indoorPlants")}/${t("SecondColumnMenu.fruitPlants")}`}>
                    {t("SecondColumnMenu.fruitPlants")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.indoorPlants")}/${t("SecondColumnMenu.cactusSucculents")}`}>
                    {t("SecondColumnMenu.cactusSucculents")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.indoorPlants")}/${t("SecondColumnMenu.ampelousPlants")}`}>
                    {t("SecondColumnMenu.ampelousPlants")}</Link>
                
            </div>
            <img src={row} className="row-img" alt="" />
                </div>
            <div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.bigindoor")}`}>
                    {t("FirstColumnMenu.bigindoor")}</Link>
                
            </div>
            <div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.outdoorPlants")}`}>
                    {t("FirstColumnMenu.outdoorPlants")}</Link>
                
            </div>
            <div 
            className={isOpencategorySeedsBulbs?"category-itemRes__active":"category-itemRes"}
            onClick={()=>setisOpencategorySeedsBulbs(!isOpencategorySeedsBulbs)}>
                <p>{t("FirstColumnMenu.seedsBulbs")}</p>
                <img  src={down} alt="down" className={!isOpencategorySeedsBulbs?"down":"nodown"} />
                <img src={topWhite} alt="whiteDown" className="dropdownWhite" />
                <img  style={{display:!isOpencategorySeedsBulbs?"none":"block"}} src={topWhiteClose} alt="topWhiteClose" />
            </div>
            <div style={{display:isOpencategorySeedsBulbs?"block":"none"}} >
                <div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
               to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.seedsBulbs")}/${t("FirstColumnMenu.bloomy")}`}>
                    {t("FirstColumnMenu.bloomy")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.seedsBulbs")}/${t("FirstColumnMenu.horticultural")}`}>
                    {t("FirstColumnMenu.horticultural")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.seedsBulbs")}/${t("FirstColumnMenu.herb")}`}>
                    {t("FirstColumnMenu.herb")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                to={`${t("catalogMenu.plantsSeeds")}/${t("FirstColumnMenu.seedsBulbs")}/${t("FirstColumnMenu.grass")}`}>
                    {t("FirstColumnMenu.grass")}</Link>
                
            </div>
                </div>
            <img src={row} className="row-img" alt="" />
            </div>
          
          
          
          
          
          
          
          
          
          
          
            <div className={isOpencategorySoilsFertilizers?"category-itemRes__active":"category-itemRes"} 
            onClick={()=>setisOpencategorySoilsFertilizers(!isOpencategorySoilsFertilizers)}
            >
                <p>{t("catalogMenu.soilsFertilizers")}</p>
                <img  src={down} alt="down" className={!isOpencategorySoilsFertilizers?"down":"nodown"} />
                <img src={topWhite} alt="whiteDown" className="dropdownWhite"/>
                <img  style={{display:!isOpencategorySoilsFertilizers?"none":"block"}} src={topWhiteClose} alt="topWhiteClose" />
            </div>
            <div style={{display:isOpencategorySoilsFertilizers?"block":"none"}} >
                <div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                to={`${t("catalogMenu.soilsFertilizers")}/${t("FirstColumnMenu.soils")}`}>
                    {t("FirstColumnMenu.soils")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                to={`${t("catalogMenu.soilsFertilizers")}/${t("FirstColumnMenu.turf")}`}>
                    {t("FirstColumnMenu.turf")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
               to={`${t("catalogMenu.soilsFertilizers")}/${t("FirstColumnMenu.additive")}`}>
                    {t("FirstColumnMenu.additive")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                 to={`${t("catalogMenu.soilsFertilizers")}/${t("FirstColumnMenu.ferlitizers")}`}>
                    {t("FirstColumnMenu.ferlitizers")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                to={`${t("catalogMenu.soilsFertilizers")}/${t("FirstColumnMenu.decorativeFilling")}`}>
                    {t("FirstColumnMenu.decorativeFilling")}</Link>
                
            </div>
            <img src={row} className="row-img" alt="" />
                </div>




            <div className={isOpencategoryChemicals?"category-itemRes__active":"category-itemRes"}
             onClick={()=>setisOpencategoryChemicals(!isOpencategoryChemicals)}>
                <p>{t("catalogMenu.chemicals")}</p>
                <img  src={down} alt="down" className={!isOpencategoryChemicals?"down":"nodown"} />
                <img src={topWhite} alt="whiteDown" className="dropdownWhite"/>
                <img  style={{display:!isOpencategoryChemicals?"none":"block"}} src={topWhiteClose} alt="topWhiteClose" />

            </div>
            <div style={{display:isOpencategoryChemicals?"block":"none"}} >
                <div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.chemicals")}/${t("FirstColumnMenu.herbicides")}`}>
                    {t("FirstColumnMenu.herbicides")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.chemicals")}/${t("FirstColumnMenu.fungicides")}`}>
                    {t("FirstColumnMenu.fungicides")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
              to={`${t("catalogMenu.chemicals")}/${t("FirstColumnMenu.pesticides")}`}>
                    {t("FirstColumnMenu.pesticides")}</Link>
                
            </div>
            <div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.chemicals")}/${t("FirstColumnMenu.stimulantFertilizers")}`}>
                    {t("FirstColumnMenu.stimulantFertilizers")}</Link>
                
            </div>
            <img src={row} className="row-img" alt="" />
                </div>


              
            <div className={isOpencategoryCachePotsVases?"category-itemRes__active2":"category-itemRes"}
            onClick={()=>setisOpencategoryCachePotsVases(!isOpencategoryCachePotsVases)}>
                <p>{t("catalogMenu.cachePotsVases")}</p>
                <img  src={down} alt="down" className={!isOpencategoryCachePotsVases?"down":"nodown"} />
                <img src={topWhite} alt="whiteDown" className="dropdownWhite"/>
                <img  style={{display:!isOpencategoryCachePotsVases?"none":"block"}} src={topBlack} alt="topBlack" />
            </div>
            <div style={{display:isOpencategoryCachePotsVases?"block":"none"}} >
                <div className={isOpencategoryPlastic?"category-itemRes__active":"category-itemRes"}
                  onClick={()=>setisOpencategoryPlastic(!isOpencategoryPlastic)}>
                <p>{t("FirstColumnMenu.plastic")}</p>
                <img  src={down} alt="down" className={!isOpencategoryPlastic?"down":"nodown"} />
                <img src={topWhite} alt="whiteDown" className="dropdownWhite"/>
                <img  style={{display:!isOpencategoryPlastic?"none":"block"}} src={topWhiteClose} alt="topWhiteClose" />
            </div>
            
            <div style={{display:isOpencategoryPlastic?"block":"none"}} >
                <div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.plastic")}/${t("SecondColumnMenu.desktop")}`}>
                    {t("SecondColumnMenu.desktop")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
               to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.plastic")}/${t("SecondColumnMenu.outdoor")}`}>
                    {t("SecondColumnMenu.outdoor")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.plastic")}/${t("SecondColumnMenu.balconies")}`}>
                    {t("SecondColumnMenu.balconies")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.plastic")}/${t("SecondColumnMenu.hanging")}`}>
                    {t("SecondColumnMenu.hanging")}</Link>
                
            </div>
            <img src={row} className="row-img" alt="" />
                </div>

            
            <div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.ceramics")}`}>
                    {t("FirstColumnMenu.ceramics")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
               to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.concrete")}`}>
                    {t("FirstColumnMenu.concrete")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
               to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.gypsum")}`}>
                    {t("FirstColumnMenu.gypsum")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
               to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.fiber")}`}>
                    {t("FirstColumnMenu.fiber")}</Link>
                
            </div>
            <div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.wood")}`}>
                    {t("FirstColumnMenu.wood")}</Link>
                
            </div>
            <div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.phalaenopsisPlanter")}`}>
                    {t("FirstColumnMenu.phalaenopsisPlanter")}</Link>
                
            </div>
            <div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.selfWateringPlanter")}`}>
                    {t("FirstColumnMenu.selfWateringPlanter")}</Link>
                
            </div>
            <div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.racks")}`}>
                    {t("FirstColumnMenu.racks")}</Link>
                
            </div>
            <div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                to={`${t("catalogMenu.cachePotsVases")}/${t("FirstColumnMenu.stakes")}`}>
                    {t("FirstColumnMenu.stakes")}</Link>
                
            </div>
            <img src={row} className="row-img" alt="" />
                </div>



            <div className={isOpencategoryToolsMaterials?"category-itemRes__active2":"category-itemRes"}
            onClick={()=>setisOpencategoryToolsMaterials(!isOpencategoryToolsMaterials)}>
                <p>{t("catalogMenu.toolsMaterials")}</p>
                <img  src={down} alt="down" className={!isOpencategoryToolsMaterials?"down":"nodown"} />
                <img src={topWhite} alt="whiteDown" className="dropdownWhite"/>
                <img  style={{display:!isOpencategoryToolsMaterials?"none":"block"}} src={topBlack} alt="topBlack" />
            </div>             
          

            <div style={{display:isOpencategoryToolsMaterials?"block":"none"}} >
                <div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.wateringSpraying")}`}>
                    {t("FirstColumnMenu.wateringSpraying")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.dripWatering")}`}>
                    {t("FirstColumnMenu.dripWatering")}</Link>
                
            </div><div 
            className={isOpencategoryGardenTools?"category-itemRes__active":"category-itemRes"}
            onClick={()=>setisOpencategoryGardenTools(!isOpencategoryGardenTools)}>
                <p>{t("FirstColumnMenu.gardenTools")}</p>
                <img  src={down} alt="down" className={!isOpencategoryGardenTools?"down":"nodown"} />
                <img src={topWhite} alt="whiteDown" className="dropdownWhite"/>
                <img  style={{display:!isOpencategoryGardenTools?"none":"block"}} src={topWhiteClose} alt="topWhiteClose" />
                
            </div>
            
            <div style={{display:isOpencategoryGardenTools?"block":"none"}} >
                <div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.gardenTools")}/${t("SecondColumnMenu.tools")}`}>
                    {t("SecondColumnMenu.tools")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.gardenTools")}/${t("SecondColumnMenu.lawnmowes")}`}>
                    {t("SecondColumnMenu.lawnmowes")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.gardenTools")}/${t("SecondColumnMenu.trolleys")}`}>
                    {t("SecondColumnMenu.trolleys")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.gardenTools")}/${t("SecondColumnMenu.bordersFences")}`}>
                    {t("SecondColumnMenu.bordersFences")}</Link>
                
            </div>
            <img src={row} className="row-img" alt="" />
                </div>

            
            
            <div 
             className={isOpencategoryCoverings?"category-itemRes__active":"category-itemRes"}
             onClick={()=>setisOpencategoryCoverings(!isOpencategoryCoverings)}>
                <p>{t("FirstColumnMenu.coverings")}</p>
                <img  src={down} alt="down" className={!isOpencategoryCoverings?"down":"nodown"} />
                <img src={topWhite} alt="whiteDown" className="dropdownWhite"/>
                <img  style={{display:!isOpencategoryCoverings?"none":"block"}} src={topWhiteClose} alt="topWhiteClose" />
            </div>
            <div style={{display:isOpencategoryCoverings?"block":"none"}} >
                <div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.coverings")}/${t("SecondColumnMenu.artificialGrass")}`}>
                    {t("SecondColumnMenu.artificialGrass")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.coverings")}/${t("SecondColumnMenu.shadeNet")}`}>
                    {t("SecondColumnMenu.shadeNet")}</Link>
                
            </div><div className="category-itemRes">
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
               to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.coverings")}/${t("SecondColumnMenu.horticulturalFleece")}`}>
                    {t("SecondColumnMenu.horticulturalFleece")}</Link>
                
            </div>
            <img src={row} className="row-img" alt="" />
                </div>
            
            
            
            <div className="category-itemRes">
                 <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.gardenLighting")}`}>
                    {t("FirstColumnMenu.gardenLighting")}</Link>
                
            </div>
            <div className="category-itemRes">
                 <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.traps")}`}>
                    {t("FirstColumnMenu.traps")}</Link>
                
            </div>
            <div className="category-itemRes">
                 <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.constructionTools")}`}>
                    {t("FirstColumnMenu.constructionTools")}</Link>
                
            </div>
            <div className="category-itemRes">
                 <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.stepLadders")}`}>
                    {t("FirstColumnMenu.stepLadders")}</Link>
                
            </div>
            <div className="category-itemRes">
                 <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                  to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.containers")}`}>
                    {t("FirstColumnMenu.containers")}</Link>
                
            </div>
            <div className="category-itemRes">
                 <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.toolsMaterials")}/${t("FirstColumnMenu.workwear")}`}>
                    {t("FirstColumnMenu.workwear")}</Link>
                
            </div>
            <img src={row} className="row-img" alt="" />
            </div>
            
            <div className={isOpencategoryRecreation?"category-itemRes__active2":"category-itemRes"}
             onClick={()=>setisOpencategoryRecreation(!isOpencategoryRecreation)}>
                <p>{t("catalogMenu.recreation")}</p>
                <img  src={down} alt="down" className={!isOpencategoryRecreation?"down":"nodown"} />
                <img src={topWhite} alt="whiteDown" className="dropdownWhite"/>
                <img  style={{display:!isOpencategoryRecreation?"none":"block"}} src={topBlack} alt="topBlack" />
            </div>             
            <div style={{display:isOpencategoryRecreation?"block":"none"}} >
                <div className={isOpencategoryBBQ?"category-itemRes__active":"category-itemRes"}
             onClick={()=>setisOpencategoryBBQ(!isOpencategoryBBQ)}>
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.bbq")}`}>{t("FirstColumnMenu.bbq")}</Link>
                <img  src={down} alt="down" className={!isOpencategoryBBQ?"down":"nodown"} />
                <img src={topWhite} alt="whiteDown" className="dropdownWhite"/>
                <img  style={{display:!isOpencategoryBBQ?"none":"block"}} src={topWhiteClose} alt="topWhiteClose" />
            </div>
                            <div style={{display:isOpencategoryBBQ?"block":"none"}} >
                                        <div className="category-itemRes">
                                         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                                          to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.bbq")}/${t("SecondColumnMenu.braziers")}`}>
                                            {t("SecondColumnMenu.braziers")}</Link>    
                                        </div>
                                        <div className="category-itemRes">
                                         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                                          to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.bbq")}/${t("SecondColumnMenu.bbqAccessories")}`}>
                                            {t("SecondColumnMenu.bbqAccessories")}</Link>    
                                        </div>
                                        <img src={row} className="row-img" alt="" />
                                </div>
            
            <div className={isOpencategoryBathhouseSauna?"category-itemRes__active":"category-itemRes"}
             onClick={()=>setisOpencategoryBathhouseSauna(!isOpencategoryBathhouseSauna)}>
                <Link onClick={()=>setOpenBurger(!openBurger)} 
                className="link__category"
                to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.bathhouseSauna")}`}>{t("FirstColumnMenu.bathhouseSauna")}</Link>
                <img  src={down} alt="down" className={!isOpencategoryBathhouseSauna?"down":"nodown"} />
                <img src={topWhite} alt="whiteDown" className="dropdownWhite"/>
                <img  style={{display:!isOpencategoryBathhouseSauna?"none":"block"}} src={topWhiteClose} alt="topWhiteClose" />
                
            </div>
            
                             <div style={{display:isOpencategoryBathhouseSauna?"block":"none"}} >
                                        <div className="category-itemRes">
                                         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                                         to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.bathhouseSauna")}/${t("SecondColumnMenu.saunaAccessories")}`}>
                                            {t("SecondColumnMenu.saunaAccessories")}</Link>     
                                        </div>
                                        <div className="category-itemRes">
                                         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                                          to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.bathhouseSauna")}/${t("SecondColumnMenu.aromas")}`}>
                                            {t("SecondColumnMenu.aromas")}</Link>     
                                        </div>
                                        <img src={row} className="row-img" alt="" />
                                </div>
            
            <div className={isOpencategoryPlaygroundPool?"category-itemRes__active":"category-itemRes"}
             onClick={()=>setisOpencategoryPlaygroundPool(!isOpencategoryPlaygroundPool)}>
         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
          to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.playgroundPool")}`}>{t("FirstColumnMenu.playgroundPool")}</Link>
                <img  src={down} alt="down" className={!isOpencategoryPlaygroundPool?"down":"nodown"} />
                <img src={topWhite} alt="whiteDown" className="dropdownWhite"/>
                <img  style={{display:!isOpencategoryPlaygroundPool?"none":"block"}} src={topWhiteClose} alt="topWhiteClose" />
                
            </div>

            <div style={{display:isOpencategoryPlaygroundPool?"block":"none"}} >
                                        <div className="category-itemRes">
                                         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                                        to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.playgroundPool")}/${t("SecondColumnMenu.hammocks")}`}>
                                            {t("SecondColumnMenu.hammocks")}</Link>   
                                        </div>
                                        <div className="category-itemRes">
                                         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                                        to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.playgroundPool")}/${t("SecondColumnMenu.trampolines")}`}>
                                            {t("SecondColumnMenu.trampolines")}</Link>   
                                        </div>
                                        <div className="category-itemRes">
                                         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                                          to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.playgroundPool")}/${t("SecondColumnMenu.sunshade")}`}>
                                            {t("SecondColumnMenu.sunshade")}</Link>   
                                        </div>
                                        <div className="category-itemRes">
                                         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                                        to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.playgroundPool")}/${t("SecondColumnMenu.swingsSlides")}`}>
                                            {t("SecondColumnMenu.swingsSlides")}</Link>   
                                        </div>
                                        <div className="category-itemRes">
                                         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                                         to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.playgroundPool")}/${t("SecondColumnMenu.tents")}`}>
                                            {t("SecondColumnMenu.tents")}</Link>   
                                        </div>
                                        <div className="category-itemRes">
                                         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                                        to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.playgroundPool")}/${t("SecondColumnMenu.mattressesRugs")}`}>
                                            {t("SecondColumnMenu.mattressesRugs")}</Link>   
                                        </div>
                                        <div className="category-itemRes">
                                         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                                        to={`${t("catalogMenu.recreation")}/${t("FirstColumnMenu.playgroundPool")}/${t("SecondColumnMenu.sunbeds")}`}>
                                            {t("SecondColumnMenu.sunbeds")}</Link>   
                                        </div>
                                    
                                </div>
            <img src={row} className="row-img" alt="" />
                </div>

            <div className={isOpencategoryFurniture?"category-itemRes__active2":"category-itemRes"}
             onClick={()=>setisOpencategoryFurniture(!isOpencategoryFurniture)}>
                <p>{t("catalogMenu.furniture")}</p>
                <img  src={down} alt="down" className={!isOpencategoryFurniture?"down":"nodown"} />
                <img src={topWhite} alt="whiteDown" className="dropdownWhite"/>
                <img  style={{display:!isOpencategoryFurniture?"none":"block"}} src={topBlack} alt="topBlack" />
            </div>          
        
            <div style={{display:isOpencategoryFurniture?"block":"none"}} >
                <div className={isOpencategoryHouse?"category-itemRes__active":"category-itemRes"}
             onClick={()=>setisOpencategoryHouse(!isOpencategoryHouse)}>
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.house")}`}>{t("FirstColumnMenu.house")}</Link>
               
                <img  src={down} alt="down" className={!isOpencategoryHouse?"down":"nodown"} />
                <img src={topWhite} alt="whiteDown" className="dropdownWhite"/>
                <img  style={{display:!isOpencategoryHouse?"none":"block"}} src={topWhiteClose} alt="topWhiteClose" />
                
            </div>
            
            <div style={{display:isOpencategoryHouse?"block":"none"}} >
                                        <div className="category-itemRes">
                                         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                                          to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.house")}/${t("SecondColumnMenu.shelves")}`}>
                                            {t("SecondColumnMenu.shelves")}</Link>   
                                        </div>
                                        <div className="category-itemRes">
                                         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                                         to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.house")}/${t("SecondColumnMenu.drawerUnit")}`}>
                                            {t("SecondColumnMenu.drawerUnit")}</Link>   
                                        </div>
                                        <div className="category-itemRes">
                                         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                                        to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.house")}/${t("SecondColumnMenu.tables")}`}>
                                            {t("SecondColumnMenu.tables")}</Link>   
                                        </div>
                                        <div className="category-itemRes">
                                         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                                         to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.house")}/${t("SecondColumnMenu.benches")}`}>
                                            {t("SecondColumnMenu.benches")}</Link>   
                                        </div>
                                        <div className="category-itemRes">
                                         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                                         to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.house")}/${t("SecondColumnMenu.consoles")}`}>
                                            {t("SecondColumnMenu.consoles")}</Link>   
                                        </div>
                                        <div className="category-itemRes">
                                         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                                          to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.house")}/${t("SecondColumnMenu.pouffes")}`}>
                                            {t("SecondColumnMenu.pouffes")}</Link>   
                                        </div>
                                        <div className="category-itemRes">
                                         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                                        to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.house")}/${t("SecondColumnMenu.screens")}`}>
                                            {t("SecondColumnMenu.screens")}</Link>   
                                        </div>
                                        <div className="category-itemRes">
                                         <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                                         to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.house")}/${t("SecondColumnMenu.mirrors")}`}>
                                            {t("SecondColumnMenu.mirrors")}</Link>   
                                        </div>
                                        <img src={row} className="row-img" alt="" />

                                </div>
            <div className={isOpencategoryGarden?"category-itemRes__active":"category-itemRes"}
             onClick={()=>setisOpencategoryGarden(!isOpencategoryGarden)}>
                <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category"
                 to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.garden")}`}>{t("FirstColumnMenu.garden")}</Link>
                <img  src={down} alt="down" className={!isOpencategoryGarden?"down":"nodown"} />
                <img src={topWhite} alt="whiteDown" className="dropdownWhite"/>
                <img  style={{display:!isOpencategoryGarden?"none":"block"}} src={topWhiteClose} alt="topWhiteClose" />
                
            </div>
            <div style={{display:isOpencategoryGarden?"block":"none"}} >
                                        <div className="category-itemRes">
                                        <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                                        to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.garden")}/${t("SecondColumnMenu.diningGroups")}`}>
                                            {t("SecondColumnMenu.diningGroups")}</Link>   
                                        </div>
                                        <div className="category-itemRes">
                                        <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                                       to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.garden")}/${t("SecondColumnMenu.soafasCouches")}`}>
                                            {t("SecondColumnMenu.soafasCouches")}</Link>   
                                        </div>
                                        <div className="category-itemRes">
                                        <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                                         to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.garden")}/${t("SecondColumnMenu.chairsArmchairs")}`}>
                                            {t("SecondColumnMenu.chairsArmchairs")}</Link>   
                                        </div>
                                        <div className="category-itemRes">
                                        <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                                       to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.garden")}/${t("SecondColumnMenu.gardenHouses")}`}>
                                            {t("SecondColumnMenu.gardenHouses")}</Link>   
                                        </div>
                                        <div className="category-itemRes">
                                        <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                                       to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.garden")}/${t("SecondColumnMenu.swings")}`}>
                                            {t("SecondColumnMenu.swings")}</Link>   
                                        </div>
                                        
                                        <img src={row} className="row-img" alt="" />

                                </div>
            
            
            
            <div className="category-itemRes">
            <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
            to={`${t("catalogMenu.furniture")}/${t("FirstColumnMenu.canopiesAwningsCurtains")}`}>
                {t("FirstColumnMenu.canopiesAwningsCurtains")}</Link>
                
            </div>
            <img src={row} className="row-img" alt="" />
                </div>










            <div className={isOpencategoryDecor?"category-itemRes__active":"category-itemRes"}
             onClick={()=>setisOpencategoryDecor(!isOpencategoryDecor)}>
                <p>{t("catalogMenu.decor")}</p>
                <img  src={down} alt="down" className={!isOpencategoryDecor?"down":"nodown"} />
                <img src={topWhite} alt="whiteDown" className="dropdownWhite"/>
                <img  style={{display:!isOpencategoryDecor?"none":"block"}} src={topWhiteClose} alt="topWhiteClose" />

            </div>

            <div style={{display:isOpencategoryDecor?"block":"none"}} >
                <div className="category-itemRes">
                 <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.slidingPartitionsScreens")}`}>
                    {t("FirstColumnMenu.slidingPartitionsScreens")}</Link>
                
            </div><div className="category-itemRes">
                 <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                  to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.baskets")}`}>
                    {t("FirstColumnMenu.baskets")}</Link>
                
            </div><div className="category-itemRes">
                 <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.chestsBoxes")}`}>
                    {t("FirstColumnMenu.chestsBoxes")}</Link>
                
            </div><div className="category-itemRes">
                 <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                  to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.clocks")}`}>
                    {t("FirstColumnMenu.clocks")}</Link>
                
            </div><div className="category-itemRes">
                 <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.holdersforBottles")}`}>
                    {t("FirstColumnMenu.holdersforBottles")}</Link>
                
            </div>
            <div className="category-itemRes">
                 <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                  to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.figurines")}`}>
                    {t("FirstColumnMenu.figurines")}</Link>
                
            </div>
            <div className="category-itemRes">
                 <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.vases")}`}>
                    {t("FirstColumnMenu.vases")}</Link>
                
            </div>
            <div className="category-itemRes">
                 <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.picktures")}`}>
                    {t("FirstColumnMenu.picktures")}</Link>
                
            </div>
            <div className="category-itemRes">
                 <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.lampsandCandles")}`}>
                    {t("FirstColumnMenu.lampsandCandles")}</Link>
                
            </div>
            <div className="category-itemRes">
                 <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.newyearDccor")}`}>
                    {t("FirstColumnMenu.newyearDccor")}</Link>
                
            </div>
            <div className="category-itemRes">
                 <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.artificialFlowers")}`}>
                    {t("FirstColumnMenu.artificialFlowers")}</Link>
                
            </div>
            <div className="category-itemRes">
                 <Link onClick={()=>setOpenBurger(!openBurger)} className="link__category" 
                 to={`${t("catalogMenu.decor")}/${t("FirstColumnMenu.other")}`}>
                    {t("FirstColumnMenu.other")}</Link>
                
            </div>
                </div>
              
        </div> */}
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