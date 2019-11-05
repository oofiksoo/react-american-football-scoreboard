//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
//import BottomRow from "./BottomRow";

function App() {
    //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
    const [HMScore, HMScoreSet] = useState(0);
    const [AWYScore, AWYScoreSet] = useState(0);
    const [down, setdown] = useState(0);
    const [toGo, settoGo] = useState(0);
    const [bllOn, setbllOn] = useState(0);
    const [qtr, setQtr] = useState(0);

    return ( < div className = "container" >
        <
        section className = "scoreboard" >
        <
        div className = "topRow" >
        <
        div className = "home" >
        <
        h2 className = "home__name" > Arizona < /h2>

        { /* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */ }

        <
        div className = "home__score" > { HMScore } < /div> <
        /div> <div className = "timer"> 00: 03 </div >
        <
        div className = "away" >
        <
        h2 className = "away__name" > Dallas < /h2>   <
        div className = "away__score" > { AWYScore } < /div>    <
        /div>   <
        /div> <
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
        /div> <
        /div> <
        /section><section className = "buttons"> <
        div className = "homeButtons" > { /* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */ } <
        button onClick = {
            () => HMScoreSet(HMScore + 7) }
        className = "homeButtons__touchdown" > Home Touchdown < /button> <
        button onClick = {
            () => HMScoreSet(HMScore + 3) }
        className = "homeButtons__fieldGoal" > Home Field Goal < /button>   <
        /div>   <
        div className = "awayButtons" >
        <
        button onClick = {
            () => AWYScoreSet(AWYScore + 7) }
        className = "awayButtons__touchdown" > Away Touchdown < /button>  <
        button onClick = {
            () => AWYScoreSet(AWYScore + 3) }
        className = "awayButtons__fieldGoal" > Away Field Goal < /button> <
        /div > <
        /section>   <
        /div>
    );
}

export default App;