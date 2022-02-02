<template>
    <div class="player-list" v-if="!emptyServer">
      <PlayerData v-for="player in players" :key="player.id" :player="player"/>
    </div>

</template>

<script>

import PlayerData from "./PlayerData";

export default {
    components: { PlayerData },
    name: "PlayerList",
    props: ["players"],
    computed: {
        emptyServer() {
            if (this.players) return false;
            return true;
        }
    }
};
</script>

<style scoped>
  .player-list {
    margin: 15px;
    padding: 5px;
  }


</style>
