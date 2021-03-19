<template>
  <h1>Home component</h1>
  <p>Do I show up?</p>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      console.log("I made it");
    });
  },
};
</script>

<style></style>
