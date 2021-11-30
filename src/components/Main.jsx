import React from 'react';
import Feed from './Feed';
import Search from './Search';
import Nav from './Nav';


const Main = (props) => {

  return (<div><Feed /> 
  <Search /> 
  <Nav />
  </div>);
}

export default Main;