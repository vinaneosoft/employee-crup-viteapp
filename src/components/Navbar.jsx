import { Button } from "@mui/material";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

// h4 : JSX, {heading } : javascript intergration in jsx
function Navbar({mainheading}){
  const heading="navbar";

  let [cookie, setCookie, removeCookie]=useCookies();
  const navigate=useNavigate();

  function logout(){
    removeCookie('neoadmin');
    alert("you are logged out....");
    navigate("/home");
  }
  
  //logic 
    return(
      <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="home">{mainheading}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="home">HOME</Link> 
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">SHOW EMPLOYEES</a> */}
              <Link className="nav-link" to="showemployees">SHOW EMPLOYEES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="addemployee">ADD EMPLOYEE</Link>
            </li>
            <li className="nav-item">
              {
                ('neoadmin' in cookie) ?
                <Button onClick={logout}>LOGOUT </Button>
                : 
                <Link className="nav-link" to="adminlogin">ADMIN LOGIN</Link>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
  export default Navbar;


  const heading="navbar";
  const h4Ele=document.createElement("h4");
  h4Ele.textContent=heading;