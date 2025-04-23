import { useEffect } from "react";



function Hooks(){



    /* useEffect without dependancy array  : callback of useEffect may go in infinite loop*/
    useEffect(()=>{
        console.log("UI rendered......");
        
        return ()=>{
            console.log("clean up.......");
            
        }
    });


    return(
    <>
    <p>We are learning different hooks.
        Hooks are services in react which provide service to components
    </p>
    <div>
        <h2>useEffect</h2>
        <p>
            this hook is used to manage lifecycle of the component
            1. mounting
            2. execution
            3. unmounting
        </p>
    </div>
    </>
    );
}


export default Hooks;