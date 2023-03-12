<template>
  <div class="kit-container">
    <div class="kit-item">
      <Kit isHome="home" />
      <div class="kit-item-team">Thuis</div>
    </div>
    <div class="kit-item">
      <Kit isHome="away" />
      <div class="kit-item-team">Uit</div>
    </div>
  </div>
</template>

<script>
import Kit from "./Kit.vue";

export default {
  name: "KitContainer",
  props: {
    info: Object,
  },
  components: { Kit },
};
</script>

<style>
.kit-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 25px;
  justify-content: center;
  align-items: center;
  gap: 75px;
  /* border-bottom: 0.1px solid #dff9fb; */
}
.kit-item {
  flex: 1;
}
.kit-item-team {
  text-align: center;
  margin-top: 15px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
}
</style>
