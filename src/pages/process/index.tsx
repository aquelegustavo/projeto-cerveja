import React from "react";

import ProcessComponent from "../../components/process";
import useApi from "../../services/api";

function ProcessPage() {
  useApi("/process/status");

  return (
    <>
      <ProcessComponent />
    </>
  );
}

export default ProcessPage;
