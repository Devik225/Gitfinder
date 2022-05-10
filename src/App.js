import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import RepoContainer from './components/RepoContainer';
import Loader from './components/Loader';
import Home from './components/Home';


function App() {

  // Main States
  let [data, setData] = useState('');
  let [repos, setRepos] = useState('');
  let [loaderState, setLoaderState] = useState('none');
  let [notFound, setNotFound] = useState('');

  //Main Functions
  useEffect(() => {
    updateRepo(1);
  }, [data])

  useEffect(() => {
    setTimeout(() => {
      setLoaderState('none');
    }, 2000);
  }, [loaderState])

  let update = async(id)=>{
    let url = 'https://api.github.com/users/' + id;
    let response = await fetch(url);
    let values = await response.json();
    if(values.message === "Not Found"){
      setNotFound('');
    }
    else{
      setNotFound('none');
    }
    setLoaderState('');
    await setData(values);
  }

  let updateRepo = async(id)=>{
    let url = 'https://api.github.com/users/'+ data.login +'/repos?page='+ id +'&per_page=6';
    let response = await fetch(url);
    let values = await response.json();
    setLoaderState('');
    await setRepos(values);
  }

  return (
    <div className="main">

    {/* PreLoader */}
    <Loader state = {loaderState}/>

    {/* Home page/ profile not found page */}
    <Home notFound={notFound} update={update} updateRepo={updateRepo}/>

    {/* Header Section */}
      <Header update={update}
        updateRepo={updateRepo}
      />
      <div className='container'>
      <div></div>

      {/* Profile Section */}
        <Profile name={data.login} 
        link={data.html_url}
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
