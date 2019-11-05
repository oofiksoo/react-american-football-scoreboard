import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
    const [down, setdown] = useState(0);
    const [toGo, settoGo] = useState(0);
    const [bllOn, setbllOn] = useState(0);
    const [qtr, setQtr] = useState(0);

    return ( <
        div className = "bottomRow__Digital" >
        <
        div className = "bottomRow" >
        <
        div className = "down" >
        <
        h3 className = "down__title" > Down < /h3> <
        div className = "down__value" > { down } < /div> <
        /div> <
        div className = "toGo" >
        <
        h3 className = "toGo__title" > To Go < /h3> <
        div className = "toGo__value" > { toGo } < /div> <
        /div> <
        div className = "ballOn" >
        <
        h3 className = "ballOn__title" > Ball on < /h3> <
        div className = "ballOn__value" > { bllOn } < /div> <
        /div> <
        div className = "quarter" >
        <
        h3 className = "quarter__title" > Quarter < /h3> <
        div className = "quarter__value" > { qtr } < /div> <
        /div> <
        /div> <
        div className = "bottomRow__buttons" >
        <
        h3 className = "bottomRowbtns__title" > Scoreboard Control < /h3> <
        div className = "btbholders" >
        <
        div className = "down__buttons" >
        <
        h4 className = "downbtn_title" > Downs < /h4> <
        button onClick = {
            () => setdown(down + 1) }
        className = "down__set" > + < /button> <
        button onClick = {
            () => setdown(down - 1) }
        className = "down__set" > - < /button> <
        /div> <
        div className = "toGo__buttons" >
        <
        h4 className = "toGobtn_title" > To Go < /h4> <
        button onClick = {
            () => settoGo(toGo + 1) }
        className = "toGo__set" > + < /button> <
        button onClick = {
            () => settoGo(toGo - 1) }
        className = "toGo__set" > - < /button> <
        /div> <
        div className = "ballOn__buttons" >
        <
        h4 className = "ballonBtn_title" > Ball On < /h4> <
        button onClick = {
            () => setbllOn(bllOn + 1) }
        className = "ballOn__Set" > + < /button> <
        button onClick = {
            () => setbllOn(bllOn - 1) }
        className = "ballOn__Set" > - < /button> <
        /div> <
        div className = "Qtr__buttons" >
        <
        h4 className = "qtrbtn_title" > Quarter < /h4> <
        button onClick = {
            () => setQtr(qtr + 1) }
        className = "quarter__set" > + < /button> <
        button onClick = {
            () => setQtr(qtr - 1) }
        className = "quarter__set" > - < /button> <
        /div> <
        /div> <
        /div>

        <
        /div>
    );
};

export default BottomRow;