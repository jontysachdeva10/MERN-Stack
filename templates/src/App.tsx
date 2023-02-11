import './App.scss';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
// import { Provider } from 'react-redux';
import Home from './pages/Home';
import Footer from './components/Footer';
// import About from './pages/About';
// import Register from './components/Register';
// import Alert from './components/Alert';
// import Dashboard from './components/Dashboard';
// import About from './pages/About';
// Redux
// import store from './store';

function App() {
  return (
    // <Provider store={store}>
    <div>
      {/* <Router>
        <>
          <Route exact path="/" component={Home} />
          <Switch>
            <Route exact path="/about" component={About} />
          </Switch>
        </>
      </Router> */}
      <Home />
      <Footer />
    </div>
    // </Provider>
  );
}

export default App;
