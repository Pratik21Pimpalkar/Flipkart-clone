import React, { useEffect, useState } from 'react'
import HeroSlider from '../components/HeroSlider'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/actions/productActions'
const Home = () => {
  const dispatch = useDispatch()
  const [laptops, setLaptops]=useState([])
  const [mobile, setMobile]=useState([])
  const {products}= useSelector((state) => state.allproducts);
  if(products){
    const laptopProduct =products.filter(product=>product.category==='laptops')
    const mobileProduct =products.filter(product=>product.category==='mobiles')
    setTimeout(() => {
      setLaptops(laptopProduct)
      setMobile(mobileProduct)
    }, 0);
  }
  useEffect(() => {
    if(!products)
    dispatch(fetchProducts());
  }, [dispatch])

  return (
    <div>
      <HeroSlider />
      <Product Heading={"laptops"} product={laptops} />
      <Product Heading={"Mobiles"} product={mobile} />
    </div>
  )
}

export default Home