import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import React from 'react'


// komponentler gelecek
import NavbarKOmponenti from './components/Navbar'
import Introduction from './components/Introduction'
import ArticlesSection from './components/ArticlesSection'

// *Marshrutlarin qurulmasi
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from './components/Footer'
import WhatWeDo from './containers/WhatWeDo'

function App() {


  return (
    <>
    <div className="container">
    <NavbarKOmponenti />  
 <Introduction />
 <ArticlesSection />
    </div>
    <Footer />
</>
)
}

export default App
