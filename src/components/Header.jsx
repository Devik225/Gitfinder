import React from 'react'
import "../componentsCSS/Header.css"
import Search from './Search'

function Header(props) {
  return (
    <div className='header'>
        <div></div>
        <div className='headerContent'>
        <div className='Logo'>Git-Finder</div>
        <Search update={props.update} updateRepo={props.updateRepo}/>
        </div>
        <div></div>
    </div>
  )
}

export default Header