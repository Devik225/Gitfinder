import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import RepoContainer from './components/RepoContainer';


function App() {

  let [data, setData] = useState('');
  let [repos, setRepos] = useState('');

  useEffect(() => {
    updateRepo(1);
  }, [data])
  

  let update = async(id)=>{
    let url = 'https://api.github.com/users/' + id;
    let response = await fetch(url);
    let values = await response.json();
    await setData(values);
  }

  let updateRepo = async(id)=>{
    let url = 'https://api.github.com/users/'+ data.login +'/repos?page='+ id +'&per_page=6';
    let response = await fetch(url);
    let values = await response.json();
    await setRepos(values);
  }

  return (
    <div className="main">

    {/* Header Section */}
      <Header update={update}
        updateRepo={updateRepo}
      />
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
        <RepoContainer updateRepo={updateRepo}
          data = {repos}
          pages = {data.public_repos}
        />
        <div></div>
      </div>
    </div>
  );
}

export default App;
