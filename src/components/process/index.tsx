import React from "react";
import useApi from "../../services/api";
import LoadingComponent from "../loading";

import Element from "./elements";
import { elementsData } from "./elements/elementsData";

import styles from "./process.module.scss";

type Data = {
  active: Array<string>;
};
type Response = {
  data: Data | null;
  error: null | boolean;
  loading: boolean;
};

function ProcessComponent() {
  const request: Response = useApi("/process/status");

  if (request.loading) {
    return <LoadingComponent />;
  } else if (request.error) {
    return <h1>Erro</h1>;
  } else {
    return (
      <svg
        className={styles.image}
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
                className={
                  request.data?.active.includes(element.id)
                    ? ""
                    : styles.disabled
                }
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
}

export default ProcessComponent;
