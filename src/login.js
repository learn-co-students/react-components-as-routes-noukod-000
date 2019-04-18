import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
            <label>Username</label>
          </div>

          <div>
            <input type="password" name="password" placeholder="Password" />
            <label>Password</label>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}