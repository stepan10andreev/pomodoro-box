export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Статистика по дням',
    },
  },
  scales: {
    y: {
      // count: 10,
      beginAtZero: true,
      position: 'right' as const,
      ticks: {
        callback: (value: string | number) => {
          if (+value <= 1.5) return 'время'
          if (+value < 3600) {
            return `${Math.round(+value / 60)} мин`;
          }
          if (+value >= 3600) {
            const hours = Math.floor(+value / 3600);
            const minutes = Math.round((+value - (hours * 3600)) / 60);
            return `${hours} ч ${minutes} м`;
          }
        },
        display: true,
        color: '#333333',
        max: 6000,
        stepSize: 1500,
        includeBounds: false,
        maxTicksLimit: 5,
        padding: window.innerWidth > 576 ? 50 : 10,
        font: {
          size: window.innerWidth > 576 ? 12 : 10
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
      // backgroundColor: "rgba(236, 236, 236, 1)",
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
          size: window.innerWidth > 576 ? 24 : 12,
        }
      }
    }
  }
};
