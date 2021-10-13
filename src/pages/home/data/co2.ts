export const c02Data = {
  labels: ["9h", "9h30", "10h", "10h30", "11h", "11h30"],

  datasets: [
    {
      label: "Nível CO2",
      data: [120, 40, 30, 50, 20, 20],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      label: "Controle",
      data: [30, 30, 30, 30, 30, 30],
      fill: false,
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgba(54, 162, 235, 0.2)",
    },
  ],
};
