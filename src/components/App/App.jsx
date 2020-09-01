import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import WebsiteContainer from '../../containers/WebsiteContainer';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import About from '../About/About';
import ProjectList from '../Projects/ProjectList';
import LastHope from '../Projects/Projects/LastHope';
import JhemmFighters from '../Projects/Projects/JhemmFighters';
import Libraryinth from '../Projects/Projects/Libraryinth';
import DropZone from '../Projects/Projects/DropZone';

export default function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path = '/' component = {WebsiteContainer}></Route>
          <Route exact path = '/about' component = {About}></Route>
          <Route exact path = '/contact' component = {Contact}></Route>
          <Route exact path = '/projects' component = {ProjectList}></Route>
          <Route exact path = '/lasthope' component = {LastHope}></Route>
          <Route exact path = '/jhemmfighters' component = {JhemmFighters}></Route>
          <Route exact path = '/libraryinth' component = {Libraryinth}></Route>
          <Route exact path = '/dropzone' component = {DropZone}></Route>
        </Switch>
      </Router>
    </>);
}
