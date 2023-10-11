<template>
  <div>
    <Header :title="title" />
    <div v-for="item in games" :key="item.id">
      <DateHeader :title="formatSubtitle(item.date)" />
      <Game :game="item" />
    </div>
    <LeagueHeaderTitle :title="league" />
    <Ranking />
    <OrientationInfo />
  </div>
</template>

<script setup>
import baseApiRoute from "~~/api/baseApiRoute";
import { BRABANT } from "~~/logic/constants/provinces";
import { convertToEnglishDate } from "~~/logic/date";
import { useScoresStore } from "~~/store/scores";

const route = useRoute();
const store = useScoresStore();

const title = ref("");
const games = ref([]);

const league = ref([]);

// TODO: If you want to change club, enable both provinces here
const ROUTE_NAME = baseApiRoute(BRABANT);
const { data } = await useFetch(`${ROUTE_NAME}/clubs/${route.params.slug}`);

function formatSubtitle(text) {
  return convertToEnglishDate(text);
}

useHead({
  title: route?.query?.team,
  meta: [
    {
      name: "description",
      content: `Alle voetbal uitslagen van de Koninklijke Algemene Vereniging van Vriendenclubs Antwerpen, Oost-Vlaanderen en Vlaams-Brabant. Vind hier de wedstrijden en uitslagen van ${route?.query?.team}.`,
    },
    {
      name: "google-site-verification",
      content: "i-d5dcGOmI5iffIB3u5T1hYZjLtJjcaCTl2xrbYTFx8",
    },
    { property: "og:title", content: route?.query?.team },
    {
      property: "og:description",
      content: `Alle voetbal uitslagen van de Koninklijke Algemene Vereniging van Vriendenclubs Antwerpen, Oost-Vlaanderen en Vlaams-Brabant. Vind hier de wedstrijden en uitslagen van ${route?.query?.team}.`,
    },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: `https://kavvv-uitslagen.be/club?team=${route?.query?.team}`,
    },
    { property: "og:locale", content: "nl_Be" },
    {
      property: "og:image",
      content: "https://kavvv-uitslagen.be/mstile-144x144.png",
    },
  ],
  htmlAttrs: { lang: "nl" },
  link: [
    {
      rel: "canonical",
      href: `https://kavvv-uitslagen.be/club?team=${route?.query?.team}`,
    },
  ],
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

title.value = data?.value?.name;
games.value = data?.value?.matches?.sort(
  (a, b) => new Date(a.date) - new Date(b.date)
);
league.value = data?.value?.leagueFullName;
store.setRanking(data?.value?.ranking?.ranking);
</script>
