
import Navbar from "./Navbar";
import './MyHeader.css';

/* jsx attributes in camelcase */

function MyHeader(){

const subHeading="employee CRUD"

    return(
       <header className="top">
         <h3 className="subheading text-center">{subHeading}</h3>
         <Navbar></Navbar>
       </header>
    );
}

export default MyHeader;
