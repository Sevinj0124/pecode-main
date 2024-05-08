import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className=' bg-dark'>
        <div className="container footer">
        <div className="row">
    <div className="col-12 col-md-4">
        <img src="/assets/images/footerLogo.svg" alt="" />
    </div>
    <div className="col-12 col-md-4">
        <h3 className='text-white'>Contact Us</h3>
        <div className="mail">
            <p className='text-secondary'> If you want to implement your business ideas: </p>
            <a href='mailto:' className='text-white'> hello@pecodesoftware.com</a>
        </div>
        <div className="mail">
            <p className='text-secondary'>If you are looking for new career opportunities:</p>
            <a href='mailto:' className='text-white'>career@pecodesoftware.com</a>
        </div>
    
    </div>
    <div className="footer-icons col-12 col-md-4">
<h4 className='text-white'>Follow us</h4>
<div className="icons d-flex gap-3">
    <a href=""><img src="/assets/icons/instagram.svg" alt="" />
    </a>
    <a href=""><img src="/assets/icons/behance.svg" alt="" />
    </a>
    <a href=""><img src="/assets/icons/linkedin.svg" alt="" />
    </a>
    <a href=""><img src="/assets/icons/aypara.svg" alt="" />
    </a>
    <a href=""><img src="/assets/icons/top.svg" alt="" />
    </a>


</div>
 <address className='text-white my-4'>
 Akademika Andriya Sakharova St, 37, Lviv, Lviv Oblast, Ukraine, 79000
 </address>
    </div>
</div>
<p className='text-white text-center mt-5'> &copy; {new Date().getFullYear()} Pecode Software</p>
    </div>
        </div>

  )
}

export default Footer