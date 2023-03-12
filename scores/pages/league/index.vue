<template>
  <div>
    <Header :title="title" />
    <div v-if="!isFullScheduleShown">
      <DateContainer @toggle="toggleSchedule" />
      <Round v-if="selectedRound" :round="selectedRound" />
    </div>
    <div v-if="isFullScheduleShown">
      <div class="select-container">
        <Select selectName="teams" selectId="teams" selectLabel="Filter op een team" :teams="leagueTeamsList" @selectNewTeam="filterSchedule" />
        <div style="flex: 1">
          <IconWithHover @iconClick="toggleSchedule" icon="bx:x" style="float: right" color="black" width="30" height="30" />
        </div>
      </div>
      <Schedule :schedule="rounds" ref="schedule" />
    </div>
    <Ranking />
    <OrientationInfo />
  </div>
</template>

<script setup>
import LeagueController from "~~/api/calls/league";
import { useScoresStore } from "~~/store/scores";
import { findClosestDateIndex } from "~~/logic/date";
import { convertToDateList } from "~~/logic/date";

const route = useRoute();
const store = useScoresStore();

const ranking = ref([]);
const rounds = ref([]);
const title = ref("");
const isFullScheduleShown = ref(false);
const teams = ref(null);

const schedule = ref("");

const selectedRound = computed(() => {
  if (rounds.value.length === 0) return null;
  return rounds.value[store.scheduleIndex];
});
const leagueTeamsList = computed(() => {
  if (teams.value) {
    return teams.value;
  }
  return [];
});

onMounted(() => {
  title.value = route.query.league;

  LeagueController.get({ league: route.query.league }, (res) => {
    const temp = res[0].data;
    temp.sort((a, b) => new Date(a.date) - new Date(b.date));
    const tempDates = convertToDateList(temp.map((e) => e.date));
    store.setDates(tempDates);
    const index = findClosestDateIndex(tempDates);
    store.setScheduleIndex(index);
    rounds.value = temp;
    ranking.value = res[1].data.ranking;
    teams.value = ranking.value.map((e) => e.team.replace("\n", "").trim());

    store.setRanking(res[1].data.ranking);
    store.setScheduleLeague(temp);
  });
});
function filterSchedule(selectedTeam) {
  schedule.value.refresh(selectedTeam);
}
function toggleSchedule() {
  isFullScheduleShown.value = !isFullScheduleShown.value;
}
</script>

<style scoped>
.select-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 0.1px solid #dff9fb;
  border-bottom: 0.1px solid #dff9fb;
}
</style>
