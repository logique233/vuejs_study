<template>
  <div class="demo-image">
    <h1>{{ msg }}</h1>
    <el-button v-on:click="get" icon="el-icon-search">button</el-button>
    <WeatherTable :data="WeatherData.data"/>
  </div>
</template>

<script>
import WeatherTable from "./WeatherTable";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome",
      WeatherData: []
    };
  },
  components: {
    WeatherTable,
  },
  methods: {
    get: function() {
      //发送get请求
      this.$http.get("https://www.tianqiapi.com/api/").then(
        function(res) {
          this.WeatherData = res.body;
          this.msg = this.WeatherData.update_time;
          console.log(this.WeatherData.city);
        },
        function() {
          console.log("请求失败处理");
          this.msg = "请求失败处理";
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
