<template>
  <div>
    <el-container>
      <el-container>
        <el-header>
          <h1>{{ msg }}</h1>
        </el-header>
        <el-main>
          <WeatherTable :data="WeatherData.data" />
          <WeatherCard/>
        </el-main>
        <el-footer>
          <el-button v-on:click="get" icon="el-icon-search">button</el-button>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import WeatherTable from "./WeatherTable";
import WeatherCard from "./WeatherCard";
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
    WeatherCard
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
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: rgb(0, 0, 0);
  color: #333;
  text-align: center;
}
</style>
