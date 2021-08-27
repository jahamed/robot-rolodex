import React from 'react'

const Search = (props) => {
  const { setSearch } = props

  return (
    <input
      type='search'
      placeholder='Robot Name'
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default Search
