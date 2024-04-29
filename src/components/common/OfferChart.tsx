import React from "react";
import Chart from "chart.js/auto";

// Sample JSON data
const ticketPrices = {
  "Mar-01": 3000,
  "Mar-02": 3200,
  "Mar-03": 100,
  "Mar-04": 3050,
  "Mar-05": 350,
  "Mar-06": 3300,
  "Mar-07": 340,
  "Mar-08": 3350,
  "Mar-09": 3250,
  "Mar-10": 3100,
  "Mar-11": 3150,
  "Mar-12": 3200,
  "Mar-13": 3300,
  "Mar-14": 400,
  "Mar-15": 3350,
  "Mar-16": 3250,
  "Mar-17": 3100,
  "Mar-18": 300,
  "Mar-19": 3150,
  "Mar-20": 3200,
  "Mar-21": 300,
  "Mar-22": 3400,
  "Mar-23": 3350,
  "Mar-24": 320,
  "Mar-25": 3100,
  "Mar-26": 3150,
  "Mar-27": 3200,
  "Mar-28": 3300,
  "Mar-29": 3400,
  "Mar-30": 330,
};

const TicketPriceChart: React.FC = () => {
  const chartRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: {
            labels: Object.keys(ticketPrices),
            datasets: [
              {
                label: "Ticket Price",
                data: Object.values(ticketPrices),
                borderColor: "#00FF00", // Green color
                backgroundColor: "#00FF00",
                fill: false,
                tension: 0,
              },
            ],
          },
          options: {
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  maxRotation: 0, // Rotate x-axis labels to 0 degrees
                  minRotation: 0,
                },
              },
              y: {
                beginAtZero: true,
                grid: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        });
      }
    }
  }, []);

  return (
    <div>
      <canvas ref={chartRef} height={50} />
    </div>
  );
};

export default TicketPriceChart;
