/* if we have same classes in different css of components then
recent imported components' css will be considered */
import './App.css'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import Learning from './components/Learning';
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
    <Learning></Learning>
    <MyFooter></MyFooter>
   </>
  )
}

export default App


const books=[{bookId:111, bookName:'React basics'},
  {bookId:112, bookName:'Angular Basics'}];
let [,{bookName:secondBookName}]=books