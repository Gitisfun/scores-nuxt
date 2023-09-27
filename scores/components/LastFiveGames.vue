<template>
  <div class="lastfivegames-item-container">
    <GameResult style="flex: 1" v-for="item in getGames" :text="item.result" :key="item.date" />
  </div>
</template>

<script setup>
import { useScoresStore } from "~~/store/scores";

const store = useScoresStore();
const { isHomeTeam } = defineProps({
  isHomeTeam: String,
});

const getGames = computed(() => {
  if (isHomeTeam === "no") return store.lastFiveGames?.away;
  return store.lastFiveGames?.home;
});
</script>

<style scoped>
.lastfivegames-item-container {
  display: flex;
  gap: 5px;
  margin-left: 25px;
  margin-right: 25px;
}
@media (max-width: 350px) {
  .lastfivegames-item-container {
    margin-left: 15px;
    margin-right: 15px;
    gap: 2px;
  }
}
@media (min-width: 500px) {
  .lastfivegames-item-container {
    margin-left: 35px;
    margin-right: 35px;
  }
}
@media (min-width: 550px) {
  .lastfivegames-item-container {
    margin-left: 45px;
    margin-right: 45px;
    gap: 10px;
  }
}
@media (min-width: 700px) {
  .lastfivegames-item-container {
    margin-left: 50px;
    margin-right: 50px;
    gap: 15px;
  }
}
@media (min-width: 700px) {
  .lastfivegames-item-container {
    margin-left: 55px;
    margin-right: 55px;
    gap: 20px;
  }
}
</style>
