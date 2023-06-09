import { chartTooltip } from './util';

export const lineChartOptions = {
  legend: {
    display: false,
  },
  responsive: true,
  maintainAspectRatio: false,
  tooltips: chartTooltip,
  plugins: {
    datalabels: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          display: true,
          lineWidth: 1,
          color: 'rgba(0,0,0,0.1)',
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 5,
          min: 50,
          max: 70,
          padding: 20,
          fontFamily: 'yekan',
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          fontFamily: 'yekan',
        },
      },
    ],
  },
};
export const polarAreaChartOptions = {
  legend: {
    position: 'bottom',
    labels: {
      padding: 30,
      usePointStyle: true,
      fontSize: 12,
      fontFamily: 'yekan',
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scale: {
    ticks: {
      display: false,
    },
  },
  plugins: {
    datalabels: {
      display: false,
    },
  },
  tooltips: chartTooltip,
};

export const areaChartOptions = {
  legend: {
    display: false,
  },
  responsive: true,
  maintainAspectRatio: false,
  tooltips: chartTooltip,
  scales: {
    yAxes: [
      {
        gridLines: {
          display: true,
          lineWidth: 1,
          color: 'rgba(0,0,0,0.1)',
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 5,
          min: 50,
          max: 70,
          padding: 20,
          fontFamily: 'yekan',
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          fontFamily: 'yekan',
        },
      },
    ],
  },
};

export const scatterChartOptions = {
  legend: {
    position: 'bottom',
    labels: {
      padding: 30,
      usePointStyle: true,
      fontSize: 12,
      fontFamily: 'yekan',
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        gridLines: {
          display: true,
          lineWidth: 1,
          color: 'rgba(0,0,0,0.1)',
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 20,
          min: -80,
          max: 80,
          padding: 20,
          fontFamily: 'yekan',
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: true,
          lineWidth: 1,
          color: 'rgba(0,0,0,0.1)',
        },
        ticks: {
          fontFamily: 'yekan',
        },
      },
    ],
  },
  tooltips: chartTooltip,

  // legend: {
  //   position: 'bottom',
  //   labels: {
  //     padding: 30,
  //     usePointStyle: true,
  //     fontSize: 12,
  //   },
  // },
  // responsive: true,
  // maintainAspectRatio: false,
  // scales: {
  //   yAxes: [
  //     {
  //       gridLines: {
  //         display: true,
  //         lineWidth: 1,
  //         color: 'rgba(0,0,0,0.1)',
  //         drawBorder: false,
  //       },
  //       ticks: {
  //         beginAtZero: true,
  //         stepSize: 20,
  //         min: -80,
  //         max: 80,
  //         padding: 20,
  //       },
  //     },
  //   ],
  //   xAxes: [
  //     {
  //       gridLines: {
  //         display: true,
  //         lineWidth: 1,
  //         color: 'rgba(0,0,0,0.1)',
  //       },
  //     },
  //   ],
  // },
};

export const barChartOptions = {
  legend: {
    position: 'bottom',
    labels: {
      padding: 30,
      usePointStyle: true,
      fontSize: 12,
      fontFamily: 'yekan',
    },
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    yAxes: [
      {
        gridLines: {
          display: true,
          lineWidth: 1,
          color: 'rgba(0,0,0,0.1)',
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 100,
          min: 200,
          max: 800,
          padding: 20,
          fontFamily: 'yekan',
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          fontFamily: 'yekan',
        },
      },
    ],
  },
  tooltips: chartTooltip,
};

export const radarChartOptions = {
  legend: {
    position: 'bottom',
    labels: {
      padding: 30,
      usePointStyle: true,
      fontSize: 12,
      fontFamily: 'yekan',
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scale: {
    ticks: {
      display: false,
    },
    pointLabels: {
      fontFamily: 'yekan',
    },
  },
  tooltips: chartTooltip,
};

export const pieChartOptions = {
  legend: {
    position: 'bottom',
    labels: {
      padding: 30,
      usePointStyle: true,
      fontSize: 12,
      fontFamily: 'yekan',
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: false,
  },
  layout: {
    padding: {
      bottom: 20,
    },
  },
  tooltips: chartTooltip,
};

export const doughnutChartOptions = {
  legend: {
    position: 'bottom',
    labels: {
      padding: 30,
      usePointStyle: true,
      fontSize: 12,
      fontFamily: 'yekan',
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: false,
  },
  cutoutPercentage: 80,
  layout: {
    padding: {
      bottom: 20,
    },
  },
  tooltips: chartTooltip,
};

export const smallLineChartOptions = {
  layout: {
    padding: {
      left: 5,
      right: 5,
      top: 10,
      bottom: 10,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontFamily: 'yekan',
        },
        display: false,
      },
    ],
    xAxes: [
      {
        display: false,
      },
    ],
  },
};
