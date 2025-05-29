import { useState } from "react";
import "./App.css"
import { Navbar } from "./components/Navbar"
import { MobileMenu } from "./components/MobileMenu"
import { Home } from "./components/sections/Home"
import { About } from "./components/sections/About"
import "./index.css"

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <Navbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <MobileMenu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Home />
      <About />
    </>
  )
}

export default App