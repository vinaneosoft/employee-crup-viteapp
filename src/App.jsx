/* if we have same classes in different css of components then
recent imported components' css will be considered */
import './App.css'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import Learning from './components/Learning';
import AdminLogin from './components/AdminLogin';
import Employees from './components/Employees';

/* functional component : UI+development */
 /* logic similar like html : jsx logic javascript extension */
 /* component : first letter captical 
 normal jsx elements : all letter small (similar like html) */
function App() {
  const mainheading="EMPLOYEE MANAGEMENT"; // data
  const jsxelement=<h1 style={{textAlign:'center', color:'lightgreen'}}>{mainheading}</h1>
  
  
  return (
   <>
    {jsxelement}
    <MyHeader></MyHeader>
    <Employees></Employees>
    <MyFooter></MyFooter>
   </>
  )
}
export default App

