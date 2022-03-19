
import styled from "styled-components"
import React, { useState } from 'react'
import Annoucement from "../components/Annoucement"
import Navbar from "../components/Navbar"
import { Newsletter } from "../components/Newsletter"
import { Footer } from "../components/Footer"
import { mobile } from "../Responsive";
import { publicRequest } from "../requestMethodes"

export const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault()

    try{

      const res = await publicRequest.post("/auth/register",{
        username,
        email,
        password,
      });
      console.log(res.data)
      res.data && window.location.replace("/login")

    }catch(err){}

  }
 


  return (
      <ContainerWrap>
    <Annoucement/>
    <Navbar/>
    <Container>
    
   <Wrapper>
       <Title>REGISTER</Title>
       <Fill>Please fill in the information below:</Fill>

       <Form onSubmit={handleSubmit}>
         
           <Input required  placeholder="username" onChange={(e)=> setUsername(e.target.value) } />
           <Input required  placeholder="email" onChange={(e)=> setEmail(e.target.value)} />
           <Input required placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)} />
           
           <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE MY ACCOUNT</Button>
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
height:100vh;
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
${mobile({ width: "75%" })}
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