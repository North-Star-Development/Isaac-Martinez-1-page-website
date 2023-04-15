// importing components that makes up the app.
import About from "./components/About"
import Services from "./components/Services"
import Splash from "./components/Splash"


// JSX Component
function App() {
// Building block
  return (
    <>
     <Splash/>
     <Services/>
     <About/>
    </>
  )
}

export default App
