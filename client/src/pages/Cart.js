
import styled from "styled-components"
import React,{useState,useEffect} from 'react'
import Navbar from "../components/Navbar"
import Annoucement from "../components/Annoucement";
import {Newsletter} from "../components/Newsletter";
import {Footer} from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../Responsive";
import { useSelector } from "react-redux";
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from "../requestMethodes";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const KEY = "pk_test_51JoAD8FlrPHdg2hC84rheCnQecsyQGiUpvLXggw2kkLa55OqSFd1q4nxi8uZ3EwzBbn99omMgAc6a2zEL51SN4Y800lSJuup3w"
export const Cart = () => {

 const cart = useSelector((state)=>state.cart);
 const [stripeToken, setStripeToken] = useState(null);
 const navigate = useNavigate();

 const onToken= (token)=>{
    setStripeToken(token)
  }

console.log(stripeToken)


useEffect(()=>{
    const makeRequest = async()=>{
        try{
            const res = await userRequest.post( "/checkout/payment",
            {
                tokenId:stripeToken.id,
                amount:cart.total*100,
            })
            navigate('/success',{ stripeData: res.data,})
        }catch{}
    }
    stripeToken && makeRequest();
},[stripeToken,cart.total, navigate])


  return (
    <Container>
        <Annoucement/>
        <Navbar/>
        <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag (2)</TopText>
                <TopText>your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
            {cart.products.map(product=>(
                <Product>
                <ProductDetails>
                    <Img src={product.img}/>
                    <Details>
                       <ProductName> <b>Product:</b> {product.title} </ProductName> 
                       <ProductId> <b>ID:</b> {product._id} </ProductId> 
                       <ProductColor color={product.color} />
                       <ProductSize> <b>Size:</b> {product.size}</ProductSize> 
                       
                    </Details>
                </ProductDetails>
                
                <PriceDetail>
                    <ProductAmountContainer>
                        <Add/>
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <Remove/>
                    </ProductAmountContainer>
                    <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                </PriceDetail>
                </Product>
            

               
            ))}
            <Hr/>
           

                
               

                
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SmmaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ {cart.total} </SummaryItemPrice>
                </SmmaryItem>

                <SmmaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SmmaryItem>

                <SmmaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SmmaryItem>

                <SmmaryItem type="total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>$ 80</SummaryItemPrice>
                </SmmaryItem>
                <StripeCheckout 
           name="BLACKYTAILOR"
           
           billingAddress
           shippingAddress
           description={`Your total is $${cart.total}`}
           amount={cart.total*100}
           token={onToken}
           stripeKey={KEY}
          > 
          <SummaryButton>CHECKOUT NOW</SummaryButton>
          </StripeCheckout>
            </Summary>
            </Bottom>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

const Container=styled.div`
 
`
const Title=styled.h1`
 font-weight:300;
 text-align:center;
`

const Wrapper=styled.div`
   ${mobile({ padding: "10px" })};
   padding:20px;
`
const Top=styled.div`
 display:flex;
 align-items:center;
 justify-content:space-between;
 padding:20px;
`

const Bottom=styled.div`
 display:flex;
 justify-content: space-between;
 ${mobile({ flexDirection: "column" })}
`
const TopButton=styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:1px solid black;
letter-spacing: 1px;
border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`

const TopTexts= styled.span`
cursor: pointer;
margin:0px 10px;
${mobile({ display: "none" })}

`
const TopText= styled.span`
cursor: pointer;
margin:0px 10px;


`
const Info= styled.div`
flex:3;
display:flex;
flex-direction:column;
`


const Product = styled.div`
 display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`
const ProductName = styled.div`



`

const ProductDetails = styled.div`
flex:2;
/* justify-content:space-between; */
display:flex;


`

const Img = styled.img`

width: 200px;

`

const ProductColor = styled.div`
width: 20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};


`

const ProductId = styled.div`

`

const ProductSize = styled.div`


`
const PriceDetail =styled.div`
flex:1;
display:flex;
align-items:center;
flex-direction:column;
`
const Details =styled.div`
padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`
const ProductAmount = styled.div`
font-size:24px;
margin:5px;
${mobile({ margin: "5px 15px" })}
`
const ProductPrice = styled.div`
font-size:30px;
font-weight:200;
${mobile({ marginBottom: "20px" })}
`
const Hr = styled.hr`
background-color:black;
`

const Summary= styled.div`
flex:1;
border:0.5px solid black;
padding:20px;
height: 60vh;
margin-right:10px;
border-radius:10px;
`
const SummaryTitle = styled.h1`
font-weight:200;
`
const SmmaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`
font-weight:400;
`
const SummaryItemPrice = styled.span`

`
const SummaryButton = styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
border:none;
letter-spacing: 1px;
cursor:pointer;
`
