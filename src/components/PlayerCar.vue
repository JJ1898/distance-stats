<template>
  <div>
  <span class="car-name">{{this.car.CarName}}</span>
  <span class="wings-out" v-if="this.car.WingsOpen"><i class="fas fa-paper-plane icon"></i></span>
  </div>
</template>

<script>

export default {
  name: "PlayerCar",
  props: ["car"],
  computed: {

  },


}
</script>

<style scoped>
.icon{
  padding: 2px;
}


</style>
