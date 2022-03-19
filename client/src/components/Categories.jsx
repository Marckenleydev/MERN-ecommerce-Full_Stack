import styled from "styled-components"
import {categories} from "../data"
import CategoryItem from "./CategoryItem"
import { mobile } from "../Responsive";
// import "./Categories.css"

const Categories=()=>{
    return(
        
        <Container>

        {categories.map(item=>(
            <CategoryItem item={item} keys={item.id}/>
        ))}

        </Container>
        
    )
}
const Container = styled.div`
display:flex;
background-color: rgba(128, 128, 128, 0.178);
margin-top:20px;
${mobile({ padding: "0px", flexDirection:"column",marginTop:"0px" })};
`
export default Categories