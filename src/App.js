import React from 'react';
import Cenik from "./pages/Cenik"
import Bio from "./pages/Bio"
import Home from "./pages/Home"
import Kontakt from "./pages/Kontakt"
import Navbar from './components/Navbar';
import Footer from "./components/Footer"

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/Cenik":
      component = <Cenik />
      break
    case "/Bio":
      component = <Bio />
      break
    case "/Kontakt":
      component = <Kontakt />
      break
    case "/Home":
      component = <Home />
      break
    default:
      component = <Home />
      break
  }
  return (
    <>
      <div className='app'>
        <Navbar/>
        <div className="container">
          {component}
        </div>
        <Footer/>
      </div>
   </>
  );
}

export default App;
