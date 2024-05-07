import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import React from 'react'


// komponentler gelecek
import NavbarKOmponenti from './components/Navbar'
import Introduction from './components/Introduction'
import ArticlesSection from './components/ArticlesSection'
import Footer from './components/Footer'

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
