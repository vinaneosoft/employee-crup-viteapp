import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { resetAction } from "../couterstore/counterSlice";
import { Button, useScrollTrigger } from "@mui/material";
function Dashboard(){
 const dispatch= useDispatch();
 const count=useSelector((state)=>state.counter.value)
    return (
        <div className="p-6 max-w-3xl mx-auto  rounded shadow">
          <h1 className="text-3xl font-bold mb-4">👨‍💼 Employee CRUD Dashboard</h1>
          
          <p className="mb-4">
            This dashboard allows you to manage employees with the following features:
          </p>
    
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li><strong>Login:</strong> Secure access to the dashboard.</li>
            <li><strong>Create:</strong> Add new employee records using a form.</li>
            <li><strong>Read:</strong> View all employees in a dynamic table.</li>
            <li><strong>Update:</strong> Edit employee details directly from the list.</li>
            <li><strong>Delete:</strong> Remove employees with a single click.</li>
          </ul>
    
          <p className="mb-2">
            Built using <strong><a target="_blank" href="https://react.dev/">React</a></strong>, this dashboard provides a simple and efficient interface
            to perform all basic employee management operations.
          </p>
          <h4>Employees currently working</h4>
          <nav>
            <Link to="reactemployees">REACT EMPLOYEES</Link>
            <Link to="angularemployees">ANGULAR EMPLOYEES</Link>
          </nav>
          <div>
            <h3>Outlet for Childs of home route</h3>
            <Outlet></Outlet>
          </div>
          <div>
            <h5>reset store counter</h5>
            <p>{count}</p>
            <Button onClick={()=>dispatch(resetAction())} variant="contained">RESET </Button>          </div>
        </div>

      );
}

export default Dashboard;
/* 
/home/reactemployees
/home/angularemployees */

