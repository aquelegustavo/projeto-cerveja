import React from "react";

import styles from "./loading.module.scss";

function LoadingComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <svg viewBox="0 0 24 24">
          <circle className={styles.circle} cx="12" cy="12" r="10" />
          <circle className={styles.circle} cx="12" cy="12" r="10" />
          <circle className={styles.circle} cx="12" cy="12" r="10" />
          <circle className={styles.circle} cx="12" cy="12" r="10" />
          <circle className={styles.circle} cx="12" cy="12" r="10" />
          <circle className={styles.circle} cx="12" cy="12" r="10" />
        </svg>
      </div>
    </div>
  );
}

export default LoadingComponent;
