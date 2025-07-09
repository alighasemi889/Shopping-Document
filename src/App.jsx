import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Documentation from './Documentation';
import "./document.css";


// import ProductSlider from "./ProductSlider";
// pages
function Home() {
  // return <h2>صفحه اصلی</h2>;
}
function Banner() {
  return (
    <div className="banner__wrap">
      <img className="banner__logo" src="./public/banner__top.gif" alt="banner__logo" />
    </div>
  )
}


function App() {

  // const [sidebarOpen, setSidebarOpen] = useState(false);
  return <Documentation/>
  
}

export default App;
