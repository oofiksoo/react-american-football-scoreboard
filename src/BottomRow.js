import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
    const [down, setdown] = useState(0);
    const [toGo, settoGo] = useState(0);
    const [bllOn, setbllOn] = useState(0);
    const [qtr, setQtr] = useState(0);

    return (

        <
        div className = "bottomRow" >
        <
        div className = "down" >
        <
        h3 className = "down__title" > Down < /h3> <
        div className = "down__value" > { down } < /div> <
        button onClick = {
            () => setdown(down + 1) }
        className = "down__set" > Set Down < /button> <
        /div> <
        div className = "toGo" >
        <
        h3 className = "toGo__title" > To Go < /h3> <
        div className = "toGo__value" > { toGo } < /div> <
        button onClick = {
            () => settoGo(toGo + 1) }
        className = "toGo__set" > Set To Go < /button> <
        /div> <
        div className = "ballOn" >
        <
        h3 className = "ballOn__title" > Ball on < /h3> <
        div className = "ballOn__value" > { bllOn } < /div> <
        button onClick = {
            () => setbllOn(bllOn + 1) }
        className = "ballOn__Set" > Set Ball on < /button> <
        /div> <
        div className = "quarter" >
        <
        h3 className = "quarter__title" > Quarter < /h3> <
        div className = "quarter__value" > { qtr } < /div> <
        button onClick = {
            () => setQtr(qtr + 1) }
        className = "quarter__set" > Set QTR < /button> <
        /div> <
        /div>
    );
};

export default BottomRow;