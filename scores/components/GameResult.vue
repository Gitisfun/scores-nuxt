<template>
  <div :style="getCssVarsForGameResult" class="game-result-container">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "GameResult",
  props: {
    text: {
      type: String,
    },
  },
  computed: {
    getCssVarsForGameResult() {
      if (this.text.includes("W")) {
        return "--game-result-color: green";
      } else if (this.text.includes("L")) {
        return "--game-result-color: red";
      } else if (this.text.includes("D")) {
        return "--game-result-color: orange";
      } else {
        return "--game-result-color: grey";
      }
    },
  },
};
</script>

<style scoped>
.game-result-container {
  text-align: center;
  background-color: var(--game-result-color);
  border: 1px solid var(--game-result-color);
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: bold;
  color: white;
}
@media (max-width: 350px) {
  .game-result-container {
    font-size: 6px;
  }
}
@media (max-width: 500px) {
  .game-result-container {
    font-size: 10px;
  }
}
</style>
