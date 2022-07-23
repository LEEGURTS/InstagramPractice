import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FeedPage from './Page/FeedPage';
import IndexPage from './Page/IndexPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<IndexPage />}></Route>
        <Route path="/" element={<FeedPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
