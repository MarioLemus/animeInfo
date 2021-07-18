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
                    <Route exact path="/AnimeInfo/" component={Home} />
                    <Route exact path="/AnimeInfo/fr/:currentAnimeShows" component={Home} />
                    <Route exact path="/AnimeInfo/:currentAnimeShows/details/:animeShowId" component={DetailView} />
                    <Route path="*" component={Error404} />
                </Switch>
            </Router>
        </div>
    )
}
export default Routes;