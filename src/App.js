
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import WelcomePage from './WelcomePage/WelcomePage';

import { Context } from "./context";
import { useState } from "react";
import MenuDescription from "./Menu/MenuDescription";

import ReviewsContainer from "./Reviews/ReviewsContainer";
import MenuContainer from "./Menu/MenuContainer";
import MenuDescriptionContainer from "./Menu/MenuDescriptionContainer";
import ErrorBoundary from "./ErrorBoundary";


function App() {

 
  return (
    <BrowserRouter>
      {/* <Context.Provider value={{ menuId, setMenuId }}> */}
        <div className="App">
          <ErrorBoundary>

          
            <Routes>
              <Route path="/" element={<WelcomePage/>} />
              <Route path="/menu" element={<MenuContainer/>} />       
              <Route path='/menuDescription/:id' element={<MenuDescriptionContainer/>} />
              <Route path="/reviews" element={<ReviewsContainer/>} />                    
            </Routes>
          </ErrorBoundary>
        </div>
      {/* </Context.Provider> */}
    </BrowserRouter>
  );
  
}

export default App;
