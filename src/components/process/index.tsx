import React from "react";

import Element from "./elements";
import { elementsData } from "./elements/elementsData";

function Process() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 822 633"
    >
      <g className="cls-2">
        {elementsData.map((element) => {
          return (
            <Element
              id={element.id}
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

export default Process;
