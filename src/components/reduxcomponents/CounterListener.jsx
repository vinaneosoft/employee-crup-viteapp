import { useSelector } from "react-redux";
function CounterListener(){
    const count=useSelector((state)=>state.counter.value);// counter is key registered for reducer in store file
    return(
        <div>
            <label>Counter is (listering changes from store):</label>
            <p>{count}</p>
        </div>
    )
}
export default CounterListener;
// 5. listened current state of counter from store