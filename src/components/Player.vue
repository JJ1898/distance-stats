<template>
  <div class="name-box">
    {{this.player.Name + " ( " + this.player.UnityPlayerGuid + " )"}}<span class="spectator" v-if="isSpectator"> (Spectator)</span>
  </div>
</template>

<script>

export default {
  name: 'Player',
  props: ["player"],
  computed: {
    isSpectator(){
      if (this.player.Car?.Spectator) return true;
      return null;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
