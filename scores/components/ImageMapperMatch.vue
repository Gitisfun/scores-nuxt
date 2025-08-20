<template>
  <img v-if="team === 'ZSV Overijse'" src="../assets/zsvoverijse.png" alt="ZSV Overijse" title="ZSV Overijse" width="25" height="25" loading="lazy" />
  <img v-else-if="team.trim() === 'Dynamo Wijndaal'" src="../assets/dynamowijndaal.png" alt="Dynamo Wijndaal" title="Dynamo Wijndaal" width="25" height="25" loading="lazy" />
  <img v-else-if="team.trim() === 'FC Petit St Guidon'" src="../assets/fcpetitsaintguidon2.png" alt="FC Petit St Guidon" title="FC Petit St Guidon" width="25" height="25" loading="lazy" />
  <img v-else-if="team.trim() === 'FC Caféboontjes A' || team.trim() === 'FC Caféboontjes B'" src="../assets/fccafeboontjes.png" alt="FC Caféboontjes A" title="FC Caféboontjes A" width="25" height="25" loading="lazy" />
  <img v-else-if="team.trim() === 'FC Depot'" src="../assets/fcdepot.png" alt="FC Depot" title="FC Depot" width="25" height="25" loading="lazy" />
  <img v-else-if="team.trim() === 'FC De Leeuwerik'" src="../assets/fcdeleeuwerik.png" alt="FC De Leeuwerik" title="FC De Leeuwerik" width="25" height="25" loading="lazy" />
  <img v-else-if="team.trim() === 'FC Dogs United'" src="../assets/fcdogsunited.png" alt="FC Dogs United" title="FC Dogs United" width="25" height="25" loading="lazy" />
  <img v-else-if="team.trim() === 'VK De Sjoeters A' || team.trim() === 'VK De Sjoeters B' || team.trim() === 'VK De Sjoeters YB'" src="../assets/vkdesjoeters.png" alt="VK De Sjoeters" title="VK De Sjoeters" width="25" height="25" loading="lazy" />
  <img v-else-if="team.trim() === 'Sparta den Bos A' || team.trim() === 'Sparta den Bos B'" src="../assets/spartadenbos2.png" alt="Sparta den Bos" title="Sparta den Bos" width="25" height="25" loading="lazy" />
  <img v-else-if="team.trim() === 'FC Flora Likert 1' || team.trim() === 'FC Flora Likert 2'" src="../assets/flora-likert.png" alt="FC Flora Likert" title="FC Flora Likert" width="25" height="25" loading="lazy" />
  <img v-else-if="team === 'VK Dilbeek'" src="../assets/vkdilbeek.png" alt="VK Dilbeek" title="VK Dilbeek" width="25" height="25" loading="lazy" />
  <img v-else-if="team === 'V.O.K. Jezus Eik B' || team === 'V.O.K. Jezus Eik A' || team === 'V.O.K. Jezus Eik C'" src="../assets/vokjezuseik2.png" alt="V.O.K. Jezus Eik" title="V.O.K. Jezus Eik" width="25" height="25" loading="lazy" />
  <img v-else-if="team === 'Sporting Oppem'" src="../assets/sportingoppem.png" alt="Sporting Oppem" title="Sporting Oppem" width="25" height="25" loading="lazy" />
  <img v-else-if="team === 'SC Duvelshoek'" src="../assets/duvelshoek.png" alt="SC Duvelshoek" title="SC Duvelshoek" width="25" height="25" loading="lazy" />
  <img v-else-if="team === 'Peutie 1801'" src="../assets/peutie.png" alt="Peutie 1801" title="Peutie 1801" width="25" height="25" loading="lazy" />
  <img v-else-if="team === 'Lokomotiv Centrum A' || team === 'Lokomotiv Centrum B'" src="../assets/lokomotivcentrumnew.png" alt="Lokomotiv Centrum" title="Lokomotiv Centrum" width="25" height="25" loading="lazy" />
  <img v-else-if="team === 'K. SP. Tange A' || team === 'K.sp.Tange B'" src="../assets/ksptangeb.png" alt="K. SP. Tange" title="K. SP. Tange" width="25" height="25" loading="lazy" />
  <img v-else-if="team === 'Hangover 96'" src="../assets/hangover96.png" alt="Hangover 96" title="Hangover 96" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `VK Bouwvrienden`" src="../assets/vk_bouwvrienden.png" alt="VK Bouwvrienden" title="VK Bouwvrienden" width="25" height="25" loading="lazy" />
  <img v-else-if="team === 'FC Borneo'" src="../assets/fcborneo.png" alt="FC Borneo" title="FC Borneo" width="25" height="25" loading="lazy" />
  <img v-else-if="team === 'Eendracht Vilvoorde'" src="../assets/eendrachtvilvoorde.png" alt="Eendracht Vilvoorde" title="Eendracht Vilvoorde" width="25" height="25" loading="lazy" />
  <img v-else-if="team === 'Bobo A' || team === 'Bobo B'" src="../assets/bobo.png" alt="Bobo" title="Bobo" width="25" height="25" loading="lazy" />
  <img v-else-if="team === 'Nickyspurters'" src="../assets/nickyspurters.png" alt="Nickyspurters" title="Nickyspurters" width="25" height="25" loading="lazy" />
  <img v-else-if="team === 'FC In Onzen Tijd'" src="../assets/fcinonzentijd.png" alt="FC In Onzen Tijd" title="FC In Onzen Tijd" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `Simca Boys`" src="../assets/simcaboys.png" alt="Simca Boys" title="Simca Boys" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `VC 't Vraagteken`" src="../assets/vraagteken.png" alt="VC 't Vraagteken" title="VC 't Vraagteken" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `SV Tijl`" src="../assets/svtijla.png" alt="SV Tijl" title="SV Tijl" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `FC Ons Huis`" src="../assets/fconshuis.png" alt="FC Ons Huis" title="FC Ons Huis" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `Flora Likert` || team === `Flora Likert 2`" src="../assets/fcflora.png" alt="Flora Likert" title="Flora Likert" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `Siccard Boys`" src="../assets/siccardboysa.png" alt="Siccard Boys" title="Siccard Boys" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `Stinne Boys`" src="../assets/stinneboys.png" alt="Stinne Boys" title="Stinne Boys" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `FC Cité`" src="../assets/fccite.png" alt="FC Cité" title="FC Cité" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `Hoke`" src="../assets/hoke.png" alt="Hoke" title="Hoke" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `Cristal Boys A` || team === `Cristal Boys B` || team === `Cristal Boys C`" src="../assets/cristalboysa.png" alt="Cristal Boys" title="Cristal Boys" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `VK 't Gareel A` || team === `VK 't Gareel B`" src="../assets/vkgareel.jpg" alt="VK 't Gareel" title="VK 't Gareel" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `RC Lamme Guiche`" src="../assets/rclammeguichea.png" alt="RC Lamme Guiche" title="RC Lamme Guiche" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `VK Klein Leeuw`" src="../assets/vkkleinleeuwa.png" alt="VK Klein Leeuw" title="VK Klein Leeuw" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `Nissan Essenbeek A` || team === `Nissan Essenbeek B`" src="../assets/fcnissanessenbeek.png" alt="Nissan Essenbeek" title="Nissan Essenbeek" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `Vollezele` || team === `Kv SKO Vollezele A` || team === `Kv SKO Vollezele B`" src="../assets/kvskovollezele.jpg" alt="Kv SKO Vollezele" title="Kv SKO Vollezele" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `FC Safira`" src="../assets/fcsafiraa.png" alt="FC Safira" title="FC Safira" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `Davidskornuiten`" src="../assets/davidskornuiten.png" alt="Davidskornuiten" title="Davidskornuiten" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `FC Nederboelare`" src="../assets/fcnederboelare.png" alt="FC Nederboelare" title="FC Nederboelare" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `VK Buizingen`" src="../assets/vkbuizingen.jpg" alt="VK Buizingen" title="VK Buizingen" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `VK De Vissers Youth`" src="../assets/vkdevissersyouth.png" alt="VK De Vissers Youth" title="VK De Vissers Youth" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `CP Leeuw`" src="../assets/cpleeuwa.png" alt="CP Leeuw" title="CP Leeuw" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `VK Noorderlicht`" src="../assets/vknoorderlichtb.png" alt="VK Noorderlicht" title="VK Noorderlicht" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `Jungle Boys`" src="../assets/jungleboys.png" alt="Jungle Boys" title="Jungle Boys" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `VC Bleuken Langevelde`" src="../assets/vcbleukenlangeveldea.png" alt="VC Bleuken Langevelde" title="VC Bleuken Langevelde" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `VK Opel Boys`" src="../assets/vkopelboys.png" alt="VK Opel Boys" title="VK Opel Boys" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `FC Patron`" src="../assets/fcpatron.png" alt="FC Patron" title="FC Patron" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `FC 't Kasteeltje`" src="../assets/fckasteeltje.png" alt="FC 't Kasteeltje" title="FC 't Kasteeltje" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `VK Eeksken`" src="../assets/vkeeksken.jpg" alt="VK Eeksken" title="VK Eeksken" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `Sporting Affligem`" src="../assets/sportingaffligem.png" alt="Sporting Affligem" title="Sporting Affligem" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `VK De Vissers`" src="../assets/vkdevissers.png" alt="VK De Vissers" title="VK De Vissers" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `VK De Zwaanzers`" src="../assets/vkdezwaanzers.png" alt="VK De Zwaanzers" title="VK De Zwaanzers" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `Vc Houtem City`" src="../assets/vchoutemcity.png" alt="Vc Houtem City" title="Vc Houtem City" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `AC DE HEIDE`" src="../assets/ac-de-heide.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `AIR CONSULT`" src="../assets/air-consult.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `BACCHUS`" src="../assets/bacchus.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `BAR SALON`" src="../assets/bar-salon.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `BENNE 1980 A` || team === `BENNE 1980 B`" src="../assets/benne-1980.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `BIBAMUS`" src="../assets/bibamus.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `BRIK PELE`" src="../assets/brik-pele.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `Daltons`" src="../assets/daltons.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `DE BRUG`" src="../assets/de-brug.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `DE GAAWE LEEUW`" src="../assets/de-gaawe-leeuw.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `DE PRINCE`" src="../assets/de-prince.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `DEN 144`" src="../assets/den-144.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `DEURNESE TURNERS`" src="../assets/deurnese-turners.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `DK NIEUWMOER`" src="../assets/dk-nieuwmoer.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `DODEKA SPORT`" src="../assets/dodeka-sport.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `EINTRACHT DEURNE`" src="../assets/eintracht-deurne.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `EKEREN WINKELSTAD`" src="../assets/ekeren-winkelstad.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `AMBER` || team === `AMBER C` || team === `AMBER D` || team === `AMBER E` || team === `AMBER F` || team === `AMBER G`" src="../assets/fc-amber.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `BERNIE`" src="../assets/fc-berne.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `BLOEMSCHIKKERS`" src="../assets/fc-bloemschikkers.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `CHOSSEL SPORT`" src="../assets/fc-chossel-sport.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `DE BRUURS`" src="../assets/fc-de-bruurs.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `DE KLINKAERT`" src="../assets/fc-de-klinkaert.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `FCK'89`" src="../assets/fck89.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `FOCUS UNITED`" src="../assets/focus-united.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `HET LOO`" src="../assets/het-loo.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `J&M TOLHUIS`" src="../assets/j-m-tolhuis.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `JEE DEE`" src="../assets/jee-dee.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `KATASTROOF`" src="../assets/katastroof.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `KLOOSTERSTRAAT` || team === `KLOOSTERSTRAAT B`" src="../assets/kloosterstraat.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `-----`" src="../assets/la-pantera.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `LUNATICS`" src="../assets/lunatics.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `MATTI`" src="../assets/matti.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `MOLLY BLOOMS A` || team === `MOLLY BLOOMS B`" src="../assets/molly-blooms.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `NIEUW STABROEK`" src="../assets/nieuw-stabroek.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `NOEVEREN`" src="../assets/noeveren.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `OLYMP`" src="../assets/olymp.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `OOF`" src="../assets/oof.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `PAGODE`" src="../assets/pagode.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `PANDA`" src="../assets/panda.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `PEUCHEMISE`" src="../assets/peuchemise.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `RACING GOBI A` || team === `RACING GOBI B`" src="../assets/racing-gobi.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `REUNION MERXEM`" src="../assets/reunion-merxem.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `Royal Sporting KOT FC`" src="../assets/royal-sporting-kot-fc.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `ROYAL ZEEZICHT`" src="../assets/royal-zeezicht.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `SAVA A` || team === `SAVA B` || team === `SAVA C`" src="../assets/sava.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `SCHONENBERG`" src="../assets/schonenberg.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `ST. JOZEF`" src="../assets/sint-jozef.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `RUISBROEK` || team === `RUISBROEK NEXT`" src="../assets/sk-ruisbroek.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `SPORTING MXM`" src="../assets/sporting-mxm.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `SPORTING NEERLAND`" src="../assets/sporting-neerland.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `SPORTING OLYMPIA`" src="../assets/sporting-olympia.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `SWINCHESTER UNITED`" src="../assets/swinchester.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `TC BRABO`" src="../assets/tc-brabo.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `THE D-C BOYS`" src="../assets/the-d-c-boys.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `V.B.`" src="../assets/v-b.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `VIDAM`" src="../assets/vidam.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `VINO`" src="../assets/vino.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `VOORCED`" src="../assets/voorced.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else-if="team === `WATERTOREN S.K.`" src="../assets/watertoren-sk.png" :alt="team" :title="team" width="25" height="25" loading="lazy" />
  <img v-else src="../assets/no_logo.png" alt="hometeam" title="hometeam" width="25" height="25" loading="lazy" />
</template>

<script>
export default {
  name: 'ImageMapperMatch',
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
