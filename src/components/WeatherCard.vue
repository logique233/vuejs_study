
<template>
  <div class="card">
    <el-card :body-style="{ padding: '0px' }">
      <div style="padding: 14px;">
        <img :src="img" class="image" />
      </div>
      <div style="padding: 15px; background-color: rgb(0, 235, 10);">
        <span>{{currentDate}}</span>
      </div>
      <div style="padding: 15px; background-color: rgb(0, 125, 10);">
        <span>{{currentDate}}</span>
      </div>
      <div style="padding: 15px; background-color: rgb(0, 235, 125);">
        <span>{{currentDate}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      img: require("../assets/WeatherIcon/Sun.png"),
      currentDate: null
    };
  },
  mounted() {
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.currentDate = _this.getCurrentDateTime(); // 修改数据date
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },
  methods: {
    getCurrentDateTime() {
      return moment(new Date()).format("YYYY Do MMM hh:mm:ss a");
      // return moment(new Date()).format('MMMM Do YYYY,h:mm:ss a');
    }
  }
};
</script>

<style scoped>
.el-card {
  background: cornflowerblue;
  border-radius: 22px;
}
.card {
  margin: 140px 20px 10px 20px;
}
.image {
  width: 100%;
  /* display: block; */
  /* opacity:0.5; */
  background-color: rgb(220, 235, 10);
}
</style>

