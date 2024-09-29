import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Print from './Print.jsx'
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <App /> */}
  <Print />
  </StrictMode>,
)
