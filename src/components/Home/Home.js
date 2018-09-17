import React from 'react';
import Radium from 'radium';
import { log } from 'console';

const Home = (props) => {
  log(`Hello World!`);
  return (
    <div className="home">
      <p> React TODO App </p>
    </div>
  );
}

export default Home;