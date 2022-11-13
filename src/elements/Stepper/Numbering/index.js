import React from "react";
import propTypes from "prop-types";

import "./index.scss";

export default function Numbering({ style, className, data, current }) {
  const KeysOfData = object.keys(data);
  return (
    <>
      <ol className={["stepper", className].join(" ")} style={style}>
        {KeysOfData.map((list, index) => {
          let isActive = list === current ? "active" : "";
          if (index + 1 === KeysOfData.lenght) {
            isActive = "";
            return null;
          }
          return (
            <li key={`list-${index}`} className={[isActive].join(" ")}>
                {index + 1}
            </li>
          );


        })}
      </ol>
    </>
  );
}

Numbering.propTypes = {
  classname: propTypes.string,
  data: propTypes.object,
  current: propTypes.string,
};
