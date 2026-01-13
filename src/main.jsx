import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './pages/Hero.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
  </StrictMode>
)
