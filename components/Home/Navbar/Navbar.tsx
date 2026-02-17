import React from 'react'
import MainNavbar from './MainNavbar'
import MobileNavbar from './MobileNavbar'

const NavLinks = [
  { name: "Home", href: "#"},
  { name: "About", href: "#"},
  { name: "Skills", href: "#"},
  { name: "Experience", href: "#"},
  // { name: "Projects", href: "#"},
  { name: "Contact", href: "#"},
]

const Navbar = () => {
  return (
    <div>
        <MainNavbar />
        <MobileNavbar />
    </div>
  )
}

export default Navbar