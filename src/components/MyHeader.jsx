
import Navbar from "./Navbar";
import './MyHeader.css';

/* jsx attributes in camelcase */
const subHeading="employee CRUD"
function MyHeader(){
    return(
       <header className="top">
         <h3 className="subheading">{subHeading}</h3>
         <h4 id="neo" className="company">Neosoft</h4>
         <Navbar></Navbar>
       </header>
    );
}

export default MyHeader;
