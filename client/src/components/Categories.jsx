import styled from "styled-components"

import CategoryItem from "./CategoryItem"
import { mobile } from "../Responsive";
  export const categories = [
    {
      id: 1,
     img:"/img/cargo v1.jpg",
      title: "V2 CARGO",
      cat:"pantalon"
    },
    {
      id: 2,
      img:"/img/jacket.jpg",
      title: "CROPPED CARGO JACKET",
      cat:"jacket"
    },
    {
      id: 3,
      img:"/img/cargov2.jpg",
      title: "MARKDOWNS",
      cat:"pantalon"
    },
  ];
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

${mobile({ padding: "0px", flexDirection:"column",marginTop:"0px" })};
`
export default Categories