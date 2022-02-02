<template>
  <div>
    <div class="player-status row justify-content-center align-content-center">
      <span class="car-name col-sm">{{carName}}</span>
      <span>
      <span class="speed col-sm" v-if="currentSpeed">{{currentSpeed}}</span>
      <span class="flying col-sm" ><i v-if="isFlying" class="fas fa-paper-plane icon"></i></span>
      <span class="wrecked col-sm" ><i v-if="isWrecked" class="fas fa-skull-crossbones icon"></i></span>
      <span class="dnf col-sm">
        <span v-if="isDNF">
          <i class="fas fa-skull-crossbones icon"></i>DNF
        </span>
      </span>
        </span>
      <span class="finished col-sm" ><i v-if="isFinished" class="fas fa-flag-checkered icon"></i></span>
    </div>
  </div>
</template>

<script>

import { totalVelocity } from "../services/StatsUtils";

export default {
    name: "PlayerCar",
    props: ["car"],
    computed: {
        carName() {
            if (!this.car?.CarName) return "Loading . . .";
            return this.car?.CarName;
        },
        isFlying() {
            if (this.car?.WingsOpen) return true;
            return false;
        },
        isWrecked() {
            if (!this.car?.Alive) return true;
            return false;
        },
        isDNF() {
            if (this.car?.FinishType === "DNF") return true;
            return false;
        },
        isFinished() {
            if (this.car?.FinishType === "DNF") return false;
            if (this.car?.Finished) return true;
            return false;
        },
        currentSpeed() {
            if (!this.car?.Velocity) return "";
            return (totalVelocity(this.car?.Velocity) + " MPH");
        }

    }


};
</script>

<style scoped>

  .player-status {
    display: flex;
    margin: auto;
    padding: 5px;
    font-size: 15px;
    color: white;
    border-left: white;
    border-right: white;
  }

</style>
