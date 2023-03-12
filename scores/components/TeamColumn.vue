<template>
  <div class="column-team">
    <ImageMapper :team="formattedTeam" />
    <span :style="isTeamInMatchView">
      {{ team }}
    </span>
  </div>
</template>

<script setup>
import { useScoresStore } from "~~/store/scores";
import ImageMapper from "./ImageMapper.vue";

const route = useRoute();
const store = useScoresStore();

const { team } = defineProps({
  team: String,
});

const formattedTeam = computed(() => {
  return team.trim();
});
const isTeamInMatchView = computed(() => {
  if (team && store.matchTeams && store.matchTeams.home && store.matchTeams.away) {
    if (route.name === "match" && (team.trim() === store.matchTeams.home.trim() || team.trim() === store.matchTeams.away.trim())) {
      return "font-weight: bold; color: lightskyblue";
    }
  }
  return "color: black";
});
</script>

<style scoped>
.column-team {
  display: flex;
  align-items: center;
}
</style>
