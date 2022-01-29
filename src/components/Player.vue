<template>
  <div>
    <div class="name-box">
    <span class="player-name">{{playerName}}</span>
    </div>
    <div>
      <PlayerCar v-bind:car="playerCar"/>
    </div>
  </div>

</template>

<script>
import PlayerCar from "@/components/PlayerCar";
export default {
  components: {PlayerCar},
  name: 'Player',
  props: ["player"],
  computed: {
    isSpectator(){
      if (this.player.Car?.Spectator) return true;
      return false;
    },
    playerName(){
      return this.player.Name.replace(/[\n\r]/g, "")
    },
    playerCar() {
      return this.player?.Car;
    }
  },
}

</script>


<style scoped>
  .name-box {
    margin: 5px;
    background-color: rgba(0,0,0,.75);
    height: 25px;
    min-width: 25px;
    max-width: 500px;
  }

  .player-name {
    font-weight: 700;
    color: white;
  }


</style>
