

import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'


 const Products = ({cat,filters,sort}) => {
   console.log(cat,filters,sort)

   const [products,setProducts] = useState([]);
   const [filteredProducts, setFilteredProducts] = useState([]);

   useEffect(()=>{
  
     const getProducts= async()=>{

     

    try{
      const res = await axios.get(
        cat ? `https://mern-ecommerce-blackytailor.herokuapp.com/api/product?category=${cat}`
        : "https://mern-ecommerce-blackytailor.herokuapp.com/api/product"
        )
      setProducts(res.data)
    }catch(err){}
  }
  getProducts()

   },[cat])


   useEffect(()=>{

    cat && setFilteredProducts(
      products.filter(item=> Object.entries(filters).every(([key, value])=>
      item[key].includes(value)
      ) )
    )

   },[products,cat,filters])


   useEffect(()=>{
     if((sort=== "newest")){
       setFilteredProducts((prev)=>
       [...prev].sort((a,b)=> a.createdAt - b.createdAt)
       )
     } else if ((sort === "asc")){
      setFilteredProducts((prev)=>
      [...prev].sort((a,b)=> a.price - b.price)
      )
     }else{
      setFilteredProducts((prev)=>
      [...prev].sort((a,b)=> b.price - a.price)

      )
     }
   },[sort])



  return (

    <ContainerWrap>
    <Title>NEW RELEASES</Title>
    <Container>
    
        {cat 
        ?filteredProducts.map((item)=> <Product item={item} keys={item.id} />)
        :products.slice(0,8).map((item)=> <Product item={item} keys={item.id} />
        
        )}
    </Container>
    </ContainerWrap>
  )
}

const ContainerWrap=styled.div`
background-color: rgba(128, 128, 128, 0.178);

`
const Container= styled.div`
padding:20px;
display:flex;
background-color: rgba(128, 128, 128, 0.178);
flex-wrap:wrap;
justify-content:space-between;
`

const Title=styled.h1`
margin-left:20px;
font-weight:400;

`
export default Products