import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import NavLinks from "./NavLinks";
import HomePage from "./HomePage";
import TwitterFeed from "./TwitterFeed";
import TacosFeed from "./TacosFeed";
import TacoDetail from "./TacoDetail";
import SpecialTacoPage from "./SpecialTacoPage";

const MyRouter = () => {
  return (
    <div>
      <Router>
        <div>
          <NavLinks />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/twitter" component={TwitterFeed} />
            <Route exact path="/tacos" component={TacosFeed} />
            <Route path="/specialtacopage" component={SpecialTacoPage} />
            <Route
              exact
              path="/tacos/:id"
              render={props => {
                return (props.match.params.id === "42") ? (
                  <Redirect to="/specialTacoPage" />
                ) : (
                  <TacoDetail id={props.match.params.id} />
                );
              }}
            />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default MyRouter;
