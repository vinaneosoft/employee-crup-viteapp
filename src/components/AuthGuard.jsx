import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


function AuthGuard({children}){
    const navigate=useNavigate();
    const [cookie, setCookie, removeCookie]=useCookies();
    console.log(cookie); 

    // how to test for empty object {}
    useEffect(()=>{
      
       if(!('neoadmin' in cookie)){
            alert("Please login first.....");
            navigate("/adminlogin"); 
       }
        
    },[]);
    
    return (
        <div>
            {'neoadmin' in cookie && children}
        </div>
    );
   
}

export default AuthGuard;
