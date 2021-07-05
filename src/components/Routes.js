import React from "react";
import Home from "./Home";
import DetailView from "./DetailView";

import {
        BrowserRouter as Router,
        Switch,
        Route
      } from "react-router-dom";
import { Error404 } from "./Error404";

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/anime/:currentAnimeShows" component={Home} />
                    <Route exact path="/anime/:currentAnimeShows/details/:animeShowId" component={DetailView} />
                    <Route path="*" component={Error404} />
                </Switch>
            </Router>
        </div>
    )
}
export default Routes;