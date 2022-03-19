import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../Responsive";


import React from 'react'

export const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>CREATING STRUCTURE WITHIN LIGHT AND SHADOW.</Description>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder="Your email" />
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

const Container =styled.div`
height:50vh;
background-color:black;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const InputContainer=styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid white;
margin-top:20px;

`
const Title=styled.h1`
font-size:50px;
color:white;
margin-bottom:20px;
`
const Description = styled.p`
font-size:24px;
color:white;
${mobile({ textAlign: "center" })}
`

const Input =styled.input`
border:none;
flex:8;
outline:none;
font-size:19px;
color:white;
padding-left:20px;
background-color:black;
${mobile({ width: "80%" })}
`
const Button=styled.button`
flex:1;
border:none;
background-color: white;
cursor:pointer;
`
