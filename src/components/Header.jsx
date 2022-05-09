import React from 'react'
import "../componentsCSS/Header.css"
import Search from './Search'

function Header() {
  return (
    <div className='header'>
        <div></div>
        <div className='headerContent'>
        <div className='Logo'>Git-Finder</div>
        <Search/>
        </div>
        <div></div>
    </div>
  )
}

export default Header