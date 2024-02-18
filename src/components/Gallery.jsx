import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "../assets/gallery/001.jpeg"
import image2 from "../assets/gallery/002.jpeg"
import image3 from "../assets/gallery/003.jpeg"
import image4 from "../assets/gallery/004.jpeg"
import image5 from "../assets/gallery/005.jpeg"
import image6 from "../assets/gallery/006.jpeg"
import image7 from "../assets/gallery/007.jpeg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../css/Gallery.css';

// import required modules
import { Autoplay,Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div>
            <div className="flex flex-wrap -mx-4" >
                <div className="w-full px-4">
                    <div className="mx-auto max-w-[510px] text-center lg:mb-20">
                        {/* <span className="block mb-2 text-lg font-semibold text-primary">
                                Our Services
                            </span> */}
                        <h2 className="mb-4 title">
                            Photo Gallery
                        </h2>
                        <p className="mb-10 subdesc">
                            Some recent photos of students on Airport leaving for abroad.
                        </p>
                    </div>
                </div>
            </div>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
        style={{marginTop:1}}
      >
        <SwiperSlide style={{border:"2px solid #70467E"}}><img src={image1} alt='galleryPicture'/></SwiperSlide>
        <SwiperSlide style={{border:"2px solid #70467E"}}><img src={image3} alt='galleryPicture'/></SwiperSlide>
        <SwiperSlide style={{border:"2px solid #70467E"}}><img src={image2} alt='galleryPicture'/></SwiperSlide>
        <SwiperSlide style={{border:"2px solid #70467E"}}><img src={image4} alt='galleryPicture'/></SwiperSlide>
        <SwiperSlide style={{border:"2px solid #70467E"}}><img src={image5} alt='galleryPicture'/></SwiperSlide>
        <SwiperSlide style={{border:"2px solid #70467E"}}><img src={image6} alt='galleryPicture'/></SwiperSlide>
        <SwiperSlide style={{border:"2px solid #70467E"}}><img src={image7} alt='galleryPicture'/></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
