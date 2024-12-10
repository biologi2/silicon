import React from 'react'
import LogoType from '..//assets/images/logo.svg'
import DarkModeSwitch from './DarkModeSwitch'

const Navbar = () => {
    return (
        <nav class="navbar">
         <img class="LogoOne" src="/images/logo.svg" alt="Silicon Logo"/>
         <a class="Meny" href="feature.html">Features</a>
         <span class="DarkMode" >Dark Mode</span>

         <DarkModeSwitch/>
         <button class="SignIn">Sign in/up</button>
        </nav>
    )
}

export default Navbar