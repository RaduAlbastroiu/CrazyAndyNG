import React from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Product from "./Components/Product";
import Others from "./Components/Others";
import Profile from "./Components/Profile";
import Header from "./Components//Header";
import "./App.css";

export default function Router() {
  return (
    <div
      style={{
        backgroundColor: "#3f51b5",
        textAlign: "center",
      }}
    >
      <Header />
      <Route
        render={(location) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames='fade'>
              <Switch>
                <Route exact path='/' component={Product} />
                <Route path='/profile' component={Profile} />
                <Route path='/others' component={Others} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}
