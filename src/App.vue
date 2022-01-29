<template>
  <div id="app">
    <PlayerList/>
  </div>
</template>

<script>
import PlayerList from './components/PlayerList.vue'

export default {
  name: 'App',
  components: {
    PlayerList
  }
}
</script>

<style>
#app {
  font-family: SLMN-Industry, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
