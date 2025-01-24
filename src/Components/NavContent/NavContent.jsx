import React from 'react'
import './NavContent.css'
import logo from '../../assets/react.svg'
import MenuLink from '../MenuLink/MenuLink'

function NavContent() {
  return (
      <div id="navcontent">
        <img src="vite.svg" alt="Vite logo" />
        <img src={logo} alt="" />
        {/* <a href="http://www.react.dev"><img src={logo} alt="React" /></a> */}
        
        <div>
          <MenuLink linkname ="Home" url ="#home"/> 
          <MenuLink linkname ="About" url ="#about"/>
          <MenuLink linkname ="Contact" url ="#contact"/>
          <MenuLink linkname ="Login" url ="#login"/>
        </div>
      </div>
  )
}

export default NavContent
