import React from "react";
import { Chart } from "react-google-charts";
import { useState, useEffect, useRef } from "react";


const InteractiveChart = (props) => {
    let [data, setData] = useState([]);
    // let [canRender, setCanRender] = useState(false);
    
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

    const strContentParse = (text) => {

        let item_list = []
        let quant_list = []
        let txt_list = text.split("\n");
        for (let i = 0; i < txt_list.length; i++) {
          let listing = txt_list[i].split(", ")
          item_list.push(listing[0])
          quant_list.push(parseInt(listing[1]))
        }
        return [item_list, quant_list];
      }


    useEffect(() => {

      if (Object.keys(props.form_data).length !== 0) {
        // console.log(JSON.stringify(props.form_data));
        console.log(props.form_data.carbohydrates);
        console.log(props.form_data.proteins);
        console.log(props.form_data.fats);
        console.log(strContentParse(props.form_data.carbohydrates));
        console.log(strContentParse(props.form_data.proteins));
        console.log(strContentParse(props.form_data.fats));
        const [carbTypes, carb_quant] = strContentParse(props.form_data.carbohydrates);
        const carbsum = carb_quant.reduce((a, b) => a + b );

        const [fatTypes, fat_quant] = strContentParse(props.form_data.fats);
        const fatsum = fat_quant.reduce((a, b) => a + b );

        const [protTypes, prot_quant] = strContentParse(props.form_data.proteins);
        const protsum = prot_quant.reduce((a, b) => a + b );

    
        setData( [ ["Task", "Hours per Day", { role: "tooltip", type: "string", p: { html: true } }],

            ["Protein", protsum, `<h3> Protein: ${protsum} g  </h3> 
              ${generateList(protTypes, prot_quant) }`],

            ["Carbohydrates", carbsum, `<h3> Carboydrates: ${carbsum} g  </h3>
              ${generateList(carbTypes, carb_quant) }`],

            ["Fat", fatsum, `<h3> Fat: ${fatsum} g  </h3>
              ${generateList(fatTypes, fat_quant) }`],

        ]);
      }

    }, [props.form_data, props.isLastStep]);


    // let data = [ ["Task", "Hours per Day", { role: "tooltip", type: "string", p: { html: true } }],

    //     ["Protein", 11, `<h1> Protein: <span>${props.diet.protein.quantity.reduce((a, b) => a + b )} g <span> </h1> 
    //       ${generateList(props.diet.protein.types, props.diet.protein.quantity) }`],

    //     ["Carbohydrates", 2, `<h1> Carboydrates: <span>${props.diet.carbs.quantity.reduce((a, b) => a + b )} g <span> </h1>
    //       ${generateList(props.diet.carbs.types, props.diet.carbs.quantity) }`],

    //     ["Fat", 2, `<h1> Fat: <span>${props.diet.fat.quantity.reduce((a, b) => a + b )} g <span> </h1>
    //       ${generateList(props.diet.fat.types, props.diet.fat.quantity) }`],

    // ];
      
    const options = {
        title: "Dietary Breakdown",
        is3D: true,
        tooltip: {
            isHtml: true, 
            trigger: "selection" // 'focus' | 'none' | 'selection'
        }
    };

    return   <> 

        { 
          data && data.length > 0 && (
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"400px"}
            />
          )
        }
      </>
}

export default InteractiveChart;
