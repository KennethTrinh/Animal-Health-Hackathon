import React from 'react';
import logo from './logo.svg';
import InteractiveChart from './InteractiveChart.js';



function Home() {
    return (
      <div className="App">
        <h1 > Bone Appétit ♥ </h1>
        <InteractiveChart 
          // nutrition={ {protein: 11, carbs: 2, fat: 2} } 
          diet={{
            protein: {types: ["chicken", "beef", "fish"], quantity:  [1, 2, 3]},
            carbs: {types: ["rice", "potatoes", "pasta"], quantity:  [1, 2, 3]},
            fat: {types: ["butter", "oil", "avocado"], quantity:  [1, 2, 3]}
          }}
        />
      </div>
    );
  }

export default Home;