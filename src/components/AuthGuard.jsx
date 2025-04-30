import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


function AuthGuard({children}){
    const navigate=useNavigate();
    const [cookie, setCookie, removeCookie]=useCookies();
    console.log(cookie);

    useEffect(()=>{
        if(cookie){
            alert("Please login first.....");
            navigate("/adminlogin"); 
        }
        else{
            return children;
        }
    });
    
   
}

export default AuthGuard;