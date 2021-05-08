<template>
  <div id="home" class="container">
  <header class="header">
    <ul>
      <li><router-link to="/Message"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
      </svg>Message</router-link></li>
    </ul>
    <h1>新型コロナウイルス発生状況確認アプリ</h1>
  </header>

  
    <div class="row mt-5">
      <div class="col text-center">
        <h1>新型コロナウイルス 国内感染の状況</h1>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col">
        <h2>都道府県別 累積陽性者数</h2>
        <BarChart :label="labels" :chart-data="confirmed"></BarChart>
        <p>{{ lastUpdate }}</p>
        <p>データソース：<a href="https://corona.go.jp/dashboard/" target="_blank">厚生労働省発表データより作成</a></p>
      </div>
    </div>
  </div>

</template>
<script>
import axios from 'axios'
import moment from 'moment';

import BarChart from '../components/BarChaet';

export default {
  data : ()=> {
    return {
      labels : [],
      confirmed : [],
      lastUpdate: [],
    }
  },
  components : {
    BarChart
  },
  async created() {
    const  {data}  = await axios.get("https://data.corona.go.jp/converted-json/covid19japan-all.json");
    // console.log(data);
    const date = moment(data[0].lastUpdate,"YYYYMMDD").format("YYYY年MM月DD日時点")
    // console.log(date);
    this.lastUpdate.push(date);

    data.forEach((areas) => {
      for(let i=0;i<areas.area.length;i++){
      // console.log(areas.area[i]);

      this.labels.push(areas.area[i].name_jp);
      this.confirmed.push(areas.area[i].npatients);
      }
    });
  console.log(this.labels)
  }  
};
</script>

<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
}
h1 {
  display: flex;
  justify-content: center;
}
.header {
  background: #88E7CE;
  /* margin-bottom: 1em; */
  padding: 0.4em 0.8em;
  color: #fff;
}
.header li > a {
  white-space: nowrap;
  font-size: 15px;
  color: #2B546A;
  font-weight: bold;
  padding-left: 30px;
}
</style>