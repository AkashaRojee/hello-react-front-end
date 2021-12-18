import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
        <Route
          path="/"
          element={<Link to="/greeting">Display random greeting</Link>}
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
