import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id='Header'>
            <div id='logo'>Flashdek</div>
            <div id='headerbtns'>
                <Link to="/login"><button type='button'>LogIn</button></Link>
                <button type='button'>SignUp</button>
            </div>
        </div>
    )
}

export default Header;