<template>
  <span id="all-button" @click="toggleSchedule"> Alles </span>
</template>

<script>
export default {
  name: "ToggleScheduleButton",
  methods: {
    toggleSchedule() {
      this.$emit("toggle");
    },
  },
};
</script>

<style scoped>
#all-button {
  cursor: pointer;
  margin-left: 15px;
  text-align: center;
  background: white;
  color: black;
  font-family: "Poppins", sans-serif;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border: 1px solid white;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 14px;
  font-weight: 700;
}
</style>
