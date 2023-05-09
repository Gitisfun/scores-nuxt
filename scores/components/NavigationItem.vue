<template>
  <div class="navigation-item" @click="navigate">
    <h3 class="navigation-item-title">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "NavigationItem",
  props: {
    title: {
      type: String,
    },
    route: {
      type: String,
    },
  },
  methods: {
    async navigate() {
      await navigateTo({
        path: this.route,
      });
    },
  },
};
</script>

<style>
.navigation-item {
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.navigation-item:hover {
  color: white;
  background: lightgrey;
  cursor: pointer;
}
.navigation-item:active {
  color: white;
  background: #dff9fb;
}
.navigation-item-title {
  font-size: 14px;
  font-weight: 500;
}
</style>
