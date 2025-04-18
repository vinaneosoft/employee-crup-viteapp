
// h4 : JSX, {heading } : javascript intergration in jsx
function Navbar({mainheading}){
  const heading="navbar";
  //logic 
    return(
      <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{mainheading}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">SHOW EMPLOYEES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ADD EMPLOYEE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ADMIN LOGIN</a>
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