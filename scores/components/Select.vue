<template>
  <select @change="selectTeam" :name="selectName" :id="selectId">
    <option value="Alle teams">Alle teams</option>
    <option v-for="team in teams" :value="team" :key="team">
      {{ team }}
    </option>
  </select>
</template>

<script>
export default {
  name: "Select",
  props: {
    selectName: String,
    selectId: String,
    selectLabel: String,
    teams: Array,
  },
  methods: {
    selectTeam(e) {
      this.$emit("selectNewTeam", e.target.value);
    },
  },
};
</script>

<style scoped>
select {
  flex: 5;
  height: 30px;
  border-radius: 10px;
  border: none;
  color: black;
  background: white;
  text-align: left;
  padding: 0 15px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  outline: none;
}
</style>
