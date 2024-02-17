import { BasicSelect } from "../../../BasicSelect"
import "../../../../css/product.css"
import { Filter } from "../../../Filter"
import { Card } from "../../../Card"
import { PinkArea } from "../../../PinkArea"
import filterImg from  "../../../../images/filter.svg"
import sortImg from "../../../../images/sort.svg"
import down from "../../../../images/down.png"
import { useState } from "react"
import { Catalog } from "../../../Catalog"
import rigth from "../../../../images/navigate-back.svg"
import row from "../../../../images/row.png"
import { Shop } from "../../../Shop"

const IndoorPlants=()=>{
    const [openFilter, setOpenFilter]=useState(false)
    const [isOpenColor, setIsOpenColor] = useState(true);
    const [isOpenRange,setIsOpenRange]=useState(true)
    const [isOpenSort,setIsOpenSort]=useState(false)
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "kj",
            price: "2000"
        },
        {
            id: 2,
            name: "name 2",
            price: "4000"
        }
    ])

    return(
        <>
        <div className="product-top">
                   <div className="prosuct__text">
                    <p>
                    Catalog / Plants / 
                    <span className="green__text">Big indoor plants trees</span>
                    </p></div> 
                    <div className="respons__sord-filter">
                        <div className="respons__sord-filter-item" 
                          onClick={()=>setOpenFilter(!openFilter)}>
                             <img src={filterImg} alt="filterImg" />
                            <p>Filter</p>
                        </div>
                        <div className="respons__sord-filter-item"
                        onClick={()=>setIsOpenSort(!isOpenSort)}>
                        <img src={sortImg} alt="sortImg" />
                        <p>Sorted</p>
                        </div>
                       
                    </div>
                    <BasicSelect />
        </div>
        <div className="product__card">
        <div className="product-down">
            <Filter />
            <Card products={products} />
        </div>
        <div className="bottom">

        <PinkArea/>
      </div>
      </div>
      <div  className="product-filter__res" style={{display:openFilter?"block":"none"}}>
        <div className="container__rescontainer__res">
        <img src={rigth} alt="rigth"  
        onClick={()=>setOpenFilter(!openFilter)} />

        
        <div>
        
        <p className="filter-text">Filter by</p>
        <img src={row} alt="row"  className="row-img"
        
        /> 
        </div>
        <Catalog/>
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
    </div>   

         <div  className="product-sort__res" style={{display:isOpenSort?"block":"none"}}>
          
                <div>
                <img src={rigth} alt="rigth"  
                onClick={()=>setIsOpenSort(!isOpenSort)} /> 
                </div>
                <div className="product-sort__res-item">
                    <p>Bestsellers</p>
                    <p>High to low price</p>
                    <p>Low to high price</p>
                    <p>New Arrivals</p>
                    <p>Name: A-Z</p>
                    <p>Name: Z-A</p>
                    <p>Sale</p>
                    <p>Today’s Offers</p>
                </div>
            </div>

        </>
    )
}
export {IndoorPlants}