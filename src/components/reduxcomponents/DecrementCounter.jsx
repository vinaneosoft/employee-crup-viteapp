import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decrementAction, resetAction } from "../../couterstore/counterSlice";

function DecrementCounter(){
    const count=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();
    return(
        <>
         <p>
            <label>Counter is  </label>
            <b> {count}</b>
         </p>
        <p>dispatching decrement action on store</p>
        <Button onClick={()=>dispatch(decrementAction())} variant="contained">DECREMENT</Button>
        <Button onClick={()=>dispatch(resetAction())} variant="contained">RESET </Button>
        </>
    );
}

export default DecrementCounter;