import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Product from "./Components/Product";
import Others from "./Components/Others";
import Profile from "./Components/Profile";

export default function Router() {
  return (
    <div style={{ backgroundColor: "red", textAlign: "center" }}>
      <div>
        <NavLink
          exact
          to='/'
          activeClassName='active'
          style={{ marginRight: 20, color: "white", textDecoration: "none" }}
        >
          Product
        </NavLink>
        <NavLink
          to='/Profile'
          activeClassName='active'
          style={{ marginRight: 20, color: "white", textDecoration: "none" }}
        >
          Profile
        </NavLink>
        <NavLink
          to='/Others'
          activeClassName='active'
          style={{ marginRight: 20, color: "white", textDecoration: "none" }}
        >
          Others
        </NavLink>
      </div>
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
