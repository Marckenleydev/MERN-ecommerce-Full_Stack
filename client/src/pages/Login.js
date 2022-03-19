

import React, { useState } from 'react'
import styled from "styled-components"
import Annoucement from "../components/Annoucement"
import Navbar from "../components/Navbar"
import { Newsletter } from "../components/Newsletter"
import { Footer } from "../components/Footer"
import { mobile } from "../Responsive";
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/apiCalls'

export const Login = () => {

  const [username, setUsername]=useState("")
  const [password, setPassword]=useState("")
  const dispatch = useDispatch()
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick=(e)=>{

    e.preventDefault();
    login(dispatch,{username, password})


  }

    return (
        <ContainerWrap>
      <Annoucement/>
      <Navbar/>
      <Container>
      
     <Wrapper>
         <Title>LOGIN</Title>
         <Fill>Please enter your e-mail and password:</Fill>
  
         <Form>
             
             <Input  placeholder="username" 
               onChange={(e)=> setUsername(e.target.value)}
             />
            
             <Input  placeholder="password" type="password"
               onChange={(e)=> setPassword(e.target.value)}
             />
            
             
            <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
            {error && <Error>Something went wrong...</Error>}
         </Form>
     </Wrapper>
  
      </Container>
      <Newsletter/>
      <Footer/>
      </ContainerWrap>
    )
  }
  
  const ContainerWrap = styled.div`
  
  `
  const Container=styled.div`
  background-color: rgba(226, 226, 226, 0.938);
  height:90vh;
  width: 100vw;
  display:flex;
  align-items:center;
  justify-content:center;
  `
  const Title=styled.h2`
  text-align:center;
  letter-spacing: 2px;
  
  `
  
  const Fill=styled.p`
  text-align:center;
  
  `
  const Wrapper=styled.div`
  width: 40%;
  padding:20px;
  ${mobile({ width: "75%" })};
  `
  const Form=styled.form`
  display:flex;
  flex-direction:column;
  `
  const Input=styled.input`
  flex:1;
  min-width:40%;
  margin:10px 0px;
  padding:13px;
  outline:none;
  border:1px solid black;
  font-size:17px;
  color:black;
  `
  const Agreement=styled.span`
  font-size:15px;
  font-weight:400;
  margin:20px 0px;
  `
  
  const Button = styled.button`
  border:none;
  background-color:black ;
  color:white;
  padding:15px;
  letter-spacing: 1px;
  cursor:pointer;
  
  `

  const Error = styled.div`
  
  color:red;
  `