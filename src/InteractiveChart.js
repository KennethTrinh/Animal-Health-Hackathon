import React from "react";
import { Chart } from "react-google-charts";
import { useState, useEffect, useRef } from "react";
import { findAllByTestId } from "@testing-library/react";



const InteractiveChart = (props) => {
    
    const [protein, setProtien] = useState(props.diet.protein.quantity.reduce((a, b) => a + b )); //11
    const [carbs, setCarbs] = useState(props.diet.carbs.quantity.reduce((a, b) => a + b ));
    const [fat, setFat] = useState(props.diet.fat.quantity.reduce((a, b) => a + b ));

    const [proteinTypes, setProtienTypes] = useState(props.diet.protein.types); //["chicken", "beef", "fish"]
    const [proteinQuantity, setProtienQuantity] = useState(props.diet.protein.quantity); // [1, 2, 3]
    const [carbsTypes, setCarbsTypes] = useState(props.diet.carbs.types);
    const [carbsQuantity, setCarbsQuantity] = useState(props.diet.carbs.quantity);
    const [fatTypes, setFatTypes] = useState(props.diet.fat.types);
    const [fatQuantity, setFatQuantity] = useState(props.diet.fat.quantity);
    
    const generateList = (macronutrient, quantity) => {
        return `
          <ul>
            ${macronutrient.map((item, index) => { // <button class="decrement" onclick="() => {console.log('hi')}">-</button>
              return `
                <li>
                  ${item}: 
                  <span>${quantity[index]}</span>
                </li>
              `;
            }).join('')}
          </ul>
        `;
      };
    const[data, setData] = useState([
        ["Task", "Hours per Day", { role: "tooltip", type: "string", p: { html: true } }],

        ["Protein", protein, `<h1> Protein: <span>${protein} g <span> </h1> ${generateList(proteinTypes, proteinQuantity) }`],
        ["Carbohydrates", carbs, `<h1> Carboydrates: <span>${carbs} g <span> </h1> ${generateList(carbsTypes, carbsQuantity) }`],
        ["Fat", fat, `<h1> Fat: <span>${fat} g <span> </h1> ${generateList(fatTypes, fatQuantity) }`],
    ]);

    useEffect(() => {
        console.log('hi');

    }, [protein, carbs, fat, proteinTypes, proteinQuantity, carbsTypes, carbsQuantity, fatTypes, fatQuantity]);


    // let data = [
    //     ["Task", "Hours per Day", { role: "tooltip", type: "string", p: { html: true } }],

    //     ["Protein", 11, `<h1> Protein: <span>${props.nutrition.protein} g <span> </h1> ${generateList(props.diet.protein.types, props.diet.protein.quantity) }`],
    //     ["Carbohydrates", 2, `<h1> Carboydrates: <span>${props.nutrition.protein} g <span> </h1>`],
    //     ["Fat", 2, `<h1> Fat: <span>${props.nutrition.protein} g <span> </h1>`],
    // ];
      
    const options = {
        title: "Dietary Breakdown",
        is3D: true,
        tooltip: {
            isHtml: true, 
            trigger: "selection" // 'focus' | 'none' | 'selection'
        }
    };

    return (
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      );
}

export default InteractiveChart;
