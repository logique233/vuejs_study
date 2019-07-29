<template>
  <div class="hello">
    <h1>{{ msg.split('').reverse().join('') }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li
        v-for="item in items"
        :key="item"
      >
        <a v-bind:href="item.url">{{ item.msg1 }}</a>
      </li>
    </ul>
    <button v-on:click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [
        { msg1: '1', url: 'http://www.baidu.com' },
        { msg1: '2', url: 'http://www.baidu.com' },
        { msg1: '3', url: 'http://www.baidu.com' },
        { msg1: '4', url: 'http://www.baidu.com' },
        { msg1: '5', url: 'http://www.baidu.com' }
      ],
      counter: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
