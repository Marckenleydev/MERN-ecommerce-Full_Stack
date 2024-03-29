
import React, { useState } from 'react'
import Annoucement from '../components/Annoucement'
import Navbar from '../components/Navbar'
import styled from "styled-components";
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';
import Products from '../components/Products';
import { mobile } from "../Responsive";
import { useLocation } from 'react-router';
import Fade from 'react-reveal/Fade';

export const ProductList = () => {
  const location = useLocation()
  const cat = location.pathname.split("/")[2];
  const  [filters, setFilters]= useState({});
  const [sort,setSort]= useState("newest")

  const handleFilters = (e)=>{
    const value = e.target.value;

    setFilters({
      ...filters,
      [e.target.name]:value
    })
  }
  console.log(filters);
  return (
    <Fade top>
    <Container>
    <Annoucement/>
    
    <Navbar/>
    <Title>Dresses</Title>
    <FilterContainer>
       
        <Filter>
        <FilterText>Filter Products:</FilterText>
        <Select  name="color" onChange={handleFilters} >
            <Option  >
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>gray</Option>
            <Option>brown</Option>
            <Option>{ cat==="jacket" ? "sand" : "camouflage"}</Option>
            
           
          
          </Select>

          <Select  name="size" onChange={handleFilters} >
            <Option  > Size </Option>
            <Option>{ cat==="jacket" ? "S" : "32"}</Option>
            <Option> { cat==="jacket" ? "M" : "34"}</Option>
            <Option>{ cat==="jacket" ? "L" : "36"}</Option>
            <Option>{ cat==="jacket" ? "XL" : "38"}</Option>
            <Option>{ cat==="jacket" ? "XXL" : "42"}</Option>
          </Select>
        
        </Filter>
        <Filter>
        <FilterText>Sort Products:</FilterText>

        <Select onChange={(e)=> setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
   
      
    </FilterContainer>
    <Products cat={cat} filters={filters} sort={sort}/>
    <Newsletter/>
    <Footer/>
    
    </Container>
    </Fade>
  )
}

const Container =styled.div`


`
const Title =styled.h1`
margin:20px;

`
const FilterContainer =styled.div`

display:flex;
justify-content:space-between;
`
const Filter =styled.div`
margin:20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
${mobile({ marginRight: "0px" })}
`
const Select=styled.select`
padding:10px;
margin-right:20px;

${mobile({ margin: "10px 0px" })}
`

const Option=styled.option`
text-transform: uppercase;


`