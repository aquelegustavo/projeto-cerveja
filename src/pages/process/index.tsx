import React from "react";

import ProcessComponent from "../../components/process";
import styles from "./process.module.scss";

function ProcessPage() {
  return (
    <>
      <h3 className={styles.status}>Processo ativo</h3>
      <div className={styles.container}>
        <ProcessComponent />
      </div>
    </>
  );
}

export default ProcessPage;
