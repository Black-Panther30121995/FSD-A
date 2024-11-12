import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Marks from './Marks.jsx'
import DisplayMarks from './DisplayMarks.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name={"Shivani"} email={"shivani@gmail.com"} mob={"90XXXXX"}/>
    <DisplayMarks/>
  </StrictMode>,
)
