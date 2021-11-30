import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (<div>
    <Link to="/add"><button>Add Question</button></Link> 
    <button>View Submitted Questions</button>
    <button>Edit Profile</button>
  </div>);
};

export default Nav;