<template>
  <div id="app">
    <img src="./assets/logo.png">
    <store></store>
  </div>
</template>

<script>
import Store from './components/Store'

export default {
  name: 'App',
  components: {
    Store
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
