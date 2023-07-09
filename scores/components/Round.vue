<template>
  <div>
    <div class="round-container">
      <div id="games-container">
        <Game v-for="game in round.games" :game="game" :key="game.id" />
      </div>
    </div>
  </div>
</template>

<script>
import Game from "./Game.vue";

export default {
  name: "Round",
  props: {
    round: Object,
  },
  components: {
    Game,
  },
};
</script>

<style scoped>
.round-container {
  margin-bottom: 15px;
}

#games-container {
  margin-top: 10px;
}
</style>
