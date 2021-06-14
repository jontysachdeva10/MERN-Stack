import "./App.scss";
import Landing from "./components/Landing";
// import Login from "./components/login-register/Login";
import Register from "./components/Register";
// import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Dashboard from "./components/Dashboard/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Fragment, useEffect } from "react";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./components/util/setAuthToken";
// import PrivateRoute from "./components/util/PrivateRoute";
import { loadUserAction } from "./actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  // [] are added to run the useEffect only once, otherwise it will a conitnous loop
  useEffect(() => {
    store.dispatch(loadUserAction);
  }, []);

  return (
    <Provider store={store}>
      <Router>
        {/* Fragment is like a ghost element which doesnt show up in app */}
        {/* <Navbar /> */}
        <Fragment>
          <Route exact path="/" component={Landing} />
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/dashboard" component={Dashboard} />
              {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
            </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
