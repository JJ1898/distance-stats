<template>
  <div id="app">
    <PlayerList v-bind:players="players"/>
    <TrackInfo/>
  </div>
</template>

<script>
import PlayerList from './components/PlayerList.vue'
import TrackInfo from "@/components/TrackInfo";
import {getSummary} from "@/services/DistanceService";

export default {
  name: 'App',
  components: { PlayerList, TrackInfo},
  data(){
    return {
      players: [],
      server:[],
      level:[],
      chat:[]
    }
  },
  created(){
    // getSummary().then(response => {console.log(response.data.Players)})
    // setInterval(() => {
    //   getSummary().then(response => {console.log(response.data.Players)});
    // }, 250);
    getSummary().then(response => {
      this.players = response.data.Players;
      this.server = response.data.Server;
      this.level = response.data.Level;
      this.chat = response.data.ChatLog;
    })
    setInterval(() => {
      getSummary().then(response => {
        this.players = response.data.Players;
        this.server = response.data.Server;
        this.level = response.data.Level;
        this.chat = response.data.ChatLog;});
    }, 250);
  }
}
</script>

<style>
#app {
  font-family: SLMN-Industry, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
}
</style>
