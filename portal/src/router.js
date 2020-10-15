import React from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Product from "./Components/Product";
import Others from "./Components/Others";
import Profile from "./Components/Profile";
import Header from "./Components//Header";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import ImportExport from "./Components/ImportExport";

export default function Router() {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Header />
        <ImportExport />
        <SearchBar />
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
