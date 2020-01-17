const ctx = document.getElementById("circularChart").getContext("2d");
const options = {
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  },
  cutoutPercentage: 75,
  responsive: true,
  aspectRatio: 3 / 1,
  legend: {
    display: true,
    position: "right",
    align: "center",
    usePointStyle: true
  },
  title: {
    display: true,
    position: "bottom"
  }
};
const data = {
  labels: ["Organic Search", "Direct", "Paid Search", "Email", "Referral"],
  datasets: [
    {
      data: [16028, 9324, 6177, 1228, 966],
      backgroundColor: ["greenyellow", "blue", "peru", "skyblue", "purple"],
      borderWidth: 0,
      pointStyle: "circle"
    }
  ]
};
const myChart = new Chart(ctx, {
  type: "doughnut",
  data,
  options
});
