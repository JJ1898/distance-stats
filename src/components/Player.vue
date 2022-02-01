<template>
    <div class="player-box" v-if="!isSpectator">
      <span class="player-name">{{playerName}}</span>
      <span v-if="playerCar" ><PlayerCar v-bind:car="playerCar"/></span>
      <span v-if="finishTime">{{finishTime}}</span>
    </div>

</template>

<script>
import PlayerCar from "@/components/PlayerCar";
import {msToHuman, colorArrayToRGB} from "../services/StatsUtils";
export default {
  components: {PlayerCar},
  name: 'Player',
  props: ["player"],
  computed: {
    isSpectator() {
      if (this.player.Car?.FinishType === "Spectate") return true;
      return false;
    },
    playerName() {
      return this.player?.Name
    },
    playerCar() {
      return this.player?.Car;
    },
    finishTime() {
      if (this.player.Car?.FinishType === "Spectate") return null;
      if (this.player.Car?.FinishData === -1) return null;
      if (!this.player.Car) return null;
      if (this.player.Car?.FinishType === "DNF") return false;
      return msToHuman((this.player.Car?.FinishData));
    },
    carPrimaryColor() {
      if (!this.player?.Car?.CarColors) return "rgba(0,0,0)";
      return colorArrayToRGB(this.player.Car?.CarColors[0]);
    },
    carSecondaryColor() {
      if (!this.player?.Car?.CarColors) return "rgba(0,0,0)";
      return colorArrayToRGB(this.player.Car?.CarColors[1]);
    },
    carGlowColor() {
      if (!this.player?.Car?.CarColors) return "rgba(0,0,0)";
      return colorArrayToRGB(this.player.Car?.CarColors[2]);
    },
    carSparkleColor() {
      if (!this.player?.Car?.CarColors) return "rgba(0,0,0)";
      return colorArrayToRGB(this.player.Car?.CarColors[3]);
    }
  }
}

</script>


<style scoped>
  .player-box {
    background-color: rgba(0,0,0,.25);
    white-space: nowrap;
    margin: 5px;
  }
  .player-name {
    font-weight: 700;
    color: white;
    font-size: 20px;
  }


</style>
