<template>
  <div class="track-info">
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
.track-info {
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-size: 25px;
  padding: 15px;
}

</style>
