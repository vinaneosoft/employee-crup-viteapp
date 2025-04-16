import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import "bootstrap/dist/css/bootstrap.min.css";
import  "bootstrap/dist/js/bootstrap.bundle.min.js"


// js - DOM : methods
// in strictmode components is getting mounted 2 times for resolving issues may occur in first render
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
