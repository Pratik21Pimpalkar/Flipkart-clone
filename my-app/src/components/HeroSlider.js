import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { herodata } from '../data/herodata';
const HeroSlider = () => {
  return (
    <div style={{margin:"0.5rem" ,marginBottom:"1.2rem"}}>
        <SimpleImageSlider   width={'99%'}
        height={280}
        images={herodata}
        showBullets={false}
        showNavs={true}
        autoPlay={true}/>
    </div>
  )
}

export default HeroSlider