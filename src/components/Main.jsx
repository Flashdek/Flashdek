import React from 'react';
import Feed from './Feed';
import Search from './Search';
import Nav from './Nav';


const Main = (props) => {

  return (<div className="main"><Feed /> 
    <div className="right-bar">
      <Search /> 
      <Nav />
    </div>
  </div>);
}

export default Main;