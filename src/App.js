import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Categories from "./components/Categories";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/:categories" component={Categories} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
