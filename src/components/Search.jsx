import React, {useState, useEffect} from 'react'
import "../componentsCSS/Search.css"

function Search(props) {

  const[name, setName]=useState('');

  const handleSubmit = e=>{
    e.preventDefault();
    e.target.reset();
    console.log(name);
    props.update(name);
  }

  const handleChange = e=>{
    setName(e.target.value);
  }

  return (
        <form onSubmit={handleSubmit} className='search'>
        <input onChange={handleChange} type={'text'} className='searchBox' placeholder='Search user' ></input>
        <button onSubmit={handleSubmit} type={'submit'} className='searchSubmit'>Search</button>
        </form>
  )
}

export default Search