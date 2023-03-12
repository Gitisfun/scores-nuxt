<template>
  <div class="address-container">
    <div class="address-item-one">
      <div class="address-title">Adres</div>
      <div>
        {{ address }}
      </div>
    </div>
    <IconWithHover @iconClick="copyTextToClipboard" icon="bx:copy" width="25" height="25" />
  </div>
</template>

<script>
import { copyToClipBoard } from "~~/logic/util.js";
import IconWithHover from "./IconWithHover.vue";

export default {
  name: "Address",
  props: { address: String },
  components: { /*Icon,*/ IconWithHover },
  data() {
    return {
      color: "black",
    };
  },
  methods: {
    copyTextToClipboard() {
      copyToClipBoard(this.address);
    },
  },
};
</script>

<style scoped>
.address-container {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  margin: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.address-title {
  font-weight: bold;
}
.address-item-one {
  flex: 4;
  /* background-color: aqua; */
}
.address-item-two {
  flex: 1;
  /* background-color: salmon; */
  /* align-content: flex-start; */
  /* display: flex; */
  /* align-self: stretch; */
  /* margin-left: auto; */
}
.address-item-copy {
  /* align-self: flex-end; */
  /* background-color: aquamarine; */
}
</style>
