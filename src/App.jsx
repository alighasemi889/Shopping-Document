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
// function About() {
//   return (
//     <div>
//       <h1>سلام خوش امدید برادر عزیز</h1>
//       <div className="about__image">
//         <img data-pic="one" src={image} alt="" />
//         <img data-pic="two" src={image} alt="" />
//         <img data-pic="third" src={image} alt="" />
//       </div>
//     </div>
//   )
// }

// function Contact() {
//   return <h2>تماس با ما</h2>;
// }

// navbar
// function Navbar({ sidebarOpen, setSidebarOpen }) {
//   return (
//     <header>
//       <div className='menu__Wrapper'>
//         <ul>
//           <div className="image__container">
//             <img src={headerLogo} alt="" className="header__logo" />
//           </div>
//           <li className="hidden">
//             <Link to="/">لوازم ارایشی</Link>
//           </li>
//            <li className="hidden">
//             <Link to="/">مراقبت از مو </Link>
//           </li>
//           <li>
//             <Link to="/about">مراقبت از پوست</Link>
//           </li>
//           <li>
//             <Link to="/contact">ارتباط با ما</Link>
//           </li>
//           <button className="mobile-button" onClick={() => setSidebarOpen(!sidebarOpen)}>
//             {sidebarOpen ? "بستن منو" : "باز کردن منو"}
//           </button>
//         </ul>
//       </div>
//     </header>
//   )
// }

// navbar mobile
// function Mobilenavbar({ open }) {
//   if (!open) return null;
//   return (
//     <header className="mobile-sidebar">
//       <ul className="list">
//         <li><a href="#">لوازم ارایشی</a></li>
//         <li><a href="#">مراقبت از پوست</a></li>
//         <li><a href="#">محصصولات</a></li>
//         <li><a href="#"> ثبت نام</a></li>
//       </ul>
//     </header>
//   )
// }

function App() {

  // const [sidebarOpen, setSidebarOpen] = useState(false);
  return <Documentation/>
  
}

export default App;
