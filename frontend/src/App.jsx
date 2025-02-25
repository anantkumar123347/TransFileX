import { Routes,BrowserRouter, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Image from "./pages/Image"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/home" Component={HomePage}/>
      <Route path="/images" Component={Image}/>
      <Route path="/about" Component={AboutUs}/>
      <Route path="/contact" Component={ContactUs}/>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
