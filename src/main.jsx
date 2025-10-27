import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div>Beneficios</div>
    <p>Acumula puntos dictando tu rut en caja</p>
    <p>Cada 10</p>
  </StrictMode>,
)
