import React from "react";

const Weather = (props) => {
  // and operator
  return (
    <div className="info">
      {props.tempreature && (
        <p className="info-key">
          Tempreature :<span className="info-val">{props.tempreature}</span>
        </p>
      )}
      {props.city && (
        <p className="info-key">
          City :<span className="info-val">{props.city}</span>
        </p>
      )}
      {props.country && (
        <p className="info-key">
          Country :<span className="info-val">{props.country}</span>
        </p>
      )}
      {props.humidity && (
        <p className="info-key">
          Humidity :<span className="info-val">{props.humidity}</span>
        </p>
      )}
      {props.description && (
        <p className="info-key">
          Description :<span className="info-val">{props.description}</span>
        </p>
      )}
      {props.error && (
        <p className="info-key">
          Error :<span className="info-val">{props.error}</span>
        </p>
      )}
    </div>
  );
};

export default Weather;
