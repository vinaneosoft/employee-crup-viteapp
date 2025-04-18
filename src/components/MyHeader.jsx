
import Navbar from "./Navbar";
import './MyHeader.css';

/* jsx attributes in camelcase */

function MyHeader(props){

const subHeading="employee CRUD"

    return(
       <header className="top">
         <h3 className="subheading text-center">{subHeading}, {props.companyName}</h3>
         <Navbar mainheading={props.mainheading}></Navbar>
       </header>
    );
}

export default MyHeader;
