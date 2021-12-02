import React, { useState, useEffect } from 'react';
import "./stylesheets/style.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import AddQuestion from './components/AddQuestion';
import Login from './components/Login';
import Signup from './components/Signup';

const axios = require('axios');
const client_id = '2891ceb6aae86745b92a';
const redirect_uri = 'http://localhost:8080';
const App = () => {

  const [user, setUser ] = useState({});

  useEffect(() => {
    const url = window.location.href;
    console.log('URL ', url);
    const hasCode = url.includes("?code=");
    console.log('USE EFFECT IS RAN ');
    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);

      const requestData = {
        code: newUrl[1]
      };
      console.log('HASCODE AND CODE IS : ', newUrl[1]);

      const resBody = {
        "client_id": "2891ceb6aae86745b92a",
        "client_secret": "8d571647e195b6b76fcf97a7d2e146125d0d79cd",
        "code": newUrl[1],
        "redirect_uri": "http://localhost:8080"
      };

      console.log('res BODY ', resBody);

      // fetch('https://github.com/login/oauth/access_token', {
      //   method: 'POST',
      //   // mode: 'no-cors',
      //   headers: {
      //     'Content-Type': 'Application/JSON',
      //     'Access-Control-Allow-Origin': '*'
      //   },
      //   body: JSON.stringify({
      //     "client_id": "2891ceb6aae86745b92a",
      //     "client_secret": "8d571647e195b6b76fcf97a7d2e146125d0d79cd",
      //     "code": "30e2088d61435d39f62f",
      //     "redirect_uri": "http://localhost:8080"
      //   })
      // })
      //   .then((data) => {
      //     console.log('data', data);
      //   })


      // axios.post('https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token', {
      //   "client_id": "2891ceb6aae86745b92a",
      //   "client_secret": "8d571647e195b6b76fcf97a7d2e146125d0d79cd",
      //   "code": newUrl[1],
      //   "redirect_uri": "http://localhost:8080"
      // })
      //   .then((data) => {
      //     console.log('data', data);
      //   })

      var req = new XMLHttpRequest();
      req.open('POST',
        'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
        true);
      req.setRequestHeader('Accept', 'application/json');
      req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      req.send('code=' + newUrl[1] +'&client_id=2891ceb6aae86745b92a' +'&client_secret=8d571647e195b6b76fcf97a7d2e146125d0d79cd');

      req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log('RESPONSE FROM GITHUB ACCESS TOKEN: ', this.responseText);
            //Get access token and set state.
            const token = JSON.parse(this.responseText).access_token;
            console.log('TOKEN FROM GITHUB : ', token);

            var myHeaders = new Headers();
            myHeaders.append("Authorization", "token "+token);
            
            var raw = "";
            
            var requestOptions = {
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
            };
            
            fetch("https://api.github.com/user", requestOptions)
              .then(response => response.json())
              .then(result => {
                const userProfile = {};
                userProfile.userName = result.login;
                userProfile.name = result.name;

                setUser(userProfile);
              })
              .catch(error => console.log('error', error));



        }
      };
    }
  })

  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route
            exact
            path="/"
            element={<><Header user={user} /><Main/></>}
          />
          <Route
            exact
            path="/add"
            element={<><Header /><AddQuestion/></>}
          />
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          {/* <Route
          exact
          path="/"
          element={AddQuestion}
        />
        <Route
          exact
          path="/"
          element={AddQuestion}
        />
        <Route
          exact
          path="/user"
          element={UserStats}
        /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;