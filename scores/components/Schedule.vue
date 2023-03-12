<template>
  <div v-if="store.scheduleLeague">
    <div class="round-container" v-for="round in teamList" :key="round.date">
      <DateHeader :title="formatSubtitle(round.date)" />
      <div id="games-container">
        <Game v-for="game in round.games" :round="round" :game="game" :key="game.homeTeam" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { filterListByTeam } from "~~/logic/util";
import { convertToEnglishDate } from "~~/logic/date";
import { useScoresStore } from "~~/store/scores";

const store = useScoresStore();

const selectedTeam = ref(null);

const teamList = computed(() => {
  if (selectedTeam.value != null) {
    if (selectedTeam === "Alle teams") return store.scheduleLeague;
  }
  if (selectedTeam.value) {
    return filterListByTeam(store.scheduleLeague, selectedTeam.value);
  }
  return store.scheduleLeague;
});

function formatSubtitle(text) {
  return convertToEnglishDate(text);
}

function refresh(team) {
  selectedTeam.value = team;
}

defineExpose({ refresh });
</script>

<style scoped>
.round-container {
  margin-bottom: 0px;
}

.date-container {
  padding: 10px;
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
}

/* Smarthphones, 899 and lower */
@media (max-width: 899px) {
  .date-container {
    margin-bottom: 5px;
    font-size: 14px;
    color: white;
    color: black;
  }
}
/* Small devices (tablets, 768px and up) */
@media (min-width: 900px) {
  .date-container {
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
