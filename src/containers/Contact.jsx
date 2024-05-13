import React, { useEffect, useRef } from 'react'
import { ReactTyped } from 'react-typed'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {


  const form = useRef ()
 const mesajiGonder = function(e) {
    e.preventDefault()
    emailjs
      .sendForm('service_3ffnav4', 'template_5k1w0he', form.current, {
        publicKey: 'OohcDubntUHS9eEuR',
      })
      .then(
        () => {
            form.current.reset()
          console.log('SUCCESS!');
          toast.success("Muraciyetiniz qeyde alindi")
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Serverde xeta var.Biraz sonra cehd edin.")
        },
      );
 }

    return (
    <div>
            <ReactTyped
      strings={[
        "Ready to bring your idea to life?",
        "Xidmet seviyyesi olculmesi meqsedi",
        "Lorem ipsum dolor sit",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
      className='h3 d-flex justify-content-center'
    >
    </ReactTyped>


<div className="contacts-container my-5 position-relative">
  <img src="/assets/icons/bezek.svg" alt="" className='footer-left' />
  <img src="/assets/icons/bezek2.svg" alt="" className='footer-right' />
  <img src="/assets/icons/bezek3.svg" alt="" className='footer-right-ulduz' />
  <img src="/assets/icons/bezek4.svg" alt="" className='footer-right-daire' />
  <img src="/assets/icons/bezek5.svg" alt="" className='footer-left-yarim-daire' />
  <img src="/assets/icons/bezek6.svg" alt="" className='footer-left-daire' />
  <img src="/assets/icons/bezek7.svg" alt="" className='footer-left-kvadrat' />
  

    <div className="container d-flex justify-content-center ">
    <form onSubmit={mesajiGonder} className='bg-dark form p-5' ref={form}>
    <h4 className='text-white'>Get in touch</h4>
    <p className='text-secondary'>Describe your issue below. Our manager will contact you as soon as possible.</p>
        <div className='forum-group'>
            {/* name SQL MONGOOSE Sutunun adidir */}
            <input type="text" name='name' placeholder='Name' className='form-control  shadow-none text-white' />
        </div>

        <div className='forum-group my-4'>
            <input type="email" name='email' placeholder='Email' className='form-control  shadow-none text-white' />
        </div>

        <div className='forum-group'>
       <textarea className='form-control shadow-none text-white' name="mesaj" id=""  placeholder='Mesajiniz'  ></textarea>
        </div>
<div className="button">
<button> Send</button>
</div>
       
</form>
    </div>
    <ToastContainer />
    
</div>
    </div>
  )
}

export default Contact