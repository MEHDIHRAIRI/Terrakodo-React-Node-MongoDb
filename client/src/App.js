import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DataTable from './components/Datatable';
import NavBar from "./components/NavBar"
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Fragment>
          <Switch>
            <Route path="/Task" component= {DataTable} />
          </Switch>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
