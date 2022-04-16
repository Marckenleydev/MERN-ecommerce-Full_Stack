import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';


function Annoucement() {
  return (
    <Fade top delay={2000} >
    <Container>ONLY <span>$32</span>  AWAY FROM FREE EXPRESS SHIPPING</Container>
    </Fade>
  )
}

const Container = styled.div`
 height: 30px;
  background-color: white;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color:black;

  span{
      color:orangered;
  }

`

export default Annoucement