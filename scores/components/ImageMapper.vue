<template>
  <img v-if="team === 'ZSV Overijse'" src="../assets/zsvoverijse.png" alt="hometeam" />
  <img v-else-if="team.trim() === 'Dynamo Wijndaal'" src="../assets/dynamowijndaal.png" alt="hometeam" />
  <img v-else-if="team.trim() === 'FC Petit St Guidon'" src="../assets/fcpetitsaintguidon2.png" alt="hometeam" />
  <img v-else-if="team.trim() === 'FC Caféboontjes A' || team.trim() === 'FC Caféboontjes B'" src="../assets/fccafeboontjes.png" alt="hometeam" />
  <img v-else-if="team.trim() === 'FC Depot'" src="../assets/fcdepot.png" alt="hometeam" />
  <img v-else-if="team.trim() === 'FC De Leeuwerik'" src="../assets/fcdeleeuwerik.png" alt="hometeam" />
  <img v-else-if="team.trim() === 'FC Dogs United'" src="../assets/fcdogsunited.png" alt="hometeam" />
  <img v-else-if="team.trim() === 'VK De Sjoeters A' || team.trim() === 'VK De Sjoeters B' || team.trim() === 'VK De Sjoeters YB'" src="../assets/vkdesjoeters.png" alt="hometeam" />
  <img v-else-if="team.trim() === 'Sparta den Bos A' || team.trim() === 'Sparta den Bos B'" src="../assets/spartadenbos2.png" alt="hometeam" />
  <img v-else-if="team === 'VK Dilbeek'" src="../assets/vkdilbeek.png" alt="hometeam" />
  <img v-else-if="team === 'V.O.K. Jezus Eik B' || team === 'V.O.K. Jezus Eik A' || team === 'V.O.K. Jezus Eik C'" src="../assets/vokjezuseik2.png" alt="hometeam" />
  <img v-else-if="team === 'Sporting Oppem'" src="../assets/sportingoppem.png" alt="hometeam" />
  <img v-else-if="team === 'SC Duvelshoek'" src="../assets/duvelshoek.png" alt="hometeam" />
  <img v-else-if="team === 'Peutie 1801'" src="../assets/peutie.png" alt="hometeam" />
  <img v-else-if="team === 'Lokomotiv Centrum A' || team === 'Lokomotiv Centrum B'" src="../assets/lokomotivcentrumnew.png" alt="hometeam" />
  <img v-else-if="team === 'K. SP. Tange A' || team === 'K.sp.Tange B'" src="../assets/ksptangeb.png" alt="hometeam" />
  <img v-else-if="team === 'Hangover 96'" src="../assets/hangover96.png" alt="hometeam" />
  <img v-else-if="team === 'FC Borneo'" src="../assets/fcborneo.png" alt="hometeam" />
  <img v-else-if="team === 'Eendracht Vilvoorde'" src="../assets/eendrachtvilvoorde.png" alt="hometeam" />
  <img v-else-if="team === 'Bobo A' || team === 'Bobo B'" src="../assets/bobo.png" alt="hometeam" />
  <img v-else-if="team === 'Nickyspurters'" src="../assets/nickyspurters.png" alt="hometeam" />
  <img v-else-if="team === 'FC In Onzen Tijd'" src="../assets/fcinonzentijd.png" alt="hometeam" />
  <img v-else-if="team === `Simca Boys`" src="../assets/simcaboys.png" alt="hometeam" />
  <img v-else-if="team === `VC 't Vraagteken`" src="../assets/vraagteken.png" alt="hometeam" />
  <img v-else-if="team === `SV Tijl`" src="../assets/svtijla.png" alt="hometeam" />
  <img v-else-if="team === `FC Ons Huis`" src="../assets/fconshuis.png" alt="hometeam" />
  <img v-else-if="team === `Flora Likert` || team === `Flora Likert 2`" src="../assets/fcflora.png" alt="hometeam" />
  <img v-else-if="team === `Siccard Boys`" src="../assets/siccardboysa.png" alt="hometeam" />
  <img v-else-if="team === `Stinne Boys`" src="../assets/stinneboys.png" alt="hometeam" />
  <img v-else-if="team === `FC Cité`" src="../assets/fccite.png" alt="hometeam" />
  <img v-else-if="team === `Hoke`" src="../assets/hoke.png" alt="hometeam" />
  <img v-else-if="team === `Cristal Boys A` || team === `Cristal Boys B` || team === `Cristal Boys C`" src="../assets/cristalboysa.png" alt="hometeam" />
  <img v-else-if="team === `VK 't Gareel A` || team === `VK 't Gareel B`" src="../assets/vkgareel.jpg" alt="hometeam" />
  <img v-else-if="team === `RC Lamme Guiche`" src="../assets/rclammeguichea.png" alt="hometeam" />
  <img v-else-if="team === `VK Klein Leeuw`" src="../assets/vkkleinleeuwa.png" alt="hometeam" />
  <img v-else-if="team === `Nissan Essenbeek A` || team === `Nissan Essenbeek B`" src="../assets/fcnissanessenbeek.png" alt="hometeam" />
  <img v-else-if="team === `Kv SKO Vollezele A` || team === `Kv SKO Vollezele B`" src="../assets/kvskovollezele.jpg" alt="hometeam" />
  <img v-else-if="team === `FC Safira`" src="../assets/fcsafiraa.png" alt="hometeam" />
  <img v-else-if="team === `Davidskornuiten`" src="../assets/davidskornuiten.png" alt="hometeam" />
  <img v-else-if="team === `FC Nederboelare`" src="../assets/fcnederboelare.png" alt="hometeam" />
  <img v-else-if="team === `VK Buizingen`" src="../assets/vkbuizingen.jpg" alt="hometeam" />
  <img v-else-if="team === `VK De Vissers Youth`" src="../assets/vkdevissersyouth.png" alt="hometeam" />
  <img v-else-if="team === `CP Leeuw`" src="../assets/cpleeuwa.png" alt="hometeam" />
  <img v-else-if="team === `VK Noorderlicht`" src="../assets/vknoorderlichtb.png" alt="hometeam" />
  <img v-else-if="team === `Jungle Boys`" src="../assets/jungleboys.png" alt="hometeam" />
  <img v-else-if="team === `VC Bleuken Langevelde`" src="../assets/vcbleukenlangeveldea.png" alt="hometeam" />
  <img v-else-if="team === `VK Opel Boys`" src="../assets/vkopelboys.png" alt="hometeam" />
  <img v-else-if="team === `FC Patron`" src="../assets/fcpatron.png" alt="hometeam" />
  <img v-else-if="team === `FC 't Kasteeltje`" src="../assets/fckasteeltje.png" alt="hometeam" />
  <img v-else-if="team === `VK Eeksken`" src="../assets/vkeeksken.jpg" alt="hometeam" />
  <img v-else-if="team === `Sporting Affligem`" src="../assets/sportingaffligem.png" alt="hometeam" />
  <img v-else-if="team === `VK De Vissers`" src="../assets/vkdevissers.png" alt="hometeam" />
  <img v-else-if="team === `VK De Zwaanzers`" src="../assets/vkdezwaanzers.png" alt="hometeam" />
  <img v-else-if="team === `Vc Houtem City`" src="../assets/vchoutemcity.png" alt="hometeam" />

  <img v-else src="../assets/no_logo.png" alt="hometeam" />
</template>

<script>
export default {
  name: "ImageMapper",
  props: {
    team: String,
  },
};
</script>

<style scoped>
img {
  margin-left: 10px;
  margin-right: 10px;
  width: 25px;
  height: 25px;
}
</style>
