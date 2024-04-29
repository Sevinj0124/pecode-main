import React,{useRef} from 'react'
import { MdClose } from "react-icons/md";

import './Navbar.css'



const Navbar = () => {
// useRef hookdur
  const qaraMenyu = useRef ()

  const menyunuAc = () => {
    qaraMenyu.current.classList.add("aktiv")
  }

  const menyunuBagla = () => {
    qaraMenyu.current.classList.remove("aktiv")
  }
  return (
<>
    <div className="mobile-menu position-fixed" ref={qaraMenyu}>
    <MdClose className='text-white baglama-iconu' onClick={menyunuBagla} />
    <nav className="mobile-links">
      <a href="">What we do</a>
      <a href="">Career</a>
      <a href="">Contact</a>
      <a href="">Blog</a>
    </nav>
    </div>


    <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#">
        <img src="/public/assets/images/logo.svg" alt="Pecode" />
    </a>
    <button onClick={menyunuAc} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
         <li className="nav-item">
          <a className="nav-link" href="#">What we do</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Career</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  )
}


export default Navbar