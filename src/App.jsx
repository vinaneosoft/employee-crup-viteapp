/* if we have same classes in different css of components then
recent imported components' css will be considered */
import './App.css'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import Learning from './components/Learning';
import AdminLogin from './components/AdminLogin';
import Employees from './components/Employees';
import { useState } from 'react';
import { LearningContext } from './model/context';

/* functional component : UI+development */
 /* logic similar like html : jsx logic javascript extension */
 /* component : first letter captical 
 normal jsx elements : all letter small (similar like html) */
function App() {
  const [mainheading, setHeading]= useState("DEVELOPER MANAGEMENT"); // data 1. useState
  const companyName="Neosoft";
  const jsxelement=<h1 style={{textAlign:'center', color:'lightgreen'}}>{mainheading}</h1>
  
   let [learningObject, setLearning]= useState({
    courseName:'Angular',
    courseTuitor:"Vina Patil",
    courseDuration:100
   })

  setTimeout(() => {
    //mainheading="Developer Management" // react wrong
    setHeading("EMPLOYEE MANAGEMENT");

    //learningObject.courseDuration=120; // React wrong , immutable
    setLearning(
      {
        ...learningObject, 
        courseDuration:120
      }
    );

  }, 3000);   // 2. timer to change the data
  return (
   <>
    {jsxelement}
    <MyHeader mainheading={mainheading}  companyName={companyName} ></MyHeader>
   {/*  <Employees></Employees> */}
   
   {/*2. provide data deep in hirarchy using
   context object created */}
    <p>
        <b>{learningObject.courseName}</b> <br />
        <b>{learningObject.courseTuitor}</b> <br />
        <b>{learningObject.courseDuration} hrs</b>
      </p>
   <LearningContext value={learningObject} >
      <Learning></Learning>
   </LearningContext>
    <MyFooter></MyFooter>
   </>
  )
}
export default App

