// import React from "react";
// import { useLocation } from "react-router";
// import { useEffect } from "react";

// import "../css/pagination.css";

// const Pagination = ({
//     totalPosts,
//     postsPerPage,
//     setCurrentPage,
//     currentPage,
//     props
// }) => {
//     const location = useLocation();
//     useEffect(() => {
//       window.scrollTo(0, 0);
//     }, [location]);
//     let pages = [];

//     for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//         pages.push(i);
//     }
//     pages.slice(postsPerPage * (totalPosts - 1), postsPerPage * totalPosts);
//     return (

//         <div className='pagination'>
            
//             {pages.map((page, index) => {
//                 return (
//                     <div   onClick={() => {
//                         window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
//                       }}>
//                     <button
                  
//                         key={index}
//                         onClick={() => setCurrentPage(page)}
//                         className={page == currentPage ? "active" : ""}>
//                         {page}
                        
//                     </button>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default Pagination;