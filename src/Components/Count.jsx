import { useState } from "react"
import { useEffect } from "react"

function Count(){
    const [value, setValue] = useState(0)
    const[count,setCount]=useState(1)
    function operation(){
        setCount(p=>p+1)
        setValue(0)
    }
     useEffect(() => {
    if (value > 20) {
      operation();
    }
  }, [value]);

    function performIncr(){
        setInterval(()=>{
            setValue(p=>p+1)
        },1000)
        document.getElementById("btn").disabled=true

    }
    const btn1={
        border:"none",
        outline:'none',
        backgroundColor:"#000",
        color:'#fff',
        marginRight:'10px',
        fontFamily:'sans-serif',

    }
    
    return(
        <>
        <h1>Click and get special discounts here 😍 {value}</h1>
        <button id='btn'style={btn1} onClick={performIncr}>Click +</button>
        {value>=10 ? <p>You earned 10% discount!</p>:<p>Click 10 times to get discount</p>}
        {value>=20 && <p>You earned 20% discount!</p>}
        {count>0 && <p>Round:{count}</p>}
        </>
    )
}
export default Count;