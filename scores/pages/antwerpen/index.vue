<template>
  <div>
    <Header title="KAVVV Antwerpen" />
    <DateContainer />
    <div v-if="store.schedule.length > 0">
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
import { useScoresStore } from "~~/store/scores";
import { convertToDateList, findClosestDateIndex } from "~~/logic/date";
import { storeDatesInCache } from "~~/logic/cache";
import baseApiRoute from "~~/api/baseApiRoute";
import { ANTWERPEN } from "~~/logic/constants/provinces";

useHead({
  title: "KAVVV Antwerpen",
  meta: [
    {
      name: "description",
      content:
        "Alle voetbal uitslagen van de Koninklijke Algemene Vereniging van Vriendenclubs Antwerpen. Vind hier de uitslagen jouw lokale club!",
    },
    {
      name: "google-site-verification",
      content: "i-d5dcGOmI5iffIB3u5T1hYZjLtJjcaCTl2xrbYTFx8",
    },
    { property: "og:title", content: "KAVVV Uitslagen" },
    {
      property: "og:description",
      content:
        "Alle voetbal uitslagen van de Koninklijke Algemene Vereniging van Vriendenclubs Antwerpen. Vind hier de uitslagen jouw lokale club!",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://kavvv-uitslagen.be/antwerpen" },
    { property: "og:locale", content: "nl_Be" },
    {
      property: "og:image",
      content: "https://kavvv-uitslagen.be/mstile-144x144.png",
    },
  ],
  htmlAttrs: { lang: "nl" },
  link: [{ rel: "canonical", href: "https://kavvv-uitslagen.be/antwerpen" }],
  link: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
  ],
});
const store = useScoresStore();
const ROUTE_NAME = baseApiRoute(ANTWERPEN);

const [{ data: dates }, { data: leagues }] = await Promise.all([
  useFetch(`${ROUTE_NAME}/dates`),
  useFetch(`${ROUTE_NAME}/games/round`),
]);
store.setProvince(ANTWERPEN);

const dateList = convertToDateList(dates?.value);
store.setDates(dateList);
store.setSchedule(leagues?.value?.leagues);

store.setFavorites(leagues?.value?.leagues);
const list = convertToDateList(dateList);
storeDatesInCache(list);
store.setDates(list);

const index = findClosestDateIndex(list);
store.setScheduleIndex(index);

onMounted(async () => {
  await useFetch(`${ROUTE_NAME}/statistics/increment`);
});
</script>
