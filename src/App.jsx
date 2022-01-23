import React from "react";
import Amazon from "./Amazon";
import Card from "./Card";
import Netflix from "./Netflix";
import { SeriesData } from "./Series";

const favSeries = "netflix";
const App = () => (
  <>
    <h1 className="heading_style">LIST OF TOP 5 NETFLIX SERIES</h1>;
    { favSeries=="amazon" ? <Amazon/> : <Netflix /> }
  </>
);

export default App;
