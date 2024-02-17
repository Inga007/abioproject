import React , {useState} from 'react'
import { useCollapse } from 'react-collapsed'
import { useTranslation } from "react-i18next";
function Readmore({item}) {
    const {t,i18n}=useTranslation()

    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  return (
    <div key={item.id}  className="video__area">
    <div className='video__video'>
 
  {/* <iframe width="430px" height="320px"
   src={item?.url}
   title="YouTube video player" frameborder="0" 
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
   allowfullscreen></iframe> */}
  </div>
    <div className='video__info'>
      <p className='video__name'>{item?.title}</p>
      
      {/* <div ><p className='video__text' onClick={toggleReadMore} >
      {isReadMore ? item?.description.slice(0, 200)+"..." : item?.description}


      <div > <p className='video__button' onClick={toggleReadMore} >
        <p style={{display:isReadMore?"block":"none"}} >{t("Home.readMore")} </p>
        <p style={{display:isReadMore?"none":"block"}}>{t("Home.showLess")}</p>
        
      </p>
        </div> 
        </p></div> */}


    <><p className='video__text'   >
     {item?.text.slice(0, 100) } 
    <span {...getCollapseProps()}>
      {item?.text.slice(100)}
    </span> 
    </p> 
     <p className='readMoreButton'  
     {...getToggleProps({
      onClick: () => setExpanded((prevExpanded) => !prevExpanded),
    })}>
{isExpanded ?  t("Home.showLess")  : t("Home.readMore")}
      
  
      </p> 
  
   
</>
    


   
     
     

      
      <div className='video__data'>
      <p>{item.date}</p>

     
    </div>
    </div>

 </div>
  )
}

export default Readmore