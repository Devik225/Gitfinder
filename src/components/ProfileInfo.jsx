import React from 'react'
import '../componentsCSS/ProfileInfo.css'

function ProfileInfo(props) {
  return (
    <div className='profileInfo'>
        <img src={props.icon} className='profileInfoIcon'></img>
        <div className='profileInfoQuery'>{props.query}</div>
    </div>
  )
}

export default ProfileInfo