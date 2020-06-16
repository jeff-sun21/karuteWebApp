import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import WebCamTest from "./containers/WebCamTest";

import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
  		<Login />
	</Route>
	<Route exact path="/webCamTest">
  		<WebCamTest />
	</Route>

      {/* Finally, catch all unmatched routes */}
		<Route>
		  <NotFound />
		</Route>
    </Switch>
  );
}