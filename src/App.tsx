// importing components that makes up the app.
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Services from "./components/Services"
import Splash from "./components/Splash"
import Testimonials from "./components/Testimonials"


// JSX Component
function App() {
// Building block
  return (
    <>
     <Splash/>
     <Services/>
     <About/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
