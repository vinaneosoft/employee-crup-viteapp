import { useEffect } from "react";
import { useState } from "react";
// h4 : JSX, {heading } : javascript intergration in jsx
function Navbar(){
  const heading="navbar";

  //logic 
    return(
        <nav>
          <h4>{heading}</h4> 
        </nav>

    );
  }
  export default Navbar;


  const heading="navbar";
  const h4Ele=document.createElement("h4");
  h4Ele.textContent=heading;