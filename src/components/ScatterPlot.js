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