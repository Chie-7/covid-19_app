<template>
  <!-- <canvas ref="myChart" width="900px" height="250px"></canvas> -->
  <div class="chart-container" style="position: relative; width: 100%; height: 400px;">
  <canvas ref="myChart"></canvas>
  </div>
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
          data: this.chartData,
        }]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
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