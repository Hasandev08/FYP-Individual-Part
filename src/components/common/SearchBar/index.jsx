import React from 'react'

import './style.css'

function SearchBar({ handleChange }) {
  return (
    <div>
      <div className='search'>
        <input
          className='search-input'
          name='text'
          onChange={(e) => handleChange(e.target.value)}
          placeholder='Search...'
        />
      </div>
    </div>
  )
}

export default SearchBar
