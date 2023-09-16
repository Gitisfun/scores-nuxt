<template>
  <div :style="getCssVars">
    <div class="container">
      <div v-if="getKitStyle === 0" class="container__inner">
        <div class="football-kit football-kit--stripes">
          <div class="football-kit__shirt"></div>
          <div class="football-kit__sleeve football-kit__sleeve--left"></div>
          <div class="football-kit__sleeve football-kit__sleeve--right"></div>
          <div class="football-kit__waist"></div>
          <div class="football-kit__shorts football-kit__shorts--left"></div>
          <div class="football-kit__shorts football-kit__shorts--right"></div>
        </div>
      </div>
      <div v-if="getKitStyle === 1" class="container__inner">
        <div class="football-kit football-kit--hoops">
          <div class="football-kit__shirt"></div>
          <div class="football-kit__sleeve football-kit__sleeve--left"></div>
          <div class="football-kit__sleeve football-kit__sleeve--right"></div>
          <div class="football-kit__waist"></div>
          <div class="football-kit__shorts football-kit__shorts--left"></div>
          <div class="football-kit__shorts football-kit__shorts--right"></div>
        </div>
      </div>
      <div v-if="getKitStyle === 2" class="container__inner">
        <div class="football-kit">
          <div class="football-kit__shirt"></div>
          <div class="football-kit__sleeve football-kit__sleeve--left"></div>
          <div class="football-kit__sleeve football-kit__sleeve--right"></div>
          <div class="football-kit__waist"></div>
          <div class="football-kit__shorts football-kit__shorts--left"></div>
          <div class="football-kit__shorts football-kit__shorts--right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Kit from "~~/logic/kit.js";
import { useScoresStore } from "~~/store/scores";

const store = useScoresStore();

const { isHome } = defineProps({
  isHome: String,
});

const getCssVars = computed(() => {
  try {
    let kit;
    if (isHome === "home") {
      kit = store.kit.home;
    } else {
      kit = store.kit.away;
    }
    if (kit) {
      if (kit.shirt.colors.length > 1 && kit.pants.colors.length > 1) {
        return {
          "--bg-shirt-primary-color": kit.shirt.colors[0],
          "--bg-shirt-secundary-color": kit.shirt.colors[1],
          "--bg-pants-primary-color": kit.pants.colors[0],
          "--bg-pants-secundary-color": kit.pants.colors[1],
        };
      } else if (kit.shirt.colors.length > 1 && kit.pants.colors.length <= 1) {
        return {
          "--bg-shirt-primary-color": kit.shirt.colors[0],
          "--bg-shirt-secundary-color": kit.shirt.colors[1],
          "--bg-pants-primary-color": kit.pants.colors[0],
          "--bg-pants-secundary-color": kit.pants.colors[0],
        };
      } else if (kit.shirt.colors.length <= 1 && kit.pants.colors.length > 1) {
        return {
          "--bg-shirt-primary-color": kit.shirt.colors[0],
          "--bg-shirt-secundary-color": kit.shirt.colors[0],
          "--bg-pants-primary-color": kit.pants.colors[0],
          "--bg-pants-secundary-color": kit.pants.colors[1],
        };
      } else if (kit.shirt.colors.length <= 1 && kit.pants.colors.length <= 1) {
        return {
          "--bg-shirt-primary-color": kit.shirt.colors[0],
          "--bg-shirt-secundary-color": kit.shirt.colors[0],
          "--bg-pants-primary-color": kit.pants.colors[0],
          "--bg-pants-secundary-color": kit.pants.colors[0],
        };
      }
      return {
        "--bg-shirt-primary-color": kit.shirt.colors[0],
        "--bg-shirt-secundary-color": kit.shirt.colors[0],
        "--bg-pants-primary-color": kit.pants.colors[0],
        "--bg-pants-secundary-color": kit.pants.colors[0],
      };
    }
    return {
      "--bg-shirt-primary-color": "black",
      "--bg-shirt-secundary-color": "#f5f6fa",
      "--bg-pants-primary-color": "#f5f6fa",
      "--bg-pants-secundary-color": "black",
    };
  } catch (error) {
    return null;
  }
});

const getKitStyle = computed(() => {
  try {
    let kit;
    if (isHome === "home") {
      kit = store.kit.home.shirt;
    } else {
      kit = store.kit.away.shirt;
    }
    if (kit.style === Kit.SINGLE) {
      return 2;
    } else if (kit.style === Kit.STRIPED) {
      return 0;
    } else if (kit.style === Kit.MULTI) {
      return 1;
    } else {
      return 2;
    }
  } catch (error) {
    return null;
  }
});
</script>

<style scoped>
.football-kit {
  margin: auto;
  position: relative;
  width: 44px;
}
.football-kit__shirt {
  position: relative;
  z-index: 1;
  height: 75px;
  background: var(--bg-shirt-primary-color);
  clip-path: polygon(30% 0, 50% 10%, 70% 0, 100% 0, 100% 100%, 0 100%, 0 0);
}
.football-kit--stripes .football-kit__shirt {
  background: repeating-linear-gradient(to right, var(--bg-shirt-primary-color), var(--bg-shirt-primary-color) 5px, var(--bg-shirt-secundary-color) 5px, var(--bg-shirt-secundary-color) 10px);
}
.football-kit--hoops .football-kit__shirt {
  background: linear-gradient(-90deg, var(--bg-shirt-primary-color), var(--bg-shirt-primary-color) 49%, var(--bg-shirt-secundary-color) 50%);
}
.football-kit__sleeve {
  width: 20px;
  height: 30px;
  background: var(--bg-shirt-primary-color);
  position: absolute;
  top: 0;
}
.football-kit--stripes .football-kit__sleeve {
  background: repeating-linear-gradient(to bottom, var(--bg-shirt-primary-color), var(--bg-shirt-primary-color) 5px, var(--bg-shirt-secundary-color) 5px, var(--bg-shirt-secundary-color) 10px);
}
.football-kit--hoops .football-kit__sleeve--left {
  background-color: var(--bg-shirt-secundary-color);
}
.football-kit__sleeve--left {
  left: 0;
  transform-origin: 0 0;
  transform: rotate(45deg);
}
.football-kit__sleeve--right {
  right: 0;
  transform-origin: 100% 0;
  transform: rotate(-45deg);
}
.football-kit__waist {
  background: var(--bg-pants-primary-color);
  width: 44px;
  height: 15px;
}
.football-kit__shorts {
  display: inline-block;
  width: 22px;
  height: 20px;
  background: var(--bg-pants-primary-color);
  transform-origin: 0 0;
}
.football-kit__shorts--left {
  transform: skew(-10deg);
}
.football-kit__shorts--right {
  transform: skew(10deg);
}
.container__inner {
  display: inline-block;
  width: 100%;
}
</style>
