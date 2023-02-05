import React from "react";
import { Chart } from "react-google-charts";
import { useState, useEffect, useRef } from "react";


const InteractiveChart = (props) => {
  let [data, setData] = useState([]);


  const generateList = (macronutrient, quantity) => {
    return `
          <ul>
            ${macronutrient.map((item, index) => {
      return `
                <li>
                  ${item}: ${quantity[index]} 
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
    let quant_pattern = new RegExp("\s*,\s*")
    for (let i = 0; i < txt_list.length; i++) {
      let listing = txt_list[i].split(quant_pattern)
      item_list.push(listing[0])
      quant_list.push(parseInt(listing[1]))
    }
    return [item_list, quant_list];
  }


  useEffect(() => {

    if (Object.keys(props.form_data).length !== 0) {
      // console.log(JSON.stringify(props.form_data));
      // console.log(props.form_data.carbohydrates);
      // console.log(props.form_data.proteins);
      // console.log(props.form_data.fats);
      // console.log(strContentParse(props.form_data.carbohydrates));
      // console.log(strContentParse(props.form_data.proteins));
      // console.log(strContentParse(props.form_data.fats));
      const [carbTypes, carb_quant] = strContentParse(props.form_data.carbohydrates);
      const carbsum = carb_quant.reduce((a, b) => a + b);

      const [fatTypes, fat_quant] = strContentParse(props.form_data.fats);
      const fatsum = fat_quant.reduce((a, b) => a + b);

      const [protTypes, prot_quant] = strContentParse(props.form_data.proteins);
      const protsum = prot_quant.reduce((a, b) => a + b);
    
        setData( [ ["Macro Nutrient", "Total", { role: "tooltip", type: "string", p: { html: true } }],

            ["Protein", protsum, ` ${generateList(protTypes, prot_quant) }`],

            ["Carbohydrates", carbsum, `${generateList(carbTypes, carb_quant) }`],

            ["Fat", fatsum, `${generateList(fatTypes, fat_quant) }`],

        ]);
      }

    }, [props.form_data, props.isLastStep]);


  const options = {
    title: "Dietary Breakdown",
    is3D: true,
    tooltip: {
      isHtml: true,
      trigger: "selection"
    }
  };

  return <>

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
