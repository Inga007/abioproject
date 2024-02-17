
import { useEffect, useState , useMemo} from "react"
// import data from "../Data.json"
import "../css/pagination.css";
import ReactPaginate from "react-paginate";
import prod from "../images/prod.png"
import fave from "../images/fave.png"
import shop from "../images/iconeShop.png"
import "../responsive/prod.css"
import "../css/product.css"
import "../css/filter.css"

import { Link, useParams } from "react-router-dom";
import filterImg from  "../images/filter.svg"
import sortImg from "../images/sort.svg"
import down from "../images/down.png"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Filter } from "../compomemts/Filter"
import { Catalog } from "./Catalog"
import row from "../images/row.png"
import { useTranslation } from "react-i18next";
import closeRow from "../images/closeRow.svg"
import next from "../images/next.png"
import prev from "../images/prev.png"
import multi from "../images/color/multe.svg"
import white from "../images/color/white.svg"
import Black from "../images/color/Black.svg"
import Blue from "../images/color/Blue.svg"
import Red from "../images/color/Red.svg"
import Green from "../images/color/Green.svg"
import Yellow from "../images/color/Yellow.svg"
import Brown from "../images/color/Brown.svg"
import Gray from "../images/color/Gray.svg"
import Beige from "../images/color/Beige.svg"
import Purple from "../images/color/Purple.svg"
import Silver from "../images/color/Silver.svg"
import Gold from "../images/color/Gold.svg"
import Pink from "../images/color/Pink.svg"
import Orange from "../images/color/Orange.svg"
import axios from "axios";
import { Input } from "@mui/material";

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

