import React, { useState, useContext } from "react";
import * as d3 from "d3";
import styled from "styled-components";

import { tooltipContext } from "./ToolTips";

const Circle = styled.circle`
    fill:yellow;
    fill-opacity: 0.2;
    stroke-width:1px;
    cursor:pointer;
    &:hover{
        fill:red;
    }
`;

const ForeignObject = styled.foreignObject`
    background: grey;
    font-size: 12px;
    text-align:center;
    div{
        box - shadow: 10 px 10 px 8 px #1b1b1b;
    }
`;

const Tooltip=({ x,y,info })=>(
    <ForeignObject x={x+10} y={y+10} width={100} height={50}>
        <div>
            <strong>{info.name}</strong>
        <p>
            {info.state} {info.zipCode}
        </p>
        <p style={{color:info.color}}>
            {info.number1.toFixed(2)}, {info.number2.toFixed(2)}
        </p>
        </div>
    </ForeignObject>
);
