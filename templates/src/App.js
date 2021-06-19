import "./App.scss";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Alert from "./components/Alert";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Fragment, useEffect } from "react";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUserAction } from "./actions/auth";

function App() {
  // [] are added to run the useEffect only once, otherwise it will a conitnous loop
  useEffect(() => {
    store.dispatch(loadUserAction);
  }, []);

  return (
    <Provider store={store}>
      <Router>
        {/* Fragment is like a ghost element which doesnt show up in app */}
        <Fragment>
          <Route exact path="/" component={Landing} />
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
