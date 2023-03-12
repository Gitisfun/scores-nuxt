<template>
  <div class="table-container">
    <table v-if="store.ranking">
      <tr>
        <th class="col_1">#</th>
        <th class="col_2">TEAM</th>
        <th class="col_3">P</th>
        <th class="col_4">W</th>
        <th class="col_5">L</th>
        <th class="col_6">D</th>
        <th class="col_7">F</th>
        <th class="col_8">A</th>
        <th class="col_9">GD</th>
        <th class="col_10">PTS</th>
      </tr>
      <tr v-for="row in store.ranking" :key="row.order">
        <td class="col_1">
          {{ row.order }}
        </td>
        <td class="col_2">
          <TeamColumn :team="row.team" />
        </td>
        <td class="col_3">
          {{ row.played }}
        </td>
        <td class="col_4">
          {{ row.win }}
        </td>
        <td class="col_5">
          {{ row.lose }}
        </td>
        <td class="col_6">
          {{ row.draw }}
        </td>
        <td class="col_7">
          {{ row.goalsFor }}
        </td>
        <td class="col_8">
          {{ row.goalsAgainst }}
        </td>
        <td class="col_9">
          {{ goalDifference(row.goalsFor, row.goalsAgainst) }}
        </td>
        <td class="col_10">
          {{ row.points }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { useScoresStore } from "~~/store/scores";

const store = useScoresStore();

function goalDifference(goalsFor, goalsAgainst) {
  return goalsFor - goalsAgainst;
}
</script>

<style scoped>
.table-container {
  margin-left: 10px;
  margin-right: 10px;
}
table {
  border-collapse: collapse;
  border-color: grey;
  width: 100%;
  margin-bottom: 25px;
}
th {
  color: black;
  font-size: 11px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  height: 38px;
}

td {
  font-family: "Poppins", sans-serif;
  color: black;
  text-align: center;
  font-size: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
}

td.col_2 {
  color: black;
}

@media (orientation: portrait) {
  .col_4 {
    display: none;
  }
  .col_5 {
    display: none;
  }
  .col_6 {
    display: none;
  }
  .col_7 {
    display: none;
  }
  .col_8 {
    display: none;
  }
}

@media (orientation: landscape) {
}
</style>
