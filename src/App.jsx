/* if we have same classes in different css of components then
recent imported components' css will be considered */
import './App.css'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import Learning from './components/Learning';
import AdminLogin from './components/AdminLogin';
import Employees from './components/Employees';
import { useState } from 'react';

/* functional component : UI+development */
 /* logic similar like html : jsx logic javascript extension */
 /* component : first letter captical 
 normal jsx elements : all letter small (similar like html) */
function App() {
  const [mainheading, setHeading]= useState("DEVELOPER MANAGEMENT"); // data 1. useState
  const companyName="Neosoft";
  const jsxelement=<h1 style={{textAlign:'center', color:'lightgreen'}}>{mainheading}</h1>
  

  setTimeout(() => {
    //mainheading="Developer Management" // react wrong
    setHeading("EMPLOYEE MANAGEMENT");
  }, 3000);   // 2. timer to change the data
  return (
   <>
    {jsxelement}
    <MyHeader mainheading={mainheading}  companyName={companyName} ></MyHeader>
   {/*  <Employees></Employees> */}
   <Learning></Learning>
    <MyFooter></MyFooter>
   </>
  )
}
export default App

