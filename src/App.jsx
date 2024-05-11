import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import React from 'react'


// komponentler gelecek
import NavbarKOmponenti from './components/Navbar'
import Introduction from './components/Introduction'
import ArticlesSection from './components/ArticlesSection'

// *Marshrutlarin qurulmasi
import {BrowserRouter,Routes,Route, Router} from "react-router-dom"
import Footer from './components/Footer'
import WhatWeDo from './containers/WhatWeDo'
import NotFound from './containers/NotFound'
import Career from './containers/Career'
import Blog from './containers/Blog'
import Contact from './containers/Contact'
import Home from './containers/Home'

function App() {


  return (
    <>
    <BrowserRouter >
    <div className="container">

    <NavbarKOmponenti />  
 <Introduction />
 
    </div>
<Routes>
<Route path='/' element={<Home />}/>
<Route path='/what-we-do' element={<WhatWeDo />} />
<Route path='/kariyera' element={<Career />}/>
<Route path='/contact' element={<Contact />}/>
<Route path='/blog' element={<Blog />}/>
<Route  path='*' element={<NotFound />}/>
</Routes>
    <Footer />

    </BrowserRouter >
</>
)
}

export default App
