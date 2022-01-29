<template>
  <div>
  <span class="car-name">{{carName}}</span>
  <span class="wings-out" v-if="isFlying"><i class="fas fa-paper-plane icon"></i></span>
  </div>
</template>

<script>

export default {
  name: "PlayerCar",
  props: ["car"],
  computed: {
    carName() {
      if (!this.car?.CarName) return "loading";
      return this.car?.CarName;
    },
    isFlying() {
      if (this.car?.WingsOpen) return true;
      return false
    }


  },


}
</script>

<style scoped>
.icon{
  padding: 2px;
}


</style>
