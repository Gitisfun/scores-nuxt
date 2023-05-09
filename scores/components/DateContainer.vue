<template>
  <div class="date-container">
    <Icon class="date-container-icon" icon="bx:calendar" color="black" width="25" height="25" />
    <div v-if="store.scheduleIndex == 0" style="flex: 1"></div>
    <DateItem v-if="store.scheduleIndex !== 0" @changeRound="previousRound" :week="previousDate.week" :day="previousDate.day" :isCurrentWeek="false" />
    <DateItem :week="currentDate.week" :day="currentDate.day" :isCurrentWeek="true" />
    <DateItem v-if="store.scheduleIndex != store.dates.length - 1" @changeRound="nextRound" :week="nextDate.week" :day="nextDate.day" :isCurrentWeek="false" />
    <div v-if="store.scheduleIndex == store.dates.length - 1" style="flex: 1"></div>
    <div v-if="isOnLeagueRoute" class="date-container-button">
      <ToggleScheduleButton @toggle="toggleSchedule" />
    </div>
    <div v-else style="flex: 1"></div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useScoresStore } from "~~/store/scores";
import { formatDay } from "~~/logic/date";
import { formatDateToString } from "~~/logic/date";
import baseApiRoute from "~~/api/baseApiRoute";

const route = useRoute();
const store = useScoresStore();
const emit = defineEmits(["toggle"]);

const previousDate = computed(() => {
  return {
    week: `Week ${store.scheduleIndex}`,
    day: formatDay(store.dates[store.scheduleIndex - 1]),
  };
});
const currentDate = computed(() => {
  return {
    week: `Week ${store.scheduleIndex + 1}`,
    day: formatDay(store.dates[store.scheduleIndex]),
  };
});
const nextDate = computed(() => {
  return {
    week: `Week ${store.scheduleIndex + 2}`,
    day: formatDay(store.dates[store.scheduleIndex + 1]),
  };
});

const isOnLeagueRoute = computed(() => {
  if (route.name === "league") return true;
  return false;
});

async function previousRound() {
  const index = store.scheduleIndex - 1;

  if (index >= 0) {
    await fetchRound(index);
  }
}
async function nextRound() {
  const index = store.scheduleIndex + 1;
  const max = store.dates.length;

  if (index < max) {
    await fetchRound(index);
  }
}
async function fetchRound(index) {
  const ROUTE_NAME = baseApiRoute(store.province);
  const date = formatDateToString(store.dates[index]);
  const { data } = await useFetch(`${ROUTE_NAME}/games/round`, {
    query: { date: date },
  });
  store.setSchedule(data.value.leagues);
  store.setFavorites(data.value.leagues);
  store.setScheduleIndex(index);
}

function toggleSchedule() {
  emit("toggle");
}
</script>

<style scoped>
.date-container {
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  border-top: 0.1px solid #dff9fb;
  border-bottom: 0.1px solid #dff9fb;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  margin-bottom: 15px;
}

.date-container-button {
  flex: 1;
}

.date-container-icon {
  flex: 1;
}

/* Smarthphones, 899 and lower */
@media (max-width: 899px) {
  .date-container {
    font-size: 14px;
    font-weight: bold;
  }
}
/* Small devices (tablets, 768px and up) */
@media (min-width: 900px) {
  .date-container {
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
