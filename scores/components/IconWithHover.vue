<template>
  <Icon style="cursor: pointer" @mouseover="onHover" @mouseleave="onLeave" @click="iconClicked" :icon="icon" :color="myColor" :width="width" :height="height" />
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "IconWithHover",
  components: {
    Icon,
  },
  props: {
    width: { type: String, default: "30" },
    height: { type: String, default: "30" },
    color: { type: String, default: "black" },
    icon: String,
  },
  data() {
    return {
      myColor: "black",
    };
  },
  created() {
    this.myColor = this.color;
  },
  methods: {
    onHover() {
      this.myColor = "grey";
    },
    onLeave() {
      this.myColor = this.color;
    },
    iconClicked() {
      this.$emit("iconClick");
    },
  },
};
</script>
