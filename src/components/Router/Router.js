import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { TimingsScreen, Home } from "../../screens";

class Router extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const { children } = this.props;

    return (
      <BrowserRouter>
        {children}
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/timings/" component={TimingsScreen} />
        </main>
      </BrowserRouter>
    );
  }
}

export default Router;
