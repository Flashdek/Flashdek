import React from 'react';

export default function header( {username}) {
    return (
        <div id='Header'>
            <div id='logo'>Flashdek</div>
            <div id='headerbtns'>
                <button type='button'>LogIn</button>
                <button type='button'>SignUp</button>
            </div>
        </div>
    )
}