import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Dashboard from "../dashboard/Dashboard";
import Pokedex from "../pokedex/Pokedex";
import Pokemon from "../pokedex/Pokemon";
import PrivateRoute from "../routing/PrivateRoute";
import NotFound from "../layout/NotFound";

const Routes = () => {
  return (
    <section className="container">
      {/*every page within the theme except for the landing page has a class of 'container' to push everything to the middle
        for the landing page, we want the image to go all the way over so it doesn't have the class of 'container'*/}
      <Switch>
        {/*wrap everything in a switch so we don't have issues, especially when we create our 'private route' component*/}
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/pokedex/" component={Pokedex} />
        <PrivateRoute exact path="/pokedex/:id" component={Pokemon} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;