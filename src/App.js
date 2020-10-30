import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";
import Error from "./pages/Error";
import {Switch,Route} from "react-router-dom";
import Navbar from "./components/Navbar"
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Switch>
      <Route exact path ="/"component={Home}/>
      <Route exact path ="/rooms/"component={Projects}/>
      <Route exact path ="/rooms/:slug"component={SingleProject}/>
      <Route component ={Error}/>
    </Switch>
    </>
  );
}

export default App;
