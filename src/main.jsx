import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ModoOscuro from './context/modoOscuro.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModoOscuro>
    <App />
    </ModoOscuro>
  </StrictMode>,
)
