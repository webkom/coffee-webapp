import React from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const BarChart = (props) => {
  const sortedKeys = Object.keys(props.stats).sort();

  const data = {
    labels: sortedKeys,
    datasets: [{
      data: sortedKeys.map(k => Number(props.stats[k])).slice(-30),
      backgroundColor: '#b10200',
      borderColor: '#b10200',
      hoverBackgroundColor: '#fc0303',
      hoverBorderColor: '#fc0303',
    }],
  };

  const options = {
    legend: {
      display: false,
    },
    maintainAspectRatio: true,
    responsive: true,
    scales: {
      xAxes: [{
        barPercentage: 1.1,
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  };

  return <Bar data={data} height={100} options={options} />;
};

BarChart.propTypes = {
  stats: PropTypes.object,
};

export default BarChart;
