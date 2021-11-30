import React from 'react';
import Feed from './Feed';
import Search from './Search';
import Nav from './Nav';
import Header from './Header';
const Main = (props) => {

  return (<div>
    <Header/>
    <Feed /> 
  <Search /> 
  <Nav />
  </div>);
}

export default Main;