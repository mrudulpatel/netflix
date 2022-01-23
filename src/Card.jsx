import React from "react";

function Card(props) {
    {console.log(props)}
  return (
    <div className="cards">
      <div className="card">
        <img
          src={props.imgsrc}
          className="card__img"
          alt="myPic"
        />
        <div className="card__info">
          <span className="card__category">{props.title} </span>
          <h3 className="card__title"> {props.series} </h3>
          <a href={props.link} target="_blank">
            <button> WATCH NOW </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
