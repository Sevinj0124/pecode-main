import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import React from 'react'


// komponentler gelecek
import NavbarKOmponenti from './components/Navbar'
import Introduction from './components/Introduction'
import ArticlesSection from './components/ArticlesSection'

function App() {


  return (
    <>
  <NavbarKOmponenti/>  
 <Introduction/>
 <ArticlesSection/>
</>
)
}

export default App
