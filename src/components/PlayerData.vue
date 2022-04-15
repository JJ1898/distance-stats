<template>

    <div class="player-box" v-if="!isSpectator">
      <span class="player-name">{{playerName}}</span>
        <span>
          <div class="finish-time" v-if="finishTime"><i class="fas fa-flag-checkered icon"></i> {{finishTime}}</div>
          <PlayerCar v-bind:car="playerCar" v-else/>
        </span>
    </div>

</template>

<script>
import PlayerCar from "@/components/PlayerCar";
import { msToHuman, colorArrayToRGB } from "@/services/StatsUtils";
export default {
    components: { PlayerCar },
    name: "PlayerData",
    props: ["player"],
    computed: {
        isSpectator() {
            return this.player.Car?.FinishType === "Spectate";
        },
        playerName() {
            return this.player?.Name;
        },
        playerCar() {
            return this.player?.Car;
        },
        finishTime() {
            if (this.player.Car?.FinishType === "Spectate") return null;
            if (this.player.Car?.FinishData === -1) return null;
            if (!this.player.Car) return null;
            if (this.player.Car?.FinishType === "DNF") return null;
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
};

</script>


<style scoped>
  .player-box {
    background-color: rgba(0,0,0,.5);
    white-space: nowrap;
    margin: 5px;
    min-height: 60px;
  }
  .player-name {
    font-weight: 700;
    color: white;
    font-size: 18px;

  }
  .finish-time {
    font-weight: 400;
    color: white;
    font-size: 15px;
    padding: 5px;
  }


</style>
