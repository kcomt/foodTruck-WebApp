import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/layout";
import Carritos from "./components/carritos/carritos";
import Tabsyx from "./components/tabsyx/tabsyx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout />
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <div>
                  <Carritos></Carritos>
                </div>
              )}
            />
            <Route
              exact
              path="/detalle"
              render={(props) => <Tabsyx></Tabsyx>}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
