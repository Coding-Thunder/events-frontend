import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ROUTES from '../utils/Routes';
import Home from '../Home/Home';
import "./responsive.css"

const App:React.FC = () =>  {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.root} element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
