
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
export const withSetMenu = (Component) => {
  function RedirectComponent(props) {
    const [error, setError] = useState(null);
    
   
        if(props.menu.length==0){
            fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res) => res.json())

        .then((data) => props.setMenu(data.categories))
        .catch((error) => setError(error.message));
        }
        
    
    
    if (error) {
        return <div>Error: {error}</div>;
    }
    return <Component {...props} />;
  }
  return RedirectComponent;
};
