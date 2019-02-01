import React, { useState } from "react";

const tooltipContext = React.createContext();

function Tooltip (){
    const [Tooltip,setTooltip] = useState(false);

    return{ Tooltip,setTooltip };
}

export { Tooltip,tooltipContext };