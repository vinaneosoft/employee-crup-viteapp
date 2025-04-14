
import './App.css'
import MyFooter from './components/MyFooter'
import MyHeader from './components/MyHeader'
/* functional component : UI+development */
 /* logic similar like html : jsx logic javascript extension */
 /* component : first letter captical 
 normal jsx elements : all letter small (similar like html) */
function App() {
  return (
   <>
    <h2>EMPLOYEE MANAGEMENT</h2>
     <MyHeader></MyHeader>
      <MyFooter></MyFooter>
   </>
  )
}

export default App
