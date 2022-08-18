import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { herodata } from '../data/herodata';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";
const HeroSlider = () => {
  return (
    <div style={{ margin: "0.5rem", marginBottom: "1.2rem" }}>
      {/* <SimpleImageSlider width={'99%'}
        height={70}
        images={herodata}
        showBullets={false}
        showNavs={true}
        autoPlay={true} /> */}
      <Swiper
      style={{
        "--swiper-navigation-color": "#000",
        "--swiper-navigation-size": "25px",
      }}
        autoHeight={false}
        spaceBetween={20}
        navigation={true} 
        loop={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {
          herodata.map((image,index) => <SwiperSlide key={index}><img src={image.url} alt="" style={{width:"100%",height:"100%"}}/></SwiperSlide>)
        }
      </Swiper>
    </div>
  )
}

export default HeroSlider