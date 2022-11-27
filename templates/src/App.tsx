import './App.scss';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
// import { Provider } from 'react-redux';
import Landing from './components/Landing';
// import Register from './components/Register';
// import Alert from './components/Alert';
// import Dashboard from './components/Dashboard';
import About from './components/About';
// Redux
// import store from './store';

function App() {
  return (
    // <Provider store={store}>
    <div>
      {/* <Router>
        <>
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </>
      </Router> */}
      <Landing />
      <About />
    </div>
    // </Provider>
  );
}

export default App;