const Card=()=>{
  const [currentPage, setCurrentPage] = useState(1);
  // const [pageCount, setPageCount] = useState(0);
  const postsPerPage =12

  const [openFilter, setOpenFilter]=useState(false)
  const [isOpenColor, setIsOpenColor] = useState(true);
  const [isOpenRange,setIsOpenRange]=useState(true)
  const [isOpenSort,setIsOpenSort]=useState(false)

  const [sportList, setSportList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [color, setColor] = useState('')
  const [filterTags, setFilterTags] = useState('')
  const [first, setFirst] = useState(0)
  const [last, setLast] = useState(0)

  const classes = useStyles();

  let url = `https://abio.am:8443`;


  const {t,i18n}=useTranslation()



  const handleChartClick = (e) => {
    e.preventDefault();
    
  }
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  const [personName, setPersonName] = useState([]);
  const handleChangeMultiple = (event) => {
    
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };
 
  
 
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    setFilterTags('')
    setColor('')
    
  };
  const handleChangeMob = (event) => {
    setSelectedCategory(event.target.value);
    
    setIsOpenSort(!isOpenSort)
    
  };

  const handlefilter = (event) => {
    if (event.target.value  === filterTags ) {
      setFilterTags("");
    } else {
      setFilterTags(event.target.value);
    }
  //  setFilterTags(event.target.value);

   
   
 };

const [clickedcolor, setclickedcolor] = useState('')
const handlecolorfilter = (event) => {
  if(event.target.value === color){
    return  setColor('')
  }
else{
    return setColor(event.target.value);
  }

 };
 function handleClickcolor(ind){

  const slider = color_content.id
  setclickedcolor(slider)

 }
  const {category2} = useParams()
  const {category3} = useParams()
  const {category1} = useParams()
  const {productCode}=useParams()

  const [pages, setpages] = useState(0)
 
  const [addHeader, setaddHeaders] = useState([])


  const [cartItems, setCartItems] = useState(() => {
    const ls = localStorage.getItem("bookmarks");
    if (ls) return JSON.parse(ls);
    else return [];
  });
  
  
    useEffect(() => {
   
      localStorage.setItem("bookmarks", JSON.stringify(cartItems));
    
    }, [cartItems]);
    useEffect(() => {
      setCartItems(JSON.parse(localStorage.getItem("bookmarks")) || [])
  
  }, [localStorage.getItem("bookmarks")]);
   

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


  let params ='';

 if(category3){
  params = `category1=${category1}&category2=${category2}&category3=${category3}`
 }else{
  params = `category1=${category1}&category2=${category2}`
 }


//  const { current: myArray } = useRef(["one", "two", "three"]);
 
 useEffect( () => {
  const isCanseled = axios.CancelToken.source();
  let lang =i18n.language.slice(0,2).toUpperCase()
  
  axios.get(`${url}/abio/public/filter?${params}&page=${currentPage-1}&size=12&language=${lang}`
  ,{
    isCanseled: isCanseled.token
  }
  ).then( response => {
    setpages(response.headers.page_size)
    setSportList(response.data)    
   
  }
    )
 return ()=>{
  isCanseled.cancel()
 }

    // getData();
  }, [currentPage,category2, params,category3, i18n.language]);


useEffect(() => {
  filterHandler()
 
            
  
},[i18n.language, pages])


 
  const onAdd = async  (prod) => {
    const headers = JSON.parse(localStorage.getItem("headers")) ;
    
       const response = await axios.post(`${url}/abio/public/cart/addProduct?productCode=${prod}&quantity=1`,{},
      {
      headers: {
        
        'X-CART-ID':  headers
      }
    }).then(res =>setaddHeaders(res.data));
    
    
      };


      



  


  const color_content=[

    {id: 0, 
      color: 'color-white' ,
      name: "W",
      title:t("Filter.white"),
      title2:t("Filter.white2"),
      img:white
         
  },
  {
    id: 1, 
    color: 'B',
    name: 'B',
    title:t("Filter.black"),
    img:Black
  },
  {
    id: 2, 
    color: 'BL',
    name: 'BL',
    title:t("Filter.blue"),
    img:Blue
  },
  {id: 3, 
    color: 'color-red',
    name: 'R',
    title:t("Filter.red"),
    img:Red

  },
  {id: 4, 
    color: 'color-green',
    name: 'GR',
    title:t("Filter.green"),
    img:Green

    
  },
  {
    id:5,
    name:"Y",
    title:t("Filter.yellow"),
    img:Yellow
  },
  {
    id:6,
    name:"BR",
    title:t("Filter.brown"),
    img:Brown
  },  
  {
    id:7,
    name:"G",
    title:t("Filter.gray"),
    img:Gray
  },
  {id: 8, 
  
    name: 'I',
    title:t("Filter.Ivory"),
    img:Beige
  },

  {id: 9, 
    color: 'color-purple',
    name: 'V',
    title:t("Filter.Purple"),
    // title:t("Filter.Purple2"),
   
    img:Purple

    
  },
  {
    id: 10 ,
   
    name: 'P',
    title:t("Filter.pink"),

    img: Pink
    
  },
  {
    id: 11, 
    name: 'GL',
    title:t("Filter.gold"),
    
    img: Gold

    
  },
  {
    id: 12, 
    name: 'S',
    title:t("Filter.silver"),
   
    img: Silver

    
  },
  {
    id: 13, 
    name: 'O',
    title:t("Filter.orange"),
 
    img: Orange

    
  },
  {
    id: 14, 
   
    name: 'C',
    title:t("Filter.multi"),
    title2:t("Filter.multi2"),
    img:multi

    
  },
  // {
  //   id: 15, 
   
  //   name: '',
  //   title:t("Filter.multi"),
  //   title2:t("Filter.multi2"),
  //   img:multi

    
  // },
 
 
  ]
  

 const filterHandler = () => {
          
        
         if(color === 'R'){
          if(filterTags === '10' ){
            return [...sportList].filter((el) => el?.colorCodes?.includes('R') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= 5000)
          }
          else if(filterTags === '20' ){
            return [...sportList].filter((el) => el?.colorCodes?.includes('R') &&  (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 5000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=20000)
          }else if(filterTags === '30'){
            return [...sportList].filter((el) => el?.colorCodes?.includes('R') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 20000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=50000)
          }else if(filterTags === '40'){
            return [...sportList].filter((el) => el?.colorCodes?.includes('R') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 50000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=150000)
          }else if(filterTags === '50' ){
            return [...sportList].filter((el) => el?.colorCodes?.includes('R') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 150000 )
          }else if(filterTags){
            return [...sportList].filter((el) => el?.colorCodes?.includes('R')  && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= first &&  (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= last)
          } else{
            return [...sportList].filter((el) => el?.colorCodes?.includes('R')  )
          }
          
           
            
          }
          else if(color === 'W'){
            if(filterTags === '10' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('W') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= 5000)
            }
            else if(filterTags === '20' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('W') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 5000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=20000)
            }else if(filterTags === '30'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('W') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 20000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=50000)
            }else if(filterTags === '40'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('W') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 50000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=150000)
            }else if(filterTags === '50' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('W') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 150000 )
            }else if(filterTags){
              return [...sportList].filter((el) => el?.colorCodes?.includes('W')  && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= first &&  (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= last)
            } else{
              return [...sportList].filter((el) => el?.colorCodes?.includes('W')  )
            }
            
           
          }
         
          else if(color === "B"){
            if(filterTags === '10' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('B') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= 5000)
            }
            else if(filterTags === '20' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('B') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 5000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=20000)
            }else if(filterTags === '30'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('B') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 20000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=50000)
            }else if(filterTags === '40'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('B') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 50000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=150000)
            }else if(filterTags === '50' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('B') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 150000 )
            }else if(filterTags){
              return [...sportList].filter((el) => el?.colorCodes?.includes('B')  && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= first &&  (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= last)
            } else{
              return [...sportList].filter((el) => el?.colorCodes?.includes('B')  )
            }
          }
          else if(color === "BL"){
            if(filterTags === '10' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('BL') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= 5000)
            }
            else if(filterTags === '20' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('BL') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 5000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=20000)
            }else if(filterTags === '30'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('BL') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 20000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=50000)
            }else if(filterTags === '40'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('BL') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 50000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=150000)
            }else if(filterTags === '50' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('BL') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 150000 )
            }else if(filterTags){
              return [...sportList].filter((el) => el?.colorCodes?.includes('BL')  && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= first &&  (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= last)
            } else{
              return [...sportList].filter((el) => el?.colorCodes?.includes('BL')  )
            }
          }
          else if(color === 'GR'){
            if(filterTags === '10' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('GR') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= 5000)
            }
            else if(filterTags === '20' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('GR') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 5000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=20000)
            }else if(filterTags === '30'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('GR') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 20000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=50000)
            }else if(filterTags === '40'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('GR') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 50000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=150000)
            }else if(filterTags === '50' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('GR') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 150000 )
            }else if(filterTags){
              return [...sportList].filter((el) => el?.colorCodes?.includes('GR')  && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= first &&  (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= last)
            } else{
              return [...sportList].filter((el) => el?.colorCodes?.includes('GR')  )
            }
          }
          else if(color === 'Y'){
            if(filterTags === '10' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('Y') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= 5000)
            }
            else if(filterTags === '20' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('Y') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 5000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=20000)
            }else if(filterTags === '30'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('Y') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 20000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=50000)
            }else if(filterTags === '40'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('Y') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 50000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=150000)
            }else if(filterTags === '50' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('Y') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 150000 )
            }else if(filterTags){
              return [...sportList].filter((el) => el?.colorCodes?.includes('Y')  && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= first &&  (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= last)
            } else{
              return [...sportList].filter((el) => el?.colorCodes?.includes('Y')  )
            }
          }
          else if(color === 'BR'){
            if(filterTags === '10' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('BR') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= 5000)
            }
            else if(filterTags === '20' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('BR') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 5000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=20000)
            }else if(filterTags === '30'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('BR') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 20000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=50000)
            }else if(filterTags === '40'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('BR') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 50000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=150000)
            }else if(filterTags === '50' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('BR') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 150000 )
            }else if(filterTags){
              return [...sportList].filter((el) => el?.colorCodes?.includes('BR')  && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= first &&  (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= last)
            } else{
              return [...sportList].filter((el) => el?.colorCodes?.includes('BR')  )
            }
          }
          else if(color === 'G'){
            if(filterTags === '10' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('G') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= 5000)
            }
            else if(filterTags === '20' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('G') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 5000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=20000)
            }else if(filterTags === '30'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('G') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 20000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=50000)
            }else if(filterTags === '40'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('G') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 50000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=150000)
            }else if(filterTags === '50' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('G') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 150000 )
            }else if(filterTags){
              return [...sportList].filter((el) => el?.colorCodes?.includes('G')  && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= first &&  (el?.discountPrice === 0 ? el?.price : el?.discountPrice)<= last)
            } else{
              return [...sportList].filter((el) => el?.colorCodes?.includes('G')  )
            }
          }
          else if(color === 'I'){
            if(filterTags === '10' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('I') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= 5000)
            }
            else if(filterTags === '20' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('I') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 5000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=20000)
            }else if(filterTags === '30'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('I') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 20000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=50000)
            }else if(filterTags === '40'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('I') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 50000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=150000)
            }else if(filterTags === '50' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('I') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 150000 )
            }else if(filterTags){
              return [...sportList].filter((el) => el?.colorCodes?.includes('I')  && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= first &&  (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= last)
            } else{
              return [...sportList].filter((el) => el?.colorCodes?.includes('I')  )
            }
          }
          else if(color === 'GL'){
            if(filterTags === '10' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('GL') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= 5000)
            }
            else if(filterTags === '20' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('GL') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 5000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=20000)
            }else if(filterTags === '30'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('GL') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 20000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=50000)
            }else if(filterTags === '40'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('GL') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 50000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=150000)
            }else if(filterTags === '50' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('GL') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 150000 )
            }else if(filterTags){
              return [...sportList].filter((el) => el?.colorCodes?.includes('GL')  && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= first &&  (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= last)
            } else{
              return [...sportList].filter((el) => el?.colorCodes?.includes('GL')  )
            }
          }
          else if(color === 'P'){
            if(filterTags === '10' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('P') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= 5000)
            }
            else if(filterTags === '20' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('P') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 5000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=20000)
            }else if(filterTags === '30'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('P') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 20000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=50000)
            }else if(filterTags === '40'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('P') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 50000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=150000)
            }else if(filterTags === '50' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('P') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 150000 )
            }else if(filterTags){
              return [...sportList].filter((el) => el?.colorCodes?.includes('P')  && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= first &&  (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= last)
            } else{
              return [...sportList].filter((el) => el?.colorCodes?.includes('P')  )
            }
          }
          else if(color === 'S'){
            if(filterTags === '10' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('S') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= 5000)
            }
            else if(filterTags === '20' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('S') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 5000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=20000)
            }else if(filterTags === '30'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('S') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 20000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=50000)
            }else if(filterTags === '40'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('S') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 50000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=150000)
            }else if(filterTags === '50' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('S') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 150000 )
            }else if(filterTags){
              return [...sportList].filter((el) => el?.colorCodes?.includes('S')  && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= first &&  (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= last)
            } else{
              return [...sportList].filter((el) => el?.colorCodes?.includes('S')  )
            }
          }
          else if(color === 'O'){
            if(filterTags === '10' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('O') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= 5000)
            }
            else if(filterTags === '20' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('O') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 5000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=20000)
            }else if(filterTags === '30'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('O') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 20000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=50000)
            }else if(filterTags === '40'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('O') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 50000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=150000)
            }else if(filterTags === '50' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('O') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 150000 )
            }else if(filterTags){
              return [...sportList].filter((el) => el?.colorCodes?.includes('O')  && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= first &&  (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= last)
            } else{
              return [...sportList].filter((el) => el?.colorCodes?.includes('O')  )
            }
          }
          else if(color === 'V'){

            if(filterTags === '10' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('V') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= 5000)
            }
            else if(filterTags === '20' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('V') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 5000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=20000)
            }else if(filterTags === '30'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('V') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 20000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=50000)
            }else if(filterTags === '40'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('V') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 50000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=150000)
            }else if(filterTags === '50' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('V') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 150000 )
            }else if(filterTags){
              return [...sportList].filter((el) => el?.colorCodes?.includes('V')  && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= first &&  (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= last)
            } else{
              return [...sportList].filter((el) => el?.colorCodes?.includes('V')  )
            }
          }
          else if(color === 'C'){

            if(filterTags === '10' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('C') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= 5000)
            }
            else if(filterTags === '20' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('C') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 5000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=20000)
            }else if(filterTags === '30'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('C') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 20000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=50000)
            }else if(filterTags === '40'){
              return [...sportList].filter((el) => el?.colorCodes?.includes('C') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 50000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=150000)
            }else if(filterTags === '50' ){
              return [...sportList].filter((el) => el?.colorCodes?.includes('C') && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 150000 )
            }else if(filterTags){
              return [...sportList].filter((el) => el?.colorCodes?.includes('C')  && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= first &&  (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= last)
            } else{
              return [...sportList].filter((el) => el?.colorCodes?.includes('C')  )
            }
          }
         else if(filterTags === '10'  ){
           
          return sportList.filter(el=> (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= 5000  )
          }
          else if(filterTags === '20' ){
           
          return sportList.filter(el=>(el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 5000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=20000 )
          }
          else if(filterTags === '30' ){
          return sportList.filter(el=> (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 20000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=50000 )
          }
          else if(filterTags === '40' ){
          return sportList.filter(el=> (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 50000 && (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <=150000 )
          }
          else if(filterTags === '50' ){
          return sportList.filter(el=> (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= 150000 )
          }
          else if(filterTags ){
            
            return sportList.filter(el=> (el?.discountPrice === 0 ? el?.price : el?.discountPrice) >= first &&  (el?.discountPrice === 0 ? el?.price : el?.discountPrice) <= last  )
          }
        
          
          else if(selectedCategory == 20){
            
 
            return sportList.filter((el) => el.select.includes('bestseller' )     )

              
          }
          else if(selectedCategory == 30){
            setFilterTags('')
            //  console.log(filterTags)
          return sportList.sort((a, b) => (b?.discountPrice === 0 ? b?.price : b?.discountPrice)- (a?.discountPrice === 0 ? a?.price : a?.discountPrice));
          }
          else if(selectedCategory == 40){
            return sportList.sort((a, b) =>   (a?.discountPrice === 0 ? a?.price : a?.discountPrice)- (b?.discountPrice === 0 ? b?.price : b?.discountPrice)) 
          }
          else if(selectedCategory == 50){
          // return sportList.filter((el) => el.newArrival.includes('New')      )
          return sportList.filter((el) => el?.newArrival === 'true'      )

              
        }
          else if(selectedCategory == 60){
            return sportList.sort((a, b) =>a.name > b.name ? 1 : -1)
          }
          else if(selectedCategory == 70){
            return sportList.sort((a, b) => a.name > b.name ? -1 : 1 )
          }
          else if(selectedCategory == 80){
          return sportList.filter((el) => el.select.includes('Sale' )      )

              
        }
        else if(selectedCategory === 90){
          // return sportList.filter((el) => el.todayOffer.includes('Offer' )  )
           return sportList.filter((el) => el?.todayOffer === 'true'  )

              
        }

            
          return  sportList ;
          
          


        }

        var filteredList = useMemo(filterHandler,[filterTags, selectedCategory, color, sportList]);
  
 

       
        
      // const lastPostIndex = currentPage * postsPerPage;

      
      // const indexOfFirstPost = lastPostIndex - postsPerPage;

    
    const currentPosts =[...filteredList].map((item) => {

        return (

            <>
           
          
            <div key={item?.productCode}>
            <Link  className="product__link" to={`/card/${item?.productCode}`}>
            <div className="product my_product_card">
                
           <svg onClick={handleChartClick}
           onMouseDown={()=>favadd(item)}  className="favoritSvg"
           width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="27" height="27" rx="10" fill="#FDFDFF"/>
            <path d="M13.0772 21.0635L6.34668 14.333C4.5542 12.5405 4.50276 9.72478 6.1484 8.07914L6.14856 8.07898C7.79312 6.43292 10.6087 6.48473 12.4022 8.27742C12.4023 8.27745 12.4023 8.27747 12.4023 8.2775L12.7245 8.59973L13.0781 8.95329L13.4316 8.59973L13.7539 8.2775C13.7539 8.27747 13.7539 8.27745 13.754 8.27742C15.5223 6.50988 18.2843 6.4347 19.9378 8.00996L20.0069 8.07906C21.6517 9.72469 21.6003 12.5404 19.8071 14.3329L19.807 14.333L13.0772 21.0635Z" stroke="#0E0E0E"/>
            </svg>
           
            <img className="product-img" src={`${url}/abio/public/files?productCode=${item?.productCode}&fileName=${item?.pictureIds[0]}`}/>
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
                    <p className="new-price"> {item?.discount === 0 ? item?.price.toLocaleString() : item?.discountPrice.toLocaleString()} AMD</p>
                     <p className="old-price">{item?.discount > 0  ? item?.price.toLocaleString(): null} </p>
                    </div>
{/*       
                <img  onClick={handleChartClick}
             className="shopIcon" src={shop} alt="shop"  onMouseDown={()=>onAdd(item?.productCode)} /> */}

<svg  onClick={handleChartClick} onMouseDown={()=>onAdd(item?.productCode)}
             className="shopIcon" width="27" height="27" viewBox="0 0 27 27" fill="none"  xmlns="http://www.w3.org/2000/svg">
<rect width="27" height="27" rx="10" fill="#FDFDFF"/>
<path d="M7.875 24.75C7.25625 24.75 6.72675 24.5299 6.2865 24.0896C5.8455 23.6486 5.625 23.1187 5.625 22.5C5.625 21.8813 5.8455 21.3514 6.2865 20.9104C6.72675 20.4701 7.25625 20.25 7.875 20.25C8.49375 20.25 9.02325 20.4701 9.4635 20.9104C9.9045 21.3514 10.125 21.8813 10.125 22.5C10.125 23.1187 9.9045 23.6486 9.4635 24.0896C9.02325 24.5299 8.49375 24.75 7.875 24.75ZM19.125 24.75C18.5063 24.75 17.9767 24.5299 17.5365 24.0896C17.0955 23.6486 16.875 23.1187 16.875 22.5C16.875 21.8813 17.0955 21.3514 17.5365 20.9104C17.9767 20.4701 18.5063 20.25 19.125 20.25C19.7437 20.25 20.2736 20.4701 20.7146 20.9104C21.1549 21.3514 21.375 21.8813 21.375 22.5C21.375 23.1187 21.1549 23.6486 20.7146 24.0896C20.2736 24.5299 19.7437 24.75 19.125 24.75ZM6.91875 6.75L9.61875 12.375H17.4937L20.5875 6.75H6.91875ZM7.875 19.125C7.03125 19.125 6.39375 18.7545 5.9625 18.0135C5.53125 17.2732 5.5125 16.5375 5.90625 15.8063L7.425 13.05L3.375 4.5H2.22188C1.90313 4.5 1.64062 4.392 1.43437 4.176C1.22812 3.96075 1.125 3.69375 1.125 3.375C1.125 3.05625 1.233 2.78887 1.449 2.57287C1.66425 2.35762 1.93125 2.25 2.25 2.25H4.07812C4.28437 2.25 4.48125 2.30625 4.66875 2.41875C4.85625 2.53125 4.99688 2.69063 5.09063 2.89688L5.85 4.5H22.4438C22.95 4.5 23.2969 4.6875 23.4844 5.0625C23.6719 5.4375 23.6625 5.83125 23.4563 6.24375L19.4625 13.4437C19.2562 13.8187 18.9844 14.1094 18.6469 14.3156C18.3094 14.5219 17.925 14.625 17.4937 14.625H9.1125L7.875 16.875H20.2781C20.5969 16.875 20.8594 16.9826 21.0656 17.1979C21.2719 17.4139 21.375 17.6812 21.375 18C21.375 18.3188 21.267 18.5858 21.051 18.801C20.8358 19.017 20.5688 19.125 20.25 19.125H7.875ZM9.61875 12.375H17.4937H9.61875Z" fill="#0E0E0E"/>
</svg>
            </div>
            </div>
            </Link>
            </div>
            </>
        );
    });
    
    const handlePageClick = (event) => {
      const newOffset = (event.selected +1) ;
      window.scrollTo({top: 50,behavior: 'smooth'});
      setCurrentPage(newOffset);
      
      
    };
    return(
        <>
                <div className="container">
        
         <div className="product-top">
                   <div className="prosuct__text">
                    <p>
                    {t("mainMenu.catalog1")} /  {category2} 
                    <span className="green__text"> /{category3 ? category3 : null}</span>
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
                    <form  >
    <Box className='basicSelect' sx={{ minWidth: 250 }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" sx={{ minWidth: 250 }} className={classes.root}>{t("Filter.sort")}</InputLabel>
        
        <Select
          
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCategory}
          label={t("Filter.sort")}
          onChange={handleChange}
          
          
        >
         
          <MenuItem className='sort_item' disabled   name = "20"  value={20}>{t("Filter.bestsellers")}</MenuItem>
          <MenuItem className='sort_item' name = "30"  value={30}>{t("Filter.lowprice")}</MenuItem>
          <MenuItem className='sort_item' name = "40" value={40}>{t("Filter.highprice")}</MenuItem>
          <MenuItem className='sort_item'  name = "50" value={50}>{t("Filter.newarrivals")}</MenuItem>
          <MenuItem className='sort_item' name = "60" value={60}>{t("Filter.nameA-Z")}</MenuItem>
          <MenuItem className='sort_item' name = "70" value={70}>{t("Filter.nameZ-A")}</MenuItem>
          <MenuItem className='sort_item'disabled  name = "80" value={80}>{t("Filter.sale")}</MenuItem>
          <MenuItem className='sort_item'  name = "90" value={90}>{t("Filter.offers")}</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </form>
        </div>
</div>

        <div className="product__card">
          
        <div className="product-down">
        <div className="container card__container">

        <div className="product-filter">
    <Catalog/>
        <div>
        
        <p className="filter-text">{t("Filter.filter")}</p>
        <img src={row} alt="row"  className="row-img" /> 
        </div>
        <div onClick={() => setIsOpenColor(!isOpenColor)}  className="filter-colors">
          <div className="filter-color__block">
          <p>{t("Filter.filter")}</p>
          <img src={down} alt=""  />
            </div>  
            <div className={  isOpenColor ? "filter-color__item":"filter__cardNew"}>
                <div className="color-area">
                  
                <div className="color-area__item">
                {color_content.map((el, ind)=>{
                    return(
                        <>
                        <div className="color_content"  key= {el.id} >
                        <button  className="btn__color" value={el.name}  onClick={handlecolorfilter}> 
                        <img src={el.img} alt="color__img" onClick={()=>handleClickcolor(ind)}
                         className= {color === el.name ? ` clickedcolor ` : 'clickedcolor notClicked'}/>
                       
                        </button>
                        <p>{el.title}</p><br />
                        <p>{el.title2}</p>

    
                    </div> 
                    </>
                    )
                })
                }
                      
                
                  
                </div>
            
                </div>
                {/* <button className="filter-btn"  onClick={() =>setColor('')}>Reset</button> */}
            </div>
        </div>
        <div className="filter-range">
        <div  onClick={()=> setIsOpenRange(!isOpenRange)} className="filter-range__block">
          <p>{t("Filter.price")}</p>
          <img src={down} alt="down" className="down-img"  />
        </div> 
        <div className={isOpenRange?"filter-range__item":"newRange"}>
            <div> 
            <input className="input-chekt"
           
            id="range5"
            type="radio"
            checked={filterTags  === '10'}
            onChange={handlefilter}
            // name = '10'
            value='10'/>
           
            <label htmlFor="range5"> {t("Filter.under")} 5000 {t("Filter.amd")}</label>
           </div>
            <div>
            <input className="input-chekt" 
            name = '20'
             checked={filterTags  === '20' }
            type="radio"
             id="range20"
             onChange={handlefilter}
             value='20'/>
            <label htmlFor="range20"> 5000 {t("Filter.amd")} {t("Filter.to")} 20.000 {t("Filter.amd")}</label>
            </div>
            <div>
                <input className="input-chekt"
                  name = '30'
                 checked={filterTags  === '30'}
            type="radio"
             id="range50"
             onChange={handlefilter}
             value="30"/>
            <label htmlFor="range50"> 20.000 {t("Filter.amd")} {t("Filter.to")} 50.000 {t("Filter.amd")}</label>
            </div>
            <div>
            <input className="input-chekt" 
        name = '40'
            type="radio"
                 onChange={handlefilter}
                 checked={filterTags  === '40'}
                  value="40" 
                  id="range150"/>
            <label htmlFor="range150"> 50.000 {t("Filter.amd")} {t("Filter.to")} 150.000 {t("Filter.amd")}</label>
            </div>
            <div> 
            <input className="input-chekt"
               checked={filterTags  === '50'}
             onChange={handlefilter}
             name = '50'
              type="radio" 
              value="50" id="rangeplus"/>
            <label htmlFor="rangeplus"> 150.000 {t("Filter.amd")} {t("Filter.above")}</label>
            </div>
          
          <div className="price-area">
           
            <div className="price__area">
         <input  type="text" className="price-item" checked={filterTags  === '60'} onChange={handlefilter} placeholder={t("Filter.min","Filter.amd")} onInput={(e)=>setFirst(e.target.value)} />
        <input  type="text" className="price-item" checked={filterTags  === '60'}  onChange={handlefilter}  placeholder={t("Filter.max","Filter.amd")} onInput={(e)=>setLast(e.target.value)}/>
         </div>
     
          </div>
              
            
          {/* <button className="filter-btn" onClick={filterHandler}>{t("Filter.apply")}</button> */}

        </div>
   
        </div>


        </div>
        

      <div  style={{ display: isOpenSort ? "block" : "none" }} className="responsive__sort">
        <img src={closeRow} alt="closeRow"  onClick={() => setIsOpenSort(!isOpenSort)} />
     <div className="sortByRes">
     
        <label htmlFor="name2" onClick={() => setIsOpenSort(!isOpenSort)} className="radioLabel">
        <Input type="radio" id="name2" value={20} className="radioHide"     onChange={handleChange} disabled/>{t("Filter.bestsellers")} </label>
        <label htmlFor="name3" onClick={() => setIsOpenSort(!isOpenSort)} className="radioLabel">
        <Input type="radio" id="name3" value={30} className="radioHide" onChange={handleChange}/>{t("Filter.lowprice")} </label>
        <label htmlFor="name4" onClick={() => setIsOpenSort(!isOpenSort)} className="radioLabel">
        <Input type="radio" id="name4" value={40} className="radioHide" onChange={handleChange} />{t("Filter.highprice")} </label>
        <label htmlFor="name5" onClick={() => setIsOpenSort(!isOpenSort)} className="radioLabel">
        <Input type="radio" id="name5" value={50} className="radioHide" onChange={handleChange} disabled />{t("Filter.newarrivals")} </label>
        <label htmlFor="name6" onClick={() => setIsOpenSort(!isOpenSort)} className="radioLabel">
        <Input type="radio" id="name6" value={60} className="radioHide" onChange={handleChange}/>{t("Filter.nameA-Z")}</label>
        <label htmlFor="name7" onClick={() => setIsOpenSort(!isOpenSort)} className="radioLabel">
        <Input type="radio" id="name7" value={70} className="radioHide" onChange={handleChange}/>{t("Filter.nameZ-A")} </label>
        <label htmlFor="name8" onClick={() => setIsOpenSort(!isOpenSort)} className="radioLabel">
        <Input type="radio" id="name8" value={80} className="radioHide" onChange={handleChange} disabled/>{t("Filter.sale")} </label>
        <label htmlFor="name9" onClick={() => setIsOpenSort(!isOpenSort)} className="radioLabel">
        <Input type="radio" id="name9" value={90} className="radioHide" onChange={handleChange} disabled/>{t("Filter.offers")} </label>



    </div>
<div>
      
    </div>
      </div>
   
      <div  style={{ display: openFilter ? "block" : "none" }} className="responsive__filter">
        <img src={closeRow} alt="closeRow"  onClick={() => setOpenFilter(!openFilter)} />
        <div>
          <Catalog/>
          <div>
        
        <p className="filter-text">{t("Filter.filter")}</p>
        <img src={row} alt="row"  className="row-img" /> 
        </div>

        <div onClick={() => setIsOpenColor(!isOpenColor)}  className="filter-colors">
          <div className="filter-color__block">
          <p>{t("Filter.filter")}</p>
          <img src={down} alt=""  />
            </div>  
            <div className={  isOpenColor ? "filter-color__item":"filter__cardNew"}>
                <div className="color-area">
                  
                <div className="color-area__item">
                {color_content.map((el, ind)=>{
                    return(
                        <>
                 <div className="color_content"  key= {el.id} >
                        <button  className="btn__color" value={el.name}  onClick={handlecolorfilter}> 
                        <img src={el.img} alt="color__img"  className={el.name} />
                       
                        </button>
                        <p>{el?.title}</p><br />
                        <p>{el?.title2}</p>

                    </div> 
                    </>
                    )
                })
                }  
                </div>
    
                </div>
          
          
       
            </div>
      
        </div>
        <div className="filter-range">
        <div  onClick={()=> setIsOpenRange(!isOpenRange)} className="filter-range__block">
          <p>{t("Filter.price")}</p>
          <img src={down} alt="down" className="down-img"  />
        </div> 
        <div className="rangeRespons" style={{ display: isOpenRange ? "none" : "block" }}>
            <div> 
            <input className="input-chekt"
              checked={filterTags  === '10'}
            id="range5"
            type="radio"
            
            onChange={handlefilter}
            value="10"/>
            <label htmlFor="range5"> {t("Filter.under")} 5000 {t("Filter.amd")}</label>
           </div>
            <div>
            <input className="input-chekt" 
              checked={filterTags  === '20'}
            type="radio"
             id="range20"
             onChange={handlefilter}
             value="20"/>
            <label htmlFor="range20"> 5000 {t("Filter.amd")} {t("Filter.to")} 20.000 {t("Filter.amd")}</label>
            </div>
            <div>
                <input className="input-chekt" 
                 checked={filterTags  === '30'} 
            type="radio"
             id="range50"
             onChange={handlefilter}
             value="30"/>
            <label htmlFor="range50"> 20.000 {t("Filter.amd")} {t("Filter.to")} 50.000 {t("Filter.amd")}</label>
            </div>
            <div>
            <input className="input-chekt" 
              checked={filterTags  === '40'}
             type="radio"
                 onChange={handlefilter}
                  value="40" id="range150"/>
            <label htmlFor="range150"> 50.000 {t("Filter.amd")} {t("Filter.to")} 150.000 {t("Filter.amd")}</label>
            </div>
            <div> 
            <input className="input-chekt"
             onChange={handlefilter}
             checked={filterTags  === '50'}
             type="radio" value="50" id="rangeplus"/>
            <label htmlFor="rangeplus"> 150.000 {t("Filter.amd")} {t("Filter.above")}</label>
            </div>
          
          <div className="price-area">
         
         <div className="price__area">
         <input  type="text" className="price-item" onChange={handlefilter}  placeholder={t("Filter.min","Filter.amd")} onInput={(e)=>setFirst(e.target.value)} />
        <input  type="text" className="price-item" onChange={handlefilter} placeholder={t("Filter.max","Filter.amd")} onInput={(e)=>setLast(e.target.value)}/>
         </div>
     
          </div>
              
            
          {/* <button onClick={() => setOpenFilter(!openFilter)} className="filter-btn" >{t("Filter.apply")}</button> */}

        </div>
   
        </div>

        </div>
       
      </div>
       

<div className="prod">
        <div className="product-card">
        {sportList.length === 0 || sportList === null || filteredList.length ===0 ? (
      <div className="noProduct">
        
             <p className="noText prodText">{t("Home.noData")}</p>
             <Link to="/" className="back_home">{t("Home.back")}</Link>
              </div>
    )   : (currentPosts ) 
    
    
    }
    
    
</div>
</div>
 </div>
        </div>
        <div className="container">

      <ReactPaginate
        breakLabel="..."
        nextLabel={<img src={next} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed ={1}  
        pageRange={5}
        // pageCount={Math.ceil(sportList.length / postsPerPage)} 
        // pageCount={Math.ceil( pages/ postsPerPage)}
        pageCount={Math.ceil(pages)}   
        previousLabel={<img  src={prev} />}
        // renderOnZeroPageCount={null}
       
        renderOnZeroPageCount={() => null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      /> 
         </div>  
            </div>
  

        </>
    )
}
export {Card}