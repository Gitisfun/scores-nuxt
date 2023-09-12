<template>
  <NuxtLink class="navigation-item" :to="{ name: route}">
{{ title }}
  </NuxtLink>
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
};
</script>

<style>
.navigation-item {
  padding: 15px;
  text-decoration: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-bottom: 15px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  color: black;
  display: block;
  
}
.navigation-item:hover {
  background: lightgray;
}

</style>
