import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { incrementAction, incrementWithPayload } from "../../couterstore/counterSlice";
import { resetAction } from "../../couterstore/counterSlice";
import { useRef } from "react";
function IncrementCounter(){
    const dispatch=useDispatch();
    const count=useSelector((state)=>state.counter.value)
    const inputNode=useRef();
    return(
         <>
         <p>
            <label>Counter is  </label>
            <b> {count}</b>
         </p>
        <p>dispatching increment action on store</p>
        <Button onClick={()=>dispatch(incrementAction())} variant="contained">INCREMENT</Button>
        <Button onClick={()=>dispatch(resetAction())} variant="contained">RESET </Button>
       <input type="text" placeholder="enter increment value" ref={inputNode}></input>
       <Button  variant="contained" onClick={()=>dispatch(incrementWithPayload(parseInt(inputNode.current.value)))}>INCREMENT WITH PAYLOAD</Button>
         </>
    );
}

export default IncrementCounter;