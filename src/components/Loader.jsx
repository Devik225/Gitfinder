import React from 'react'
import '../componentsCSS/Loader.css'
import gitLogo from '../images/16421-github-icon-black.gif'

function Loader(props) {
    const styleLoad = {display:props.state};
  return (
    <div style={styleLoad} className='loader'>
        <img src={gitLogo} className='gitLoader'></img>
    </div>
  )
}

export default Loader