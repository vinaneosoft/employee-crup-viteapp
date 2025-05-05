import { useDispatch, useSelector } from "react-redux";
import { fetchLength } from "../employeesstore/employeesSlice";

function ThunkTest(){
    const dispatch=useDispatch();
    const empcount=useSelector((state)=>state.empcounter.value);
    return(
        <>
        <hr></hr>
        <p>{empcount}</p>
          <button onClick={()=>dispatch(fetchLength())}>GET LENGTH</button>
        </>
      
    );
}

export default ThunkTest;