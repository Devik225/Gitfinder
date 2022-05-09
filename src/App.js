import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import RepoContainer from './components/RepoContainer';

function App() {
  return (
    <div className="main">
      <Header/>
      <div className='container'>
      <div></div>
        <Profile/>
        <RepoContainer/>
        <div></div>
      </div>
    </div>
  );
}

export default App;
