import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};
 
ReactDOM.render(
  <Home />,
  document.getElementById('root')
);

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route path="/" render={Home} />
      <Route exact path="/about" render={About} />
      <Route exact path="/login" render={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);

const Login = () => {
  return (
    <div>
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