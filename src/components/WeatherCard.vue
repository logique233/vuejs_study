
<template>
  <div class="card">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="img" class="image" />
      <div style="padding: 14px;">
        <span>{{currentDate}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require('../assets/rose/0.png'),
      currentDate: new Date()
    };
  },
  mounted() {
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.currentDate = new Date(); // 修改数据date
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
};
</script>

<style scoped>
.el-card {
  background: cornflowerblue;
}
.card {
  margin: 140px 20px 10px 20px;
}
.image {
  width: 100%;
  display: block;
}
</style>

