import styled from "styled-components"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const Slide = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slideToScroll: 1,
        autoplay: true,
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <a><img src='https://cdn.shopify.com/s/files/1/0012/2981/5865/files/BLACKTAILOR_FW21_DESKTOP_675229b2-da07-4e57-9281-1981552ec8ae_1200x.jpg?v=1643682351' alt="bacground img" /></a>
            </Wrap>

            <Wrap>
                <a><img src='https://cdn.shopify.com/s/files/1/0012/2981/5865/files/CONTTON_CANVAS_JACKET_1200x.jpg?v=1643682570' alt="bacground img" /></a>
            </Wrap>

            
        </Carousel>
    )
}
const Carousel = styled(Slider)`
width: 100%;
margin-top: 0px;
&> button{
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index:1;
    &:hover{
        opacity: 1;
       transition:opacity 0.2s eae 0s;
    }
}
ul li button{
    &:before{
        font-size: 10px;
        color: rgb(150, 158,171);
    }
}
li.slick-active button:before{
    color:white;
}
.slick-list{
    overflow:initial;
}
.slick-prev{
    left:-75px ;
}
.slick-next{
    right: -75px;
}
`;

const Wrap = styled.div`


position: relative;
cursor: pointer;

a{
    
    display: block;
    cursor: pointer;
    border-radius: 4px;
  

    img{
        width: 100%;
        height: 100%;
    }
}


`;
export default Slide;