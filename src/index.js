import React,{ useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import { range } from "d3-array";
import { scaleOrdinal } from "d3-scale";
//User based component
import Scatterplot from './components/ScatterPlot';
import { Tooltip, tooltipContext } from "./components/ToolTips";
import "./index.css";


function App() {
  // Generate random data on first load
  const data = useMemo(
    () =>
      range(100).map(i => ({
        id: i,
        number1: Math.random(),
        number2: Math.random(),
        name: Faker.name.findName(),
        zipCode: Faker.address.zipCode(),
        state: Faker.address.state(),
        color: Faker.internet.color()
      })),
    []
  );

  // bucketize states into 50 buckets
  const stateToNumber = scaleOrdinal()
    .domain(data.map(d => d.state))
    .range(range(50));

  // alphabetize letters into 25 buckets
  const alphabet = scaleOrdinal()
    .domain("abcdefghijklmnoprstuvwxyz".split(""))
    .range(range(25));

  const state = Tooltip();

  return (
    <div className="App">
      <h1>React & D3 dashboard</h1>
      <tooltipContext.Provider value={state}>
        <svg width="800" height="600">
          <Scatterplot
            x={0}
            y={0}
            width={200}
            height={200}
            data={data}
            xDimension={d => d.number1}
            yDimension={d => d.number2}
          />

          <Scatterplot
            x={250}
            y={0}
            width={200}
            height={200}
            data={data}
            xDimension={d => d.number1}
            yDimension={d => stateToNumber(d.state)}
          />

          <Scatterplot
            x={0}
            y={250}
            width={200}
            height={200}
            data={data}
            xDimension={d => stateToNumber(d.state)}
            yDimension={d => alphabet(d.name[0])}
          />
        </svg>
      </tooltipContext.Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
