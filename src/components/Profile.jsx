import React from 'react'
import '../componentsCSS/Profile.css'
import ProfileInfo from './ProfileInfo'
import people from '../images/people.svg'
import location from '../images/location.svg'
import mail from '../images/mail.svg'
import repos from '../images/repos.svg'
import company from '../images/company.svg'

function Profile() {
  return (
    <div className='profile'>
      <div>
        <div className='profileImg'>
        <img width={'100%'} src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIwemVhbGFuZCUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80'></img>
        </div>
        <div className='profileName'>
          Devik
        </div>
        <div className='bio'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </div>
        <hr/>
        <ProfileInfo icon={people} query='10 Followers  |  20 Following'/>
        <ProfileInfo icon={mail} query='Email - '/>
        <ProfileInfo icon={repos} query='Public repos - '/>
        <ProfileInfo icon={location} query='Location - '/>
        <ProfileInfo icon={company} query='Company - '/>
      </div>
    </div>
  )
}

export default Profile