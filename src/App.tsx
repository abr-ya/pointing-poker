import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { About, Poker, Error404, Components } from "./pages";
// import Nav from "./components/Nav/Nav";
import "./App.notmodule.scss";

const App = (): JSX.Element => (
  <BrowserRouter basename="/">
    {/* <div className="container">
      <Nav />
    </div> */}
    <Switch>
      <Route path="/" exact component={Poker} />
      <Route path="/about" component={About} />
      <Route path="/test" component={Components} />
      <Route path="/404" component={Error404} />
      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);

export default App;
