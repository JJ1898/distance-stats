<template>
  <div id="app">
    <div>
      <div class="player-list-wrapper"><PlayerList v-bind:players="players"/></div>
      <div class="track-data-wrapper"><TrackInfo v-bind:track="level"/></div>
    </div>
  </div>
</template>

<script>
import PlayerList from "./components/PlayerList.vue";
import TrackInfo from "@/components/TrackInfo";
import { getSummary } from "@/services/DistanceService";

export default {
    name: "App",
    components: { PlayerList, TrackInfo },
    data() {
        return {
            players: [],
            server: [],
            level: [],
            chat: []
        };
    },
    created() {
    // getSummary().then(response => {console.log(response.data.Level)})
    // setInterval(() => {
    //   getSummary().then(response => {console.log(response.data.Players)});
    // }, 250);
        getSummary().then(response => {
            this.players = response.data.Players;
            this.server = response.data.Server;
            this.level = response.data.Level;
            this.chat = response.data.ChatLog;
        });
        setInterval(() => {
            getSummary().then(response => {
                this.players = response.data.Players;
                this.server = response.data.Server;
                this.level = response.data.Level;
                this.chat = response.data.ChatLog;
            });
        }, 500);
    }
};
</script>

<style>
#app {
  font-family: SLMN-Industry, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 1055px;
  max-height: 1055px;
}
.player-list-wrapper {
  position: absolute;
  top: 50px;
  left: 50px;
  height: 980px;
  width: 450px;
}
.track-data-wrapper {
  background-color: rgba(0,0,0,.5);
  position: absolute;
  height: 50px;
  bottom: 15px;
  right: 50px;
}
</style>
