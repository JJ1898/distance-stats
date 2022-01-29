<template>
  <div class="flex-column viewport">
    <div class="flex-column"><Player v-for="player in players" :key="player.UnityPlayerGuid" :player="player"/></div>
  </div>

</template>

<script>

import Player from "@/components/Player";
import {getSummary} from "@/services/DistanceService";

export default {
  components: {Player},
  name: "PlayerList",

  data(){
    return {
      players: [],
    }
  },

  created(){
    // getSummary().then(response => {console.log(response.data.Players)})
    // setInterval(() => {
    //   getSummary().then(response => {console.log(response.data.Players)});
    // }, 250);
    getSummary().then(response => {this.players = response.data.Players});
    setInterval(() => {
      getSummary().then(response => {this.players = response.data.Players});
    }, 250);
  }

}
</script>

<style scoped>
  .viewport{
    height: 1080px;
    width: 1920px;
  }
</style>
