<template>
  <div class="orientation-info-container">
    <Icon class="orientation-info-icon" :icon="firstIcon" color="black" width="20" height="20" />
    <Icon class="orientation-info-icon" icon="bx:right-arrow-alt" color="black" width="20" height="20" />
    <Icon class="orientation-info-icon" :icon="secondIcon" color="black" width="20" height="20" />

    <div class="orientation-info-text">{{ text }}</div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { getOrientation } from "~~/logic/util";

export default {
  name: "OrientationInfo",
  components: {
    Icon,
  },
  data() {
    return {
      orientation: true,
    };
  },
  mounted() {
    window.addEventListener("orientationchange", this.changeOrientation);
  },
  computed: {
    text() {
      if (this.orientation) return "Toon meer kolommen";
      return "Toon minder kolommen";
    },
    firstIcon() {
      if (this.orientation) return "bx:mobile";
      return "bx:mobile-landscape";
    },
    secondIcon() {
      if (this.orientation) return "bx:mobile-landscape";
      return "bx:mobile";
    },
  },

  methods: {
    changeOrientation() {
      this.orientation = getOrientation();
    },
  },
};
</script>

<style scoped>
.orientation-info-container {
  display: flex;
  color: black;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 10px;
  padding-left: 10px;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  border-top: 0.1px solid black;
  font-family: "Poppins", sans-serif;
}
.orientation-info-icon {
  flex: 1;
}
.orientation-info-text {
  flex: 5;
  text-align: center;
}
</style>
