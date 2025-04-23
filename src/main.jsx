import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import "bootstrap/dist/css/bootstrap.min.css";
import  "bootstrap/dist/js/bootstrap.bundle.min.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


 let routes=[
    {
        path :'/',
        element:<App></App>
    }
]

 const crudrouter=createBrowserRouter(routes); //Router

// js - DOM : methods
// in strictmode components is getting mounted 2 times for resolving issues may occur in first render
createRoot(document.getElementById('root')).render(
    <RouterProvider router={crudrouter}>
    </RouterProvider>
);
