<template>
  <Header v-if="isVisible" title="KAVVV Uitslagen" />
  <div class="home-box">
    <div v-if="isVisible">
      <h2 class="home-info-box">Alle voetbal uitslagen van de Koninklijke Algemene Vereniging van Vriendenclubs Antwerpen, Vlaams-Brabant & Oost-Vlaanderen. Vind hier de uitslagen van jouw lokale club!</h2>
      <h4>Kies een provincie</h4>
      <NavigationItem title="Antwerpen" :route="ANTWERPEN_ROUTE" />
      <NavigationItem title="Vlaams-Brabant & Oost-Vlaanderen" :route="BRABANT_ROUTE" />
    </div>
    <SearchClub :setSearching="setSearching" />
  </div>
</template>

<script setup>
import { ANTWERPEN_ROUTE, BRABANT_ROUTE } from "~~/logic/constants/routes";

const { isMobile } = useDevice();

const isSearching = ref(false);

const isVisible = computed(() => {
  if (isSearching.value && isMobile) return false;
  return true;
});

const setSearching = (value) => (isSearching.value = value);

useHead({
  title: "KAVVV uitslagen",
  meta: [
    {
      name: "description",
      content: "Alle voetbal uitslagen van de Koninklijke Algemene Vereniging van Vriendenclubs Antwerpen, Vlaams-Brabant & Oost-Vlaanderen. Vind hier de uitslagen van jouw lokale club!",
    },
    {
      name: "google-site-verification",
      content: "i-d5dcGOmI5iffIB3u5T1hYZjLtJjcaCTl2xrbYTFx8",
    },
    { property: "og:title", content: "KAVVV Uitslagen" },
    { property: "og:description", content: "Alle voetbal uitslagen van de Koninklijke Algemene Vereniging van Vriendenclubs Antwerpen, Vlaams-Brabant & Oost-Vlaanderen. Vind hier de uitslagen van jouw lokale club!" },
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
</script>

<style>
.home-box {
  margin-right: 25px;
  margin-left: 25px;
}

.home-info-box {
  font-size: 14px;
  font-weight: 500;
  padding: 25px;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
</style>
