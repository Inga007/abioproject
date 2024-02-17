import row from "../images/row.png"
import down from "../images/down.png"
import "../css/filter.css"
import { useState } from "react"
import { Catalog } from "./Catalog"
const Filter =()=>{
    const [isOpenColor, setIsOpenColor] = useState(true);
    const [isOpenRange,setIsOpenRange]=useState(true)

    return(<>
   
    <div className="product-filter">
    <Catalog/>
        <div>
        
        <p className="filter-text">Filter by</p>
        <img src={row} alt="row"  className="row-img" /> 
        </div>
        <div onClick={() => setIsOpenColor(!isOpenColor)}  className="filter-colors">
          <div className="filter-color__block">
          <p>Color</p>
          <img src={down} alt=""  />
            </div>  
            <div className={  isOpenColor ? "filter-color__item":"filter__cardNew"}>
                <div className="color-area">
                    <div className="color-area__item">
                    <div>
                        <div className="color-white"></div>
                        <p>White</p>
                    </div>
                    <div>
                        <div className="color-green"></div>
                        <p>Green</p>
                    </div>
                    </div>
                <div className="color-area__item">
                <div>
                        <div className="color-red"></div>
                        <p>Red</p>
                    </div>
                    <div>
                        <div className="color-beige"></div>
                        <p>Beige</p>
                    </div>
                </div>
                 
                </div>
                <div className="color-area">
                    <div className="color-area__item">
                    <div>
                        <div className="color-orange"></div>
                        <p>Orange</p>
                    </div>
                    <div>
                        <div className="color-pink"></div>
                        <p>Pink</p>
                    </div>
                    </div>
                    <div className="color-area__item">
                    <div>
                        <div className="color-purple"></div>
                        <p>Purple</p>
                    </div>
                    <div>
                        <div className="color-ivory"></div>
                        <p>Ivory</p>
                    </div>
                    </div>
            
                </div>
            </div>
        </div>
        <div className="filter-range">
        <div  onClick={()=> setIsOpenRange(!isOpenRange)} className="filter-range__block">
          <p>Price Range</p>
          <img src={down} alt="down" className="down-img"  />
        </div> 
        <div className={isOpenRange?"filter-range__item":"newRange"}>
            <div> 
            <input className="input-chekt" name="range"   
            id="range5"
            type="radio"
            value="range5"/>
            <label htmlFor="range5"> Under 5000 AMD</label>
           </div>
            <div>
            <input className="input-chekt" name="range" 
            type="radio"
             id="range20"
             value="range20"/>
            <label htmlFor="range20"> 5000 AMD to 20.000 AMD</label>
            </div>
            <div>
                <input className="input-chekt" name="range" 
            type="radio"
             id="range50"
             value="range50"/>
            <label htmlFor="range50"> 20.000 AMD to 50.000 AMD</label>
            </div>
            <div>
                <input className="input-chekt" name="range" type="radio" id="range150"/>
            <label htmlFor="range150"> 50.000 AMD to 150.000 AMD</label>
            </div>
            <div> 
            <input className="input-chekt" name="range" type="radio" id="rangeplus"/>
            <label htmlFor="rangeplus"> 150.000 AMD and above</label>
            </div>
          
          <div className="price-area">
            <div>
            <input className="input-chekt" name="range" type="radio" />
            </div>
         <div className="price__area">
         <input  type="text" className="price-item" placeholder="Min AMD" />
        <input  type="text" className="price-item" placeholder="Max AMD" />
         </div>
     
          </div>
           
      
            
            
          <button className="filter-btn">Apply</button>

        </div>
        <div className={isOpenRange?"filter-range__item":"resRange"}>
            <div> 
            <input className="input-chekt" name="range"   
            id="range5"
            type="radio"
            value="range5"/>
            <label htmlFor="range5">Under 5000 amd</label>
           </div>
            <div>
            <input className="input-chekt" name="range" 
            type="radio"
             id="range20"
             value="range20"/>
            <label htmlFor="range20"> Under 20.000 amd</label>
            </div>
            <div>
                <input className="input-chekt" name="range" 
            type="radio"
             id="range50"
             value="range50"/>
            <label htmlFor="range50"> Under 50.000 amd</label>
            </div>
            <div>
                <input className="input-chekt" name="range" type="radio" id="range150"/>
            <label htmlFor="range150"> Under 150.000 amd</label>
            </div>
            <div> 
            <input className="input-chekt" name="range" type="radio" id="rangeplus"/>
            <label htmlFor="rangeplus"> 150.000 amd & much</label>
            </div>
          
          <div className="price-area">
         
         <div className="price__area">
         <input  type="text" className="price-item" placeholder="Min AMD" />
        <input  type="text" className="price-item" placeholder="Max AMD" />
         </div>
     
          </div>
           
      
            
            
          <button className="filter-btn">Apply</button>

        </div>
        </div>


    </div>
        
        
    
    </>)
}
export {Filter}