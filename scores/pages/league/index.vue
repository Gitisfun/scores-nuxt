<template>
  <div>
    <Header :title="title" />
    <div v-if="!isFullScheduleShown">
      <DateContainer @toggle="toggleSchedule" />
      <Round v-if="selectedRound" :round="selectedRound" />
    </div>
    <div v-if="isFullScheduleShown">
      <div class="select-container">
        <Select
          selectName="teams"
          selectId="teams"
          selectLabel="Filter op een team"
          :teams="leagueTeamsList"
          @selectNewTeam="filterSchedule"
        />
        <div style="flex: 1">
          <IconWithHover
            @iconClick="toggleSchedule"
            icon="bx:x"
            style="float: right"
            color="black"
            width="30"
            height="30"
          />
        </div>
      </div>
      <Schedule :schedule="rounds" ref="schedule" />
    </div>
    <Ranking />
    <OrientationInfo />
  </div>
</template>

<script setup>
import { useScoresStore } from "~~/store/scores";
import { findClosestDateIndex } from "~~/logic/date";
import { convertToDateList } from "~~/logic/date";
import baseApiRoute from "~~/api/baseApiRoute";

useHead({
  title: "KAVVV uitslagen",
  meta: [
    {
      name: "description",
      content:
        "Alle voetbal uitslagen van de Koninklijke Algemene Vereniging van Vriendenclubs Vlaams-Brabant & Oost-Vlaanderen. Vind hier de competitie uitslagen van jouw lokale team!",
    },
  ],
  link: [{ rel: "canonical", href: "https://kavvv-uitslagen.be" }],
});

const route = useRoute();
const store = useScoresStore();

const ranking = ref([]);
const rounds = ref([]);
const title = ref(route.query.league);
const isFullScheduleShown = ref(false);
const teams = ref(null);

const schedule = ref("");

const ROUTE_NAME = baseApiRoute(store.province);

const [{ data: dates }, { data: leagues }] = await Promise.all([
  useFetch(`${ROUTE_NAME}/games/league`, {
    query: { league: route.query.league },
  }),
  useFetch(`${ROUTE_NAME}/rankings`, {
    query: { league: route.query.league },
  }),
]);

const temp = dates.value;
temp?.sort((a, b) => new Date(a?.date) - new Date(b?.date));
const tempDates = convertToDateList(temp?.map((e) => e?.date));
store.setDates(tempDates);
const index = findClosestDateIndex(tempDates);
store.setScheduleIndex(index);
rounds.value = temp;
ranking.value = leagues?.value?.ranking;
teams.value = ranking?.value?.map((e) => e.team?.replace("\n", "")?.trim());

store.setRanking(leagues?.value?.ranking);
store.setScheduleLeague(temp);

const selectedRound = computed(() => {
  if (rounds.value?.length === 0) return null;
  return rounds.value[store?.scheduleIndex];
});
const leagueTeamsList = computed(() => {
  if (teams.value) {
    return teams.value;
  }
  return [];
});

function filterSchedule(selectedTeam) {
  schedule.value?.refresh(selectedTeam);
}
function toggleSchedule() {
  isFullScheduleShown.value = !isFullScheduleShown.value;
}

const { gtag } = useGtag();

gtag(`${store?.province}_${route?.query?.league}`, "visit", {
  app_name: "KAVVV",
  screen_name: "league",
});
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
