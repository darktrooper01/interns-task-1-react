import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './pages/Hero.jsx'
import Nav from './components/Nav.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Nav />
  </StrictMode>
)
