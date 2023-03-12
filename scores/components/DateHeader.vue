<template>
  <div class="dateheader-container">
    <span>
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  name: "DateHeader",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.dateheader-container {
  color: black;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 14px;
  border-radius: 7.5px;
  background-color: skyblue;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
}
</style>
