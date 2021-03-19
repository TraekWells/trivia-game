<template>
  <transition name="component-fade" mode="out-in">
    <component :is="currentComponent"></component>
  </transition>
</template>

<script>
import Home from "@/components/Home";
import Question from "@/components/Question";
import { shallowRef } from "@vue/reactivity";

export default {
  name: "App",
  components: { Home, Question },
  setup() {
    const currentComponent = shallowRef(Home);

    return { currentComponent };
  },
};
</script>

<style lang="scss">
html {
  background-color: var(--light-gray);
}
</style>
