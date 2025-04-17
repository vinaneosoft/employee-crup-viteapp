import { useRef } from "react";


function AdminLogin(){
    let emailRef=useRef();
    let passwordRef=useRef();

    function collectDetails(event){
        event.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return(
        <>
         <h4 className="text-center">ADMIN LOGIN FORM</h4>
         <div className="d-flex justify-content-center p-2">
            <form className="bg-secondary w-50 p-3" onSubmit={collectDetails}>
                <div className="mb-3">
                    <label htmlFor="emailRef" className="form-label">Email address</label>
                    <input type="email" ref={emailRef} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordRef" className="form-label">Password</label>
                    <input type="password" ref={passwordRef} className="form-control" />
                </div>
                <button type="submit" className="mx-3 btn btn-primary">LOGIN</button>
                <button type="reset" className="btn btn-primary">RESET</button>
            </form>
        </div>
        </>
    
    );  
}

export default AdminLogin;