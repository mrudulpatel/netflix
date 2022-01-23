import React from "react";
import Card from "./Card";
import { SeriesData } from "./Series";

function Amazon() {
  return (
    <Card
      key={SeriesData[3].id}
      imgsrc={SeriesData[3].imgsrc}
      title={SeriesData[3].title}
      series={SeriesData[3].series}
      link={SeriesData[3].link}
    />
  );
}

export default Amazon;
