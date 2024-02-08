import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "../css/UniversityHeader.css"
import banner1 from "../assets/study-mbbs-abroad-pacific-education.jpg"
import banner2 from "../assets/Untitled.png"
import banner3 from "../assets/aball.jpg"
import banner4 from "../assets/banner-abroad.jpg"
import banner5 from "../assets/banner2.jpg"
import banner6 from "../assets/banner3.jpg"
import banner7 from "../assets/banner4.jpg"
import banner8 from "../assets/banner5.jpg"

function UniversityHeader() {
  return (
    <>
    <Swiper
      
      spaceBetween={30}
      centeredSlides={true}
      speed={3000}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide ><Mainheader banner={banner1}/></SwiperSlide>
      <SwiperSlide><Mainheader banner={banner2}/></SwiperSlide>
      <SwiperSlide><Mainheader banner={banner3}/></SwiperSlide>
      <SwiperSlide><Mainheader banner={banner4}/></SwiperSlide>
      <SwiperSlide><Mainheader banner={banner5}/></SwiperSlide>
      <SwiperSlide><Mainheader banner={banner6}/></SwiperSlide>
      <SwiperSlide><Mainheader banner={banner7}/></SwiperSlide>
      <SwiperSlide><Mainheader banner={banner8}/></SwiperSlide>
    </Swiper>
    
  </>
  )
}

// backgroundColor:"rgba(0,0,0,0.4)", backgroundBlendMode:"darken"

function Mainheader({banner}) {
  return (
        <img src={banner} alt='banner1'/>
  )
}


export default UniversityHeader
