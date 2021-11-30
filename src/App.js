import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import AddQuestion from './components/AddQuestion';

const App = () => {
  return (
    <div>Hello THERE!!!
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