<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div></div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@-webkit-keyframes animate-cloud {
  from {
    background-position: 600px 100%;
  }
  to {
    background-position: 0 100%;
  }
}
@-moz-keyframes animate-cloud {
  from {
    background-position: 600px 100%;
  }
  to {
    background-position: 0 100%;
  }
}
@-ms-keyframes animate-cloud {
  from {
    background-position: 600px 100%;
  }
  to {
    background-position: 0 100%;
  }
}
@-o-keyframes animate-cloud {
  from {
    background-position: 600px 100%;
  }
  to {
    background-position: 0 100%;
  }
}
html {
  height: 100%;
}
body {
  background: url(./assets/bg_cloud.jpg) 0 bottom repeat-x #049ec4;
  -webkit-animation: animate-cloud 20s linear infinite;
  -moz-animation: animate-cloud 20s linear infinite;
  -ms-animation: animate-cloud 20s linear infinite;
  -o-animation: animate-cloud 20s linear infinite;
  animation: animate-cloud 20s linear infinite;
  /* width: 100%; */
  height: auto;
}
</style>
