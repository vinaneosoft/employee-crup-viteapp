import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import "bootstrap/dist/css/bootstrap.min.css";
import  "bootstrap/dist/js/bootstrap.bundle.min.js"
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import Employees from './components/Employees.jsx';
import AdminLogin from './components/AdminLogin.jsx';
import Dashboard from './components/Dashboard.jsx';
import EmployeeForm from './components/EmployeeForm.jsx';
import ReactEmployees from './components/ReactEmployees.jsx';
import AngularEmployees from './components/AngularEmployees.jsx';
import { getEmployeeById } from './model/employeecrud.js';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import AuthGuard from './components/AuthGuard.jsx';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import store from './store.js';

 let routes=[
    {
        path :'/',
        element:<App></App>,
        children:[
            {
                path:'', 
                loader:()=>redirect("home")
            },
            {
                path:'home', // userdefined
                element:<Dashboard></Dashboard>,
                children:[
                    {
                        path:"reactemployees",
                        element:<ReactEmployees></ReactEmployees>
                    },
                    {
                        path:"angularemployees",
                        element:<AngularEmployees></AngularEmployees>
                    }
                ]
            },
            {
                path:'showemployees', // userdefined
                element:<Employees></Employees>
            },
            {
                path:'adminlogin', // userdefined
                element:<AdminLogin></AdminLogin>
            },
            {
                path:'addemployee', // userdefined // add, addemp, addemployee, crudaddemployee
                element:
                <AuthGuard>
                     <EmployeeForm></EmployeeForm> 
                </AuthGuard>   
            },
            {
                path:'updateemployee/:empId', // userdefined
                element:
                <AuthGuard>
                    <EmployeeForm></EmployeeForm>
                </AuthGuard>
                , /* form having curent data of employee */
                loader:({params})=> {
                    return getEmployeeById(params.empId)
                }
            },
            {
                path:'updateemployeesecure', // userdefined
                element:<EmployeeForm></EmployeeForm> /* form having curent data of employee */
            }
        ]
    }

   
]


 const crudrouter=createBrowserRouter(routes); //Router

// js - DOM : methods
// in strictmode components is getting mounted 2 times for resolving issues may occur in first render
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <CookiesProvider>
            <RouterProvider router={crudrouter}>
            </RouterProvider>
        </CookiesProvider>
    </Provider>
);

//2. store provided in react application for all components
