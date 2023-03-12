<template>
  <div>
    <Header title="KAVVV VB&OV Scores" />
    <!-- 
      <Loader v-if="isLoading" />
    -->
    <DateContainer v-if="!isLoading" />
    <div v-if="store.schedule.length > 0 && !isLoading">
      <div>
        <FavoritesHeader />
        <NoFavoritesInfo />
        <Game v-for="game in store.favorites" :game="game" :key="game.id" />
      </div>
      <div v-for="league in store.schedule" :key="league.name">
        <LeagueHeader :title="league.name" :key="league.name" />
        <Game v-for="game in league.games" :game="game" :key="game.id" />
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeController from "~~/api/calls/home";
import { useScoresStore } from "~~/store/scores";
import { convertToDateList, findClosestDateIndex } from "~~/logic/date";
import { storeDatesInCache } from "~~/logic/cache";

const isLoading = ref(true);
const store = useScoresStore();

onMounted(() => {
  HomeController.get(null, (res) => {
    isLoading.value = false;

    const dateList = convertToDateList(res[0].data);
    store.setDates(dateList);

    const leagues = res[1].data.leagues;
    store.setSchedule(leagues);
    store.setFavorites(leagues);
    const list = convertToDateList(dateList);
    storeDatesInCache(list);

    store.setDates(list);

    const index = findClosestDateIndex(list);
    store.setScheduleIndex(index);
  });
});
</script>
