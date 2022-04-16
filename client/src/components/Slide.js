import styled from "styled-components"
import "./Slide.css"
import { motion } from 'framer-motion'; 
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';





const Slide = (props) => {
    return(
    <div className="Slide" >
<Fade top>
    <div
   
     className="line">
        <Bounce delay={1000} duration={2000} bottom>
        <motion.div
     
         className="info">
            <motion.h2
          
             className="title">BLACKTAYLOR 23'</motion.h2>
            <p className="text">Life is hard enough already. Let us make it a little easier.</p>
           
            <motion.div className="productDetails">
                <motion.div className="colorAndsize">
                    <span>Color</span>
                    <span>Size</span>
                </motion.div>
                <div>
                <motion.div className="ballSize">
                    <span className="ballContainer">
                    <div className="ball"/>
                    <div className="ball"/>
                    <div className="ball"/>
                    
                    </span>
                    <span className="size">
                    <h4>S</h4>
                    <h4>M</h4>
                    <h4>L</h4>
                    </span>
                    </motion.div>
                </div>
            </motion.div>
            {/* <Link to="/products" className='link'>
            <button className="btnShop">Shop Now</button>
            </Link> */}
        </motion.div>
        </Bounce>
    </div>
    </Fade>
    
    
   </div>



    )
    }
       
export default Slide;