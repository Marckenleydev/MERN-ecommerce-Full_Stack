import { Link } from "react-router-dom";
import styled from "styled-components"
import { mobile } from "../Responsive";
import { motion } from 'framer-motion';

const CategoryItem=({item})=>{
    return(
       
        <Container
         whileInView={{opacity:[0,1]}}
          transition={{duration:0.5, type:'tween'}}
        >
        <Link to={`/products/${item.cat}`} >
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        </Link>

        </Container>
        
    )
}

const Container = styled.div`
flex:1;
margin:3px;
position:relative;
`
const Image = styled.img`
width:100%;
height:70vh;
object-fit:cover;
${mobile({ height: "20vh" })};
`
const Info = styled.div`
position:absolute;
width:100%;
left:0;
height:100%;
top:0;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

`
const Title = styled.h1`
color:white;
margin-bottom:20px;
`
const Button = styled.button`
padding:15px;
border:none;
background-color:white;
color:black;
cursor:pointer;



`
export default CategoryItem