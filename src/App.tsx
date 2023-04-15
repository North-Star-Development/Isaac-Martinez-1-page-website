// importing components that makes up the app.
import About from "./components/About"
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
    </>
  )
}

export default App
