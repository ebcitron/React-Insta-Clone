import React from 'react';

const SearchBar = props => {
  
    return (
        <div className='SearchBar'>
            <input
                onSubmit = {props.searchSubmit}
                type='text'
                placeholder='Search for Something'
                value={props.search}
                onChange={props.handleChange}
                name='search'
            />
            <button onClick={props.searchSubmit}>Search</button>
        </div>
    )
}


export default SearchBar;