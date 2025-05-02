import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { incrementAction } from "../../couterstore/counterSlice";
import { resetAction } from "../../couterstore/counterSlice";
function IncrementCounter(){
    const dispatch=useDispatch();
    const count=useSelector((state)=>state.counter.value)
    return(
         <>
         <p>
            <label>Counter is  </label>
            <b> {count}</b>
         </p>
        <p>dispatching increment action on store</p>
        <Button onClick={()=>dispatch(incrementAction())} variant="contained">INCREMENT</Button>
        <Button onClick={()=>dispatch(resetAction())} variant="contained">RESET </Button>
        </>
    );
}

export default IncrementCounter;