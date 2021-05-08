<template>
  <canvas ref="myChart" width="900px" height="250px"></canvas>
</template>

<script>
import Chart from 'chart.js';
export default {
  props: {
    label:  {
      type: Array
    },
    chartData:  {
      type: Array
    }
  },
  async mounted() {
    await new Chart(this.$refs.myChart, {
      type: 'bar',
      data: {
        labels: this.label,
        datasets: [{
            label: '累積陽性者数',
            backgroundColor: 'rgba(144,238,144 , 0.9 )',
            borderWidth: 0.5,
            data: this.chartData,
        }]
      },
      options: {
        responsive: true,
        legend: {
          display: true
        },
        tooltips: {
          display:true
        },
        scales: {
          xAxes: [{
            ticks: {
              suggestedMin: 0,
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              
            }
          }]
        }
    }
    });
  }
}
</script>