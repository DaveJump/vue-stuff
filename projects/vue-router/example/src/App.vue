<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <a href="/#/">helloWorld</a>
    <br>
    <a href="/#/inner">inner</a>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    console.log(this.$router)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
