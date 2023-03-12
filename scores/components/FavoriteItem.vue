<template>
  <div class="favorite-item-container">
    <ImageMapper class="favorite-item-icon" :team="team" />
    <div class="favorite-item">
      {{ team }}
    </div>
    <div class="favorite-icon-right">
      <Icon v-if="isFavorited" class="favorite-item-icon" icon="bx:star" color="orange" width="20" height="20" />
      <IconWithHover v-if="!isFavorited" @iconClick="addToFavorites" icon="bx:plus" color="green" width="20" height="20" />
      <IconWithHover v-if="isFavorited" @iconClick="removeFromFavorites" icon="bx:minus" color="red" width="20" height="20" />
    </div>
  </div>
</template>

<script>
import ImageMapper from "./ImageMapper.vue";
import { Icon } from "@iconify/vue";
import { addFavoritesInCache, getFavoritesFromCache, removeFavoritesFromCache } from "~~/logic/cache";
import IconWithHover from "./IconWithHover.vue";

export default {
  name: "FavoriteItem",
  components: { ImageMapper, Icon, IconWithHover },
  props: {
    team: String,
  },
  data() {
    return {
      favoritesList: [],
    };
  },
  created() {
    this.refreshList();
  },
  computed: {
    isFavorited() {
      for (const favorite of this.favoritesList) {
        if (this.team === favorite) {
          return true;
        }
      }
      return false;
    },
  },
  methods: {
    addToFavorites() {
      addFavoritesInCache(this.team);
      this.refreshList();
    },
    removeFromFavorites() {
      removeFavoritesFromCache(this.team);
      this.refreshList();
    },
    refreshList() {
      this.favoritesList = getFavoritesFromCache();
    },
  },
};
</script>

<style scoped>
.favorite-item-container {
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
}

.favorite-item-icon {
  margin-right: 20px;
}
.favorite-icon-right {
  display: flex;
  margin-left: auto;
}
</style>
