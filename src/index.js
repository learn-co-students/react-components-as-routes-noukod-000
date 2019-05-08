import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/login">login</a>
    </div>
  );
};
 
const About = () => {
  return (
    <div>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/login">login</a>
      <h1>This is my about component!</h1>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/login">login</a>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route exact path="/" render={Home} />
      <Route exact path="/about" render={About} />
      <Route exact path="/login" render={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);

