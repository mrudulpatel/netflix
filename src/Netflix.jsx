import React from "react";
import Card from "./Card";
import { SeriesData } from "./Series";

function Netflix() {
  return (
    <>
      <Card
        key={SeriesData[0].id}
        imgsrc={SeriesData[0].imgsrc}
        title={SeriesData[0].title}
        series={SeriesData[0].series}
        link={SeriesData[0].link}
      />
      <Card
        key={SeriesData[1].id}
        imgsrc={SeriesData[1].imgsrc}
        title={SeriesData[1].title}
        series={SeriesData[1].series}
        link={SeriesData[1].link}
      />
      <Card
        key={SeriesData[2].id}
        imgsrc={SeriesData[2].imgsrc}
        title={SeriesData[2].title}
        series={SeriesData[2].series}
        link={SeriesData[2].link}
      />
      <Card
        key={SeriesData[4].id}
        imgsrc={SeriesData[4].imgsrc}
        title={SeriesData[4].title}
        series={SeriesData[4].series}
        link={SeriesData[4].link}
      />
    </>
  );
}

export default Netflix;
