<template>
  <div class="remark-container">
    <div class="remark-title">Opmerking</div>
    <div>
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Remark",
  props: { text: String },
};
</script>

<style scoped>
.remark-container {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  margin: 25px;
}
.remark-title {
  font-weight: bold;
}
</style>
