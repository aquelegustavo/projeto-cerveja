import React from "react";

import styles from "./loading.module.scss";

function Loading() {
  return (
    <div className={styles.container}>
      <svg className={styles.loader} viewBox="0 0 24 24">
        <circle className={styles.loader__value} cx="12" cy="12" r="10" />
        <circle className={styles.loader__value} cx="12" cy="12" r="10" />
        <circle className={styles.loader__value} cx="12" cy="12" r="10" />
        <circle className={styles.loader__value} cx="12" cy="12" r="10" />
        <circle className={styles.loader__value} cx="12" cy="12" r="10" />
        <circle className={styles.loader__value} cx="12" cy="12" r="10" />
      </svg>
    </div>
  );
}

export default Loading;
