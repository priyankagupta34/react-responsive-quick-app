import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ChatBodyComponent from './components/chat-body-component/ChatBodyComponent';
import HeaderComponent from './components/header-component/HeaderComponent';
import LoginComponent from './components/login-component/LoginComponent';
import SignupComponent from './components/signup-component/SignupComponent';
import ContactComponent from './components/contact-component/ContactComponent';

function App() {
  return (
    <div>

      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={ LoginComponent }/>
          <Route exact={true} path="/login" component={LoginComponent} />
          <Route exact={true} path="/chat" component={ChatBodyComponent} />
          <Route exact={true} path="/signup" component={SignupComponent} />
          <Route exact={true} path="/contact" component={ContactComponent} />
          <Redirect exact={true} path="/" to='/login' />
          <Redirect path="*" to='/login' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
