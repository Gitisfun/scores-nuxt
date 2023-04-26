<template>
  <div>
    <Header title="KAVVV VB & OV Uitslagen" />

    <Loader v-if="isLoading" />

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

useHead({
  title: "KAVVV uitslagen",
  meta: [
    {
      name: "description",
      content: "Alle voetbal uitslagen van de Koninklijke Algemene Vereniging van Vriendenclubs Vlaams-Brabant & Oost-Vlaanderen. Vind hier de uitslagen jouw lokale club!",
    },
    {
      name: "google-site-verification",
      content: "i-d5dcGOmI5iffIB3u5T1hYZjLtJjcaCTl2xrbYTFx8",
    },
    { property: "og:title", content: "KAVVV Uitslagen" },
    { property: "og:description", content: "Alle voetbal uitslagen van de Koninklijke Algemene Vereniging van Vriendenclubs Vlaams-Brabant & Oost-Vlaanderen. Vind hier de uitslagen jouw lokale club!" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://kavvv-uitslagen.be" },
    { property: "og:locale", content: "nl_Be" },
    { property: "og:image", content: "https://kavvv-uitslagen.be/mstile-144x144.png" },
  ],
  htmlAttrs: { lang: "nl" },
  link: [{ rel: "canonical", href: "https://kavvv-uitslagen.be" }],
  link: [
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
  ],
});

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
