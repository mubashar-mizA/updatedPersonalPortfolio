import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Landing from './components/landing.jsx';
import Projects from './components/projects.jsx';
import Footer from './components/footer.jsx';


import './index.css';  // Assuming index.css contains Tailwind directives


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <div className='bg-black'>
      <Landing />
    </div>
    <div className='bg-gray-300'>
      <Projects />
    </div>
    <Footer />


  </StrictMode>,
)
