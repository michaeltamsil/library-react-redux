import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Libraries from "./components/Libraries";
import Login from './components/Login';
import Students from './components/Students';

import Navbar from "./components/Navbar";

import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

store.subscribe(() => {
  console.log('data')
  console.log(store.getState());
})

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Navbar />
          <div className="mt-4">
            <Switch>
              <Route path="/libraries">
                <Libraries />
              </Route>
              <Route path="/students">
                <Students />
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
