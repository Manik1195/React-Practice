import { useState } from "react"

function Count(){
    const [value, setValue] = useState(0)
    function performIncr(){

        setValue(p=>p+1)
    }
    function performDecr(){
        setValue(p=>p-1)
    }
    const btn1={
        border:"none",
        outline:'none',
        backgroundColor:"#000",
        color:'#fff',
        marginRight:'10px'

    }
    return(
        <>
        {value>0 && <h1>{value}</h1>}
        <button style={btn1} onClick={performIncr}>Click +</button>
        <button onClick={performDecr}>Click -</button>
        </>
    )
}
export default Count;