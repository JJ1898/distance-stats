<template>
  <div>
    {{getTrack}} ({{getMode}})
  </div>

</template>

<script>
export default {
  name: "TrackInfo",
  props: ["track"],
  computed: {
    getTrack(){
      if (!this.track?.Name) return "Loading...";
      return this.track.Name;
    },
    getMode(){
      if (!this.track?.GameMode) return "Loading...";
      return this.track.GameMode;
    }
  }
}
</script>

<style scoped>

</style>
