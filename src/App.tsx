import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './Page/IndexPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="mypage" element={<IndexPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
