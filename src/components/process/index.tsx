import React from "react";

import Element from "./elements";
import { elementsData } from "./elements/elementsData";

import styles from "./process.module.scss";

function ProcessComponent() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 822 633"
    >
      <g>
        {elementsData.map((element) => {
          return (
            <Element
              key={element.id}
              id={element.id}
              className={element.id === "entrada" ? "" : styles.disabled}
              width={element.width}
              height={element.height}
              transform={element.transform}
              data={element.data}
            />
          );
        })}
      </g>
    </svg>
  );
}

export default ProcessComponent;
