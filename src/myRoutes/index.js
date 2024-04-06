import React from "react";
import { Home, Movies, NewComics } from '../pages'
import {
  Routes,
  Route,
} from "react-router-dom";

function MyRoutes() {
  return (
    <Routes>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/newcomics'element={<NewComics/>}/>
      <Route path='/' element={<Home/>} exact/>
    </Routes>
  );
}

export default MyRoutes;