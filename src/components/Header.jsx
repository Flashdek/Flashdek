import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    let userInfo = <div id='headerbtns'>
        <Link to="/login"><button type='button'>Log In</button></Link>
        <Link to="/signup"><button type='button'>Sign Up</button></Link>
        </div>;
    if(props.user.userName){
        userInfo =  <ul><li>UserName: {props.user.userName} </li><li>Name: {props.user.name}</li></ul>;
    }
    return (
        <div id='Header'>
            <h1 id='logo'>Flashdek</h1>
            <div id = 'right-header'>
                {userInfo}
            </div>
        </div>
    )
}

export default Header;