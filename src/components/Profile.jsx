import React from 'react'
import '../componentsCSS/Profile.css'
import ProfileInfo from './ProfileInfo'
import people from '../images/people.svg'
import location from '../images/location.svg'
import mail from '../images/mail.svg'
import repos from '../images/repos.svg'
import company from '../images/company.svg'
import github from '../images/github.svg'

function Profile(props) {
  // let [name, bio, followers, following, email, repos, location, company] = props;
  let peopleQuery = props.followers +  ' Followers  |  ' + props.following + ' Following';
  let emailQuery = 'Email - ' + props.email;
  let reposQuery = 'Public repos - ' + props.repos;
  let locationQuery = 'Location - ' + props.location;
  let companyQuery = 'Company - ' + props.company;
  return (
    <div className='profile'>
      <div>
        <div className='profileImg'>
        <img width={'100%'} src={props.image}></img>
        </div>
        <div className='profileName'>
          {props.name}
          <a target='_blank' href={props.link}><img src={github}/></a>
        </div>
        <div className='bio'>
          {props.bio}
        </div>
        <hr/>
        <ProfileInfo icon={people} query = {peopleQuery} />
        <ProfileInfo icon={mail} query = {emailQuery}/>
        <ProfileInfo icon={repos} query = {reposQuery}/>
        <ProfileInfo icon={location} query = {locationQuery}/>
        <ProfileInfo icon={company} query = {companyQuery}/>
      </div>
    </div>
  )
}

export default Profile