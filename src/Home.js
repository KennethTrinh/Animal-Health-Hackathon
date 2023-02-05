import React from 'react';
import logo from './logo.svg';
import InteractiveChart from './InteractiveChart.js';
import { dog_breeds } from './Data';
import MultiStepForm from './Form.js';

function Home() {
  return (
    <div className="App">
      <h1 > Bone Appétit ♥ </h1>
      <MultiStepForm />

    </div>
  );
}

export default Home;