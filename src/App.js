import React from 'react';
import Header from './components/Header';
import {Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import PlaceOrder from './components/PlaceOrder';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import "./components/header.css";
import Error from './components/Error';
import "./App.css";


const App = () => {
  return (
    <>
      <Header/>
    
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
