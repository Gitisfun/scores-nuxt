<template>
  <img v-if="team === 'ZSV Overijse'" src="../assets/zsvoverijse.png" alt="ZSV Overijse" title="ZSV Overijse" width="50" height="50" loading="lazy" />
  <img v-else-if="team.trim() === 'Dynamo Wijndaal'" src="../assets/dynamowijndaal.png" alt="Dynamo Wijndaal" title="Dynamo Wijndaal" width="50" height="50" loading="lazy" />
  <img v-else-if="team.trim() === 'FC Petit St Guidon'" src="../assets/fcpetitsaintguidon2.png" alt="FC Petit St Guidon" title="FC Petit St Guidon" width="50" height="50" loading="lazy" />
  <img v-else-if="team.trim() === 'FC Caféboontjes A' || team.trim() === 'FC Caféboontjes B'" src="../assets/fccafeboontjes.png" alt="FC Caféboontjes A" title="FC Caféboontjes A" width="50" height="50" loading="lazy" />
  <img v-else-if="team.trim() === 'FC Depot'" src="../assets/fcdepot.png" alt="FC Depot" title="FC Depot" width="50" height="50" loading="lazy" />
  <img v-else-if="team.trim() === 'FC De Leeuwerik'" src="../assets/fcdeleeuwerik.png" alt="FC De Leeuwerik" title="FC De Leeuwerik" width="50" height="50" loading="lazy" />
  <img v-else-if="team.trim() === 'FC Dogs United'" src="../assets/fcdogsunited.png" alt="FC Dogs United" title="FC Dogs United" width="50" height="50" loading="lazy" />
  <img v-else-if="team.trim() === 'VK De Sjoeters A' || team.trim() === 'VK De Sjoeters B' || team.trim() === 'VK De Sjoeters YB'" src="../assets/vkdesjoeters.png" alt="VK De Sjoeters" title="VK De Sjoeters" width="50" height="50" loading="lazy" />
  <img v-else-if="team.trim() === 'Sparta den Bos A' || team.trim() === 'Sparta den Bos B'" src="../assets/spartadenbos2.png" alt="Sparta den Bos" title="Sparta den Bos" width="50" height="50" loading="lazy" />
  <img v-else-if="team === 'VK Dilbeek'" src="../assets/vkdilbeek.png" alt="VK Dilbeek" title="VK Dilbeek" width="50" height="50" loading="lazy" />
  <img v-else-if="team === 'V.O.K. Jezus Eik B' || team === 'V.O.K. Jezus Eik A' || team === 'V.O.K. Jezus Eik C'" src="../assets/vokjezuseik2.png" alt="V.O.K. Jezus Eik" title="V.O.K. Jezus Eik" width="50" height="50" loading="lazy" />
  <img v-else-if="team === 'Sporting Oppem'" src="../assets/sportingoppem.png" alt="Sporting Oppem" title="Sporting Oppem" width="50" height="50" loading="lazy" />
  <img v-else-if="team === 'SC Duvelshoek'" src="../assets/duvelshoek.png" alt="SC Duvelshoek" title="SC Duvelshoek" width="50" height="50" loading="lazy" />
  <img v-else-if="team === 'Peutie 1801'" src="../assets/peutie.png" alt="Peutie 1801" title="Peutie 1801" width="50" height="50" loading="lazy" />
  <img v-else-if="team === 'Lokomotiv Centrum A' || team === 'Lokomotiv Centrum B'" src="../assets/lokomotivcentrumnew.png" alt="Lokomotiv Centrum" title="Lokomotiv Centrum" width="50" height="50" loading="lazy" />
  <img v-else-if="team === 'K. SP. Tange A' || team === 'K.sp.Tange B'" src="../assets/ksptangeb.png" alt="K. SP. Tange" title="K. SP. Tange" width="50" height="50" loading="lazy" />
  <img v-else-if="team === 'Hangover 96'" src="../assets/hangover96.png" alt="Hangover 96" title="Hangover 96" width="50" height="50" loading="lazy" />
  <img v-else-if="team === 'FC Borneo'" src="../assets/fcborneo.png" alt="FC Borneo" title="FC Borneo" width="50" height="50" loading="lazy" />
  <img v-else-if="team === 'Eendracht Vilvoorde'" src="../assets/eendrachtvilvoorde.png" alt="Eendracht Vilvoorde" title="Eendracht Vilvoorde" width="50" height="50" loading="lazy" />
  <img v-else-if="team === 'Bobo A' || team === 'Bobo B'" src="../assets/bobo.png" alt="Bobo" title="Bobo" width="50" height="50" loading="lazy" />
  <img v-else-if="team === 'Nickyspurters'" src="../assets/nickyspurters.png" alt="Nickyspurters" title="Nickyspurters" width="50" height="50" loading="lazy" />
  <img v-else-if="team === 'FC In Onzen Tijd'" src="../assets/fcinonzentijd.png" alt="FC In Onzen Tijd" title="FC In Onzen Tijd" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `Simca Boys`" src="../assets/simcaboys.png" alt="Simca Boys" title="Simca Boys" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `VC 't Vraagteken`" src="../assets/vraagteken.png" alt="VC 't Vraagteken" title="VC 't Vraagteken" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `SV Tijl`" src="../assets/svtijla.png" alt="SV Tijl" title="SV Tijl" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `FC Ons Huis`" src="../assets/fconshuis.png" alt="FC Ons Huis" title="FC Ons Huis" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `Flora Likert` || team === `Flora Likert 2`" src="../assets/fcflora.png" alt="Flora Likert" title="Flora Likert" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `Siccard Boys`" src="../assets/siccardboysa.png" alt="Siccard Boys" title="Siccard Boys" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `Stinne Boys`" src="../assets/stinneboys.png" alt="Stinne Boys" title="Stinne Boys" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `FC Cité`" src="../assets/fccite.png" alt="FC Cité" title="FC Cité" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `Hoke`" src="../assets/hoke.png" alt="Hoke" title="Hoke" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `Cristal Boys A` || team === `Cristal Boys B` || team === `Cristal Boys C`" src="../assets/cristalboysa.png" alt="Cristal Boys" title="Cristal Boys" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `VK 't Gareel A` || team === `VK 't Gareel B`" src="../assets/vkgareel.jpg" alt="VK 't Gareel" title="VK 't Gareel" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `RC Lamme Guiche`" src="../assets/rclammeguichea.png" alt="RC Lamme Guiche" title="RC Lamme Guiche" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `VK Klein Leeuw`" src="../assets/vkkleinleeuwa.png" alt="VK Klein Leeuw" title="VK Klein Leeuw" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `Nissan Essenbeek A` || team === `Nissan Essenbeek B`" src="../assets/fcnissanessenbeek.png" alt="Nissan Essenbeek" title="Nissan Essenbeek" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `Kv SKO Vollezele A` || team === `Kv SKO Vollezele B`" src="../assets/kvskovollezele.jpg" alt="Kv SKO Vollezele" title="Kv SKO Vollezele" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `FC Safira`" src="../assets/fcsafiraa.png" alt="FC Safira" title="FC Safira" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `Davidskornuiten`" src="../assets/davidskornuiten.png" alt="Davidskornuiten" title="Davidskornuiten" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `FC Nederboelare`" src="../assets/fcnederboelare.png" alt="FC Nederboelare" title="FC Nederboelare" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `VK Buizingen`" src="../assets/vkbuizingen.jpg" alt="VK Buizingen" title="VK Buizingen" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `VK De Vissers Youth`" src="../assets/vkdevissersyouth.png" alt="VK De Vissers Youth" title="VK De Vissers Youth" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `CP Leeuw`" src="../assets/cpleeuwa.png" alt="CP Leeuw" title="CP Leeuw" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `VK Noorderlicht`" src="../assets/vknoorderlichtb.png" alt="VK Noorderlicht" title="VK Noorderlicht" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `Jungle Boys`" src="../assets/jungleboys.png" alt="Jungle Boys" title="Jungle Boys" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `VC Bleuken Langevelde`" src="../assets/vcbleukenlangeveldea.png" alt="VC Bleuken Langevelde" title="VC Bleuken Langevelde" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `VK Opel Boys`" src="../assets/vkopelboys.png" alt="VK Opel Boys" title="VK Opel Boys" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `FC Patron`" src="../assets/fcpatron.png" alt="FC Patron" title="FC Patron" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `FC 't Kasteeltje`" src="../assets/fckasteeltje.png" alt="FC 't Kasteeltje" title="FC 't Kasteeltje" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `VK Eeksken`" src="../assets/vkeeksken.jpg" alt="VK Eeksken" title="VK Eeksken" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `Sporting Affligem`" src="../assets/sportingaffligem.png" alt="Sporting Affligem" title="Sporting Affligem" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `VK De Vissers`" src="../assets/vkdevissers.png" alt="VK De Vissers" title="VK De Vissers" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `VK De Zwaanzers`" src="../assets/vkdezwaanzers.png" alt="VK De Zwaanzers" title="VK De Zwaanzers" width="50" height="50" loading="lazy" />
  <img v-else-if="team === `Vc Houtem City`" src="../assets/vchoutemcity.png" alt="Vc Houtem City" title="Vc Houtem City" width="50" height="50" loading="lazy" />
  <img v-else src="../assets/no_logo.png" alt="hometeam" title="hometeam" width="50" height="50" loading="lazy" />
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
  width: 50px;
  height: 50px;
  display: block;
  margin: auto;
}
</style>
