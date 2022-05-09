import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import RepoContainer from './components/RepoContainer';


function App() {

  const [name, setName] = useState('devik225');
  const [data, setData] = useState('');

  let update = async(id)=>{
    let url = 'https://api.github.com/users/' + id;
    let response = await fetch(url);
    let values = await response.json();
    await setData(values);
  }

  return (
    <div className="main">

    {/* Header Section */}
      <Header update={update}/>
      <div className='container'>
      <div></div>

      {/* Profile Section */}
        <Profile name={data.login} 
        image={data.avatar_url}
        bio={data.bio} 
        followers={data.followers} 
        following={data.following} 
        email={data.email}
        repos={data.public_repos}
        location={data.location}
        company={data.company}
        />

        {/* Repositories Section */}
        <RepoContainer/>
        <div></div>
      </div>
    </div>
  );
}

export default App;
