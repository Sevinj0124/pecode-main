import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const Career = () => {
  return (
    <div className="row">

    
    <div className=' col-12  p-5'>
 <Swiper
        slidesPerView={3}
        spaceBetween={30}
       autoplay = {
        {
          delay:2500,
          disableOnInteraction: false,
        }
       }
       
        className="mySwiper"
      >
        <SwiperSlide><img src="/assets/images/swiper1.svg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/images/swiper2.svg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/images/swiper3.svg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/images/swiper4.svg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/images/swiper5.svg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/images/swiper1.svg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/images/swiper2.svg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/images/swiper3.svg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/images/swiper4.svg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/images/swiper5.svg" alt="" /></SwiperSlide>
       
 
      </Swiper>

    </div>
    </div>
  )
}

export default Career