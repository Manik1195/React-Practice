import { useState } from "react";
import styled from "styled-components";
 const Heading=styled.h1`
      color:rgba(0,0,0,0.7);
        font-size:40px;
        text-shadow: 2px 2px 4px rgba(231, 218, 218, 0.5);
    `
    const Button=styled.button`
        background-color: #4aa3ec;
        border-radius:10px;
        padding:10px;
        width:100px;
       `
function Welcome(props){
    const{greet}=props
    const[isClciked,setIsClicked]=useState(false)
   

    function perform(){
        setIsClicked(p=>!p)
    }

    return(
        <>
        <Heading>{greet.msg}</Heading>
        <Button onClick={perform}>Click</Button>
        {isClciked && <p>Welcome {greet.name}</p>}
        </>
    )
}
export default Welcome;