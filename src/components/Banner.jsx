import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import "../css/Banner.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
import image1 from "../assets/gallery/001.jpeg"
import image2 from "../assets/gallery/002.jpeg"
import image3 from "../assets/gallery/003.jpeg"
import image4 from "../assets/gallery/004.jpeg"
import image5 from "../assets/gallery/005.jpeg"
import image6 from "../assets/gallery/006.jpeg"
import image7 from "../assets/gallery/007.jpeg"
const promisebanner = require('../assets/promisebanner.png')
const tv = "https://www.transparentpng.com/thumb/tv/96vzNe-blank-tv-frame-png.png"



const Banner = () => {
    
    

    return (
        <div className="mx-auto">
            <div className="bg-cover bg-center h-auto text-white py-16 px-6 object-fill shadow-2xl rounded-2xl sm:rounded-3xl sm:px-20 sm:py-20" style={{ backgroundImage: `url(${promisebanner})` }}>
                <div className='ertr'>
                    <div className="md:w-1/2">
                        <h2 className="title text-white">Our Program Promise a Successful International Career.</h2>
                        <p className="mt-6 text-base leading-7 text-gray-300">Want to unlock your potential? Join Mbbs Study Overseas Programs for success, personalized services, and global job opportunnities.</p>
                    </div>
                    <div className="md:w-1/2 asdff" style={{height:'fitContent'}} >
                        {/* <img src='https://static.toiimg.com/thumb/msid-106665104,width-1280,height-720,resizemode-4/106665104.jpg' alt='galleryPicture'/> */}
                        {/* <EffectCards/> */}
                        <div style={{backgroundImage:`url(${tv})`, height:300,width:500,backgroundSize:"contain", backgroundPosition:'center',backgroundRepeat:"no-repeat", display:'flex',justifyContent:'center',alignItems:'center',overflow:"hidden"}}>
                        {/* <iframe className='iframes' src="https://www.youtube.com/embed/xpUc5DpA3-M?si=QAWxv8JqtxdG6pUv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{borderRadius:10}}></iframe> */}
                        <video className='zztt' controls>
                            <source src={require('../assets/videoplayback.mp4')} type="video/mp4"/>
                        </video>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-start gap-x-6 dfgt'>
                    <Link
                        to="/connect"
                        className="btn bg-white text-primary hover:bg-gray-300"
                    >
                        Contact Us
                    </Link>
                    <Link to="/programs" className="text-sm font-semibold flex gap-1.5 items-center leading-6 text-white hover:text-gray-300 duration-300 transition-colors">
                        Show Gallery <FaArrowRight />
                    </Link>
                </div>
            </div>
            <br />
        </div>
    )
}

const EffectCards = ()=>{
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
      };

    return(
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper" style={{marginTop:1}}
      >
        <SwiperSlide style={{border:"2px solid #70467E"}}><img src={image1} alt='galleryPicture'/></SwiperSlide>
        <SwiperSlide style={{border:"2px solid #70467E"}}><img src={image2} alt='galleryPicture'/></SwiperSlide>
        <SwiperSlide style={{border:"2px solid #70467E"}}><img src={image3} alt='galleryPicture'/></SwiperSlide>
        <SwiperSlide style={{border:"2px solid #70467E"}}><img src={image4} alt='galleryPicture'/></SwiperSlide>
        <SwiperSlide style={{border:"2px solid #70467E"}}><img src={image5} alt='galleryPicture'/></SwiperSlide>
        <SwiperSlide style={{border:"2px solid #70467E"}}><img src={image6} alt='galleryPicture'/></SwiperSlide>
        <SwiperSlide style={{border:"2px solid #70467E"}}><img src={image7} alt='galleryPicture'/></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
    )
}

export default Banner