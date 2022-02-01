<template>
    <div class="player-list" v-if="!emptyServer">
      <Player v-for="player in players" :key="player.id" :player="player"/>
    </div>

</template>

<script>

import Player from "./Player";

export default {
  components: {Player},
  name: "PlayerList",
  props: ["players"],
  computed: {
    emptyServer() {
      if (this.players) return false;
      return true;
    }
  }
}
</script>

<style scoped>
  .player-list {
    margin: 15px;
    padding: 5px;
  }


</style>
