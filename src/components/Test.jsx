import { useState } from "react";



function Test(){

    const [company, setCompany] = useState({companyId: 100,companyName: "Neosoft Technologies"});

    function test(){
       // setCompany(prevCompany => ({...prevCompany, companyName: "Neosoft"}));
        setCompany(
            {
                ...company,
                companyName: "Neosoft"
            }
        );
    }

return(
    <>
    <p>testing....</p>
    <ol>
        <li>{company.companyId}</li>
        <li>{company.companyName}</li>
    </ol>
    <button type="button" onClick={test}>CLICK</button>
    </>
);
}

export default Test;


import React, { useState } from 'react';

function CompanyComponent() {
  const [company, setCompany] = useState({
    companyId: 1,
    companyName: "Neosoft technologies"
  });

  const updateCompanyName = () => {
    setCompany(prevCompany => ({
      ...prevCompany,
      companyName: "Neosoft"
    }));
  };

  return (
    <div>
      <p>Company ID: {company.companyId}</p>
      <p>Company Name: {company.companyName}</p>
      <button onClick={updateCompanyName}>Change Name</button>
    </div>
  );
}

const [company, setCompany] = useState({
    companyId: 1,
    companyName: "Neosoft Technologies",
  });

  // Function to update only the company name
  const updateCompanyName = () => {
    setCompany((prevCompany) => ({
      ...prevCompany,
      companyName: "Neosoft",
    }));
  };

  return (
    <div>
      <h1>Company id: {company.companyId}</h1>
      <h2>Company Name: {company.companyName}</h2>
      <button onClick={updateCompanyName}>Update Company Name</button>
    </div>
  );