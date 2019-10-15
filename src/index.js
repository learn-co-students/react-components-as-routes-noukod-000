import React from 'react';
import ReactDOM from 'react-dom';

// Step 1. Import react-router functions
import { BrowserRouter as Router}


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
