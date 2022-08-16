import React from 'react'
import HeroSlider from '../components/HeroSlider'
import Product from '../components/Product'

const Home = () => {
  return (
    <div>
        <HeroSlider/>
        <Product Heading={"Laptops"}/>
        <Product Heading={"Mobiles"}/>
    </div>
  )
}

export default Home