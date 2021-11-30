import React from 'react';
import "./stylesheets/style.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import AddQuestion from './components/AddQuestion';
import Login from './components/Login';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Main/>}
          />
          <Route
            exact
            path="/add"
            element={<AddQuestion/>}
          />
          <Route exact path="/login" element={<Login/>}/>
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