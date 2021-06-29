import React from "react";
import Home from "./Home";
import DetailView from "./DetailView";
import {
        BrowserRouter as Router,
        Switch,
        Route
      } from "react-router-dom";

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/:id">
                        <Home />
                    </Route>
                    <Route exact path="/anime/details/:id">
                        <DetailView />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default Routes;