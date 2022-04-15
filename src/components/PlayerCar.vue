<template>
  <div>
    <div class="player-hud d-inline-flex justify-content-center">
      <div class="car-name">{{carName}}</div>
      <div v-if="!isFinished" class="d-inline-flex">
        <div class="player-action speed"><span><span class="fixed-number" v-if="!isFinished">{{currentSpeed}}</span><span class="speed-unit" v-if="!isFinished">MPH</span></span></div>
        <div class="player-action flight"><span v-if="isFlying" ><i class="fas fa-paper-plane icon"></i></span></div>
        <div class="player-action wreck"><span v-if="isWrecked"><i class="fas fa-skull-crossbones icon"></i></span></div>
        <div class="player-action dnf">
          <span class="dnf-span" v-if="isDNF">
            <i class="fas fa-times-circle"></i> DNF
         </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { totalVelocity } from "@/services/StatsUtils";

export default {
    name: "PlayerCar",
    props: ["car"],
    computed: {
        carName() {
            if (!this.car?.CarName) return "Loading . . .";
            return this.car?.CarName;
        },
        isFlying() {
            return !!this.car?.WingsOpen;
        },
        isWrecked() {
            return !this.car?.Alive;
        },
        isDNF() {
            return this.car?.FinishType === "DNF";
        },
        isFinished() {
            if (this.car?.FinishType === "DNF") return false;
            return !!this.car?.Finished;
        },
        currentSpeed() {
            if (!this.car?.Velocity) return 0;
            return (totalVelocity(this.car?.Velocity));
        }

    }


};
</script>

<style scoped>

  .car-name {
    min-width: 100px;
  }
  .player-hud {
    padding: 5px;
    font-size: 15px;
    color: white;
    width: 100%;
  }
  .player-action {
    min-width: 25px !important;
  }

  span.fixed-number {
    font-variant-numeric: tabular-nums;
    display: inline-block;
    min-width: 30px;
    justify-content: right;
  }


</style>
