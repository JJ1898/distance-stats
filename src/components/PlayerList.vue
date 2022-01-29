<template>
  <div class="flex-column">
    <div class="flex-column"><Player v-for="player in players" :key="player.UnityPlayerGuid" :player="player"/></div>
  </div>

</template>

<script>

import Player from "@/components/Player";

export default {
  components: {Player},
  name: "PlayerList",
  props: ["players"],


}
</script>

<style scoped>

</style>
