import React from 'react'
import "../componentsCSS/Search.css"

function Search() {
  return (
    <div className='search'>
        <input type={'text'} className='searchBox' placeholder='Search user'></input>
        <button type={'submit'} className='searchSubmit'>Search</button>
    </div>
  )
}

export default Search