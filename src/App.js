import React from 'react';
import "./stylesheets/style.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import AddQuestion from './components/AddQuestion';
import Login from './components/Login';
import Signup from './components/Signup';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route
            exact
            path="/"
            element={<><Header /><Main/></>}
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