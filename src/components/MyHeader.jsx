
import Navbar from "./Navbar";
/* jsx attributes in camelcase */
const subHeading="EMPLOYEE CRUD"
function MyHeader(){
    return(
       <header className="top">
         <h3>{subHeading}</h3>
         <Navbar></Navbar>
       </header>
    );
}

export default MyHeader;
