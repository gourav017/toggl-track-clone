import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

// export const RequireAuth = ({ children }) => {
//   const { isAuth } = useSelector((state) => state.auth);
//   const { pathname } = useLocation();

//   if (isAuth) {
//     return children;
//   } else {
//     return (
      
//       <Navigate
//         to="/login"
//         state={{ from: pathname }}
//         replace
        
//       />
//     );
//   }
// }

const RequireAuth = ({ children }) => {

  const {isAuth} = useSelector((state)=>state.auth);
    
    const location = useLocation ();
    const from = {
        pathname:location.pathname,
    }
    console.log("from",from)
   if(isAuth) return children;
   return <Navigate to ={"/login"} state={from} replace/>
};

export default RequireAuth;
