import React,{ useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import { range } from "d3-array";
import { scaleOrdinal } from "d3-scale";
//User based component
import ScatterPlot from './components/ScatterPlot';
import { Tooltip, tooltipContext } from "./components/ToolTips";
import "./index.css";


