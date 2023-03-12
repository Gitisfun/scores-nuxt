<template>
  <div @click="changeRound" :style="`color: ${getTextColor()}`" class="date-item-column">
    <div class="date-item-title">{{ week }}</div>
    <div class="date-item-subtitle">{{ day }}</div>
  </div>
</template>

<script>
export default {
  name: "DateItem",
  props: {
    week: String,
    day: String,
    isCurrentWeek: Boolean,
  },
  methods: {
    changeRound() {
      this.$emit("changeRound");
    },
    getTextColor() {
      if (this.isCurrentWeek) return "lightskyblue";
      return "black";
    },
  },
};
</script>

<style scoped>
.date-item-column {
  flex: 1;
  text-align: center;
  cursor: pointer;
}

.date-item-title {
  font-size: 12px;
  font-weight: 800;
}
.date-item-subtitle {
  font-size: 10px;
  font-weight: 800;
}
</style>
