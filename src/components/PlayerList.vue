<template>
  <div>
    <Player v-for="player in players" :key="player.UnityPlayerGUID" :player="player"/>
  </div>

</template>

<script>

import Player from "@/components/Player";
import {getSummary} from "@/services/DistanceService";

export default {
  components: {Player},
  name: "PlayerList",
  methods: {

  },
  data(){
    return {
      players: [],
    }
  },
  created(){
    getSummary().then(response => {console.log(response.data.Players)})
    setInterval(() => {
      getSummary().then(response => {console.log(response.data.Players)});
    }, 250);
    getSummary().then(response => {this.players = response.data.Players});
    setInterval(() => {
      getSummary().then(response => {this.players = response.data.Players});
    }, 250);

  }

}
</script>

<style scoped>

</style>
