import React from 'react'
import styled from "styled-components"
import { Badge } from "@material-ui/core";
import { mobile } from "../Responsive";
import "./Navbar.css"

import { Search, ShoppingCartOutlined,PermIdentity } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {


  const quantity=useSelector(state=> state.cart.quantity);

  
 
  return (
    <Container>
    <Wrapper>
        <Left></Left>
        <Center>
        <Link to="/" className='link'>
            <Logo>BLACKYTAILOR</Logo>
            </Link>
        </Center>
        <Right>
            <MenuItem> <PermIdentity style={{ color: "white", fontSize: 26 }} /> </MenuItem>
            <MenuItem><Search style={{ color: "white", fontSize: 26 }} /></MenuItem>
           
           <Link to="/cart">
            <MenuItem>
            <Badge style={{ marginTop: -45, marginRight: -20, marginLeft: 20, color:"white",fontSize: 20}} color="secondary" badgeContent={quantity} ></Badge>
             <ShoppingCartOutlined style={{ color: "white", fontSize: 26 }} />
             
             </MenuItem>
             </Link>
        </Right>
    </Wrapper>
    
    </Container>
  )
}

const Container = styled.div`
  height: 60px;
  background-color:black;
  ${mobile({ height: "50px" })}
 
`;


const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
 
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color:white;
  ${mobile({ fontSize: "24px" })};
  cursor:pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
export default Navbar