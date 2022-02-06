<template>
    <div class="player-list flex-column" v-if="!emptyServer">
      <PlayerData v-for="player in sortedPlayers" :key="player.id" :player="player"/>
    </div>

</template>

<script>
import _ from "lodash";
import PlayerData from "./PlayerData";

export default {
    components: { PlayerData },
    name: "PlayerList",
    props: ["players"],
    computed: {
        emptyServer() {
            if (this.players) return false;
            return true;
        },
        // TODO: actually sort players by finish time
        sortedPlayers() {
            return this.players;
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
