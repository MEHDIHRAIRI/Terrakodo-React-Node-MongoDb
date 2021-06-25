import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DataTable from './components/Datatable';
import NavBar from "./components/NavBar"
import './App.css';
import BoardMain from './components/BoardMain';

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Fragment>
          <Switch>
            <Route path="/Task" component= {DataTable} />
            <Route path="/board" component= {BoardMain}  />
          </Switch>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
