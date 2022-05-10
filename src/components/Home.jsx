import React from 'react'
import '../componentsCSS/Home.css'
import Search from './Search'

function Home(props) {
    const styleLoad = {display:props.notFound};
  return (
    <div style={styleLoad} className='home'>
    <div className='homeText'>Enter a valid github profile</div>
    <Search update={props.update} updateRepo={props.updateRepo}/>
    </div>
  )
}

export default Home