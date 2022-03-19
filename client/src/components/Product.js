
import React from 'react'
import styled from "styled-components"
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
import { Link } from 'react-router-dom';

 const Product = ({item}) => {
  return (
    <Container>
        <Img src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>

            <Icon>  
            <Link to={`/product/${item._id}`}>  
        <SearchOutlined />
        </Link>   
        </Icon>

            <Icon>
          <FavoriteBorderOutlined />
        </Icon>

        </Info>
    </Container>
  )
}
const Info=styled.div`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
z-index:3;
display:flex;
align-items:center;
justify-content:center;
background-color:gray;
background-color:rgba(0,0,0, 0.2);
opacity:0;
transition:all 0.5s ease;
cursor:pointer;

`
const Container = styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
background-color:#f5fbfd;
position:relative;
&:hover ${Info}{
opacity:1;
}
`
const Img=styled.img`
height:75%;
z-index:2;
`


const Icon=styled.div`
width: 40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
justify-content:center;
cursor:pointer;
margin:10px;
align-items:center;
transition:all 0.5s ease;

&:hover{
    background-color:#e9f5f5;
    transform:scale(1.1);
}
`

export default Product