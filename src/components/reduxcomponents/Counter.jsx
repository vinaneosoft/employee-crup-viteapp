import CounterListener from "./CounterListener";
import DecrementCounter from "./DecrementCounter";
import IncrementCounter from "./IncrementCounter";

function Counter(){


    return(
     <>
        <h3 className="text-center">Redux Store</h3>
        <div className="d-flex justify-content-center">
            <div className="border border-4 p-5">
                <IncrementCounter></IncrementCounter>
            </div>
            <div  className="border border-4 p-5">
                <CounterListener></CounterListener>
            </div>
            <div  className="border border-4 p-5">
                <DecrementCounter></DecrementCounter>
            </div>
        </div>
     </>
    );
}

export default Counter;