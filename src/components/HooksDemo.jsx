import { useEffect, useState } from "react";



function Hooks(){


    let [counter1, setCounter1]=useState(0);

    /* useEffect without dependancy array  : callback of useEffect 
    may go in infinite loop*/
    /* useEffect with empty dependancy array : callback of useEffect 
    will get called only when first time components gets mounted  */
    /* useEffect with depedancy array having state/prop variables:
    useEffect callback will get called after every UI rendered due 
    to state change in dependancy variable */
    useEffect(()=>{
        console.log("set up..UI rendered......");
        console.log("connected to database....");
        console.log(counter1);
        setUp(counter1);
        console.log("-------------------------------");
     
        return ()=>{
            console.log("clean up.......");
            console.log("disconnected from database....."); 
            console.log(counter1);
            cleanup(counter1);
        }
    }, [counter1]);


    return(
    <>
    <p>We are learning different hooks.
        Hooks are services in react which provide service to components
    </p>
    <div>
        <h2>useEffect</h2>
        <p>
            this hook is used to manage lifecycle of the component
            1. mounting : setup
            2. execution : cleanup, setup
            3. unmounting: cleanup
        </p>
    </div>
    <div>
        <label>State variable Counter1 : </label><b> {counter1}</b>
        <button onClick={()=>setCounter1(counter1+1)}>INCREMENT counter1</button>
    </div>
    </>
    );
}



function setUp(newvalue){
    // if you want some setup to done when UI getting rendered
}

function cleanup(oldvalue){

}

export default Hooks;