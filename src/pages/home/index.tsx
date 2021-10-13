import React from "react";
import styles from "./home.module.scss";

import { Doughnut, Line } from "react-chartjs-2";
import { Card } from "@material-ui/core";

import { doughnutData } from "./data/doughnut";
import { producaoData } from "./data/producao";
import { c02Data } from "./data/co2";
import { tempData } from "./data/temp";

function HomePage() {
  return (
    <>
      <div className={styles.ribble}></div>

      <Card className={`${styles.card} ${styles.full}`}>
        <h3>Produção</h3>

        <div className={`${styles.chartContainer} box flex row space-around`}>
          <Doughnut
            className={`${styles.chart} ${styles.small}`}
            data={doughnutData}
          />

          <div>
            <p className="text center margin n1">Número de garrafas/dias</p>
            <Line
              className={`${styles.chart} ${styles.large}`}
              data={producaoData}
            />
          </div>
        </div>
      </Card>

      <div className="box flex row space-around">
        <Card className={styles.card}>
          <h3>Temperatura (Cº)</h3>

          <div className={styles.chartContainer}>
            <Line
              className={`${styles.chart} ${styles.large}`}
              data={tempData}
            />
          </div>
        </Card>
        <Card className={styles.card}>
          <h3>CO2</h3>

          <div className={styles.chartContainer}>
            <Line
              className={`${styles.chart} ${styles.large}`}
              data={c02Data}
            />
          </div>
        </Card>
      </div>
      <div className={styles.space}></div>
      <p className="text center margin n1">
        Projeto Cerveja, por Gustavo Simões — UFSC
      </p>
    </>
  );
}

export default HomePage;
