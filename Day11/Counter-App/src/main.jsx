import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ImageEditor from './ImageEditor'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImageEditor/>
  </StrictMode>,
)
