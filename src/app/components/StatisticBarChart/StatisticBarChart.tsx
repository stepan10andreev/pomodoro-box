import React from 'react';
import styles from './statisticbarchart.css';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      position: 'right' as const,
      ticks: {
        display: true,
        color: '#333333',
        stepSize: 25,
        includeBounds: false,
        // maxTicksLimit: 6,
        padding: 30,
        font: {
          size: 12
        }
      },
      border: {
        color: 'transparent'
      },
      grid: {
        tickColor: 'transparent',
        color: 'rgba(51, 51, 51, 0.2)'
      }
    },

    x: {
      backgroundColor: "rgba(236, 236, 236, 1)",
      grid: {
        display: false,
        // color: 'transparent',
      },
      border: {
        color: 'transparent'
      },
      ticks: {
        color: '#999999',
        padding: 11,
         font: {
          size: 24
        }
      }
    }
  }
};

const labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [25, 75, 50, 100, 110, 3, 0],
      backgroundColor: 'rgba(234, 137, 121, 1)',
      hoverBackgroundColor: 'rgba(220, 62, 34, 1)',
      barPercentage: 0.5,
      barThickness: 'flex' as const,
      // minBarLength: 5,
    }
  ],
};

export function StatisticBarChart() {
  return (
    <Bar options={options} data={data} />
  );
}
