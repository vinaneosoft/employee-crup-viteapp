import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


function AuthGuard({children}){
    const navigate=useNavigate();
    const [cookie, setCookie, removeCookie]=useCookies();
    console.log(cookie); 

    // how to test for empty object {}
    useEffect(()=>{
      
       if(Object.keys(cookie).length==0){
            alert("Please login first.....");
            navigate("/adminlogin"); 
       }
        
    },[]);
    
    return (
        <div>
            {Object.keys(cookie).length!=0 && children}
        </div>
    );
   
}

export default AuthGuard;
