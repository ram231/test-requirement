const ctx = document.getElementById("circularChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Organic Search", "Direct", "Paid Search", "Email", "Referral"],
    datasets: [
      {
        label: "# of Votes",
        data: [16028, 9324, 6177, 1228, 966],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)"
        ],
        borderWidth: 1,
        borderAlign: "inner"
      }
    ],
    borderAlign: "right"
  }
});

$(function() {
  $("#row");
});
