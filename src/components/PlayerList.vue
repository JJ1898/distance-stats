<template>
    <div class="player-list flex-column" v-if="!emptyServer">
      <PlayerData v-for="player in sortedPlayers" :key="player.id" :player="player"/>
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
            return !this.players;
        },
        finishedPlayers() {
            // TODO: What is the key for finish time
            // TODO: Not sure if a and be should be the other way around
            return this.players.filter(player => player?.Car?.Finished).sort((a, b) => b?.Car?.FinishTime - a?.Car?.FinishTime);
        },
        unfinishedPlayers() {
            return this.players.filter(player => !player?.Car?.Finished);
        },
        sortedPlayers() {
            return [...this.finishedPlayers, ...this.unfinishedPlayers];
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
