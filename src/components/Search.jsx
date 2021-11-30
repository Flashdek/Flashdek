import React from 'react';

function Search() {

  return (
    <div>
      <form>
        <label>
        Search
        <div></div>
        <input type="text" placeholder="Type keyword here"/>
        </label>
        <div></div>
        <input type="submit" value="Find" />
      </form>
    </div>
  )
}

export default Search;
