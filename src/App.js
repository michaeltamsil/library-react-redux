import React from "react";
import { connect } from "react-redux";

import { Redirect, HashRouter as Router, Route, Switch } from "react-router-dom";

import Libraries from "./components/Libraries";
import Login from './components/Login';
import Students from './components/Students';

import Navbar from "./components/Navbar";

function App(props) {
  return (
      <Router>
        <div className="container">
          <Navbar />
          <div className="mt-4">
            <Switch>
              <Route path="/libraries">
                { ( props.viaFacebook && props.viaFacebook.id ) ? <Libraries /> : <Redirect push to="/login"/>}
              </Route>
              <Route path="/students">
                
                { ( props.viaFacebook && props.viaFacebook.id ) ? <Students /> : <Redirect push to="/login"/>}
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

const mapStateToProps =(state) => {
  return {
    viaFacebook: state.login.viaFacebook
  }
}

export default connect(mapStateToProps)(App);
