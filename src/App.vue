<template>
  <transition name="component-fade" mode="out-in">
    <component :is="currentComponent" @getStarted="getStarted"></component>
  </transition>
</template>

<script>
import Home from "@/components/Home";
import Question from "@/components/Question";
import SelectCategories from "@/components/SelectCategories";
import { shallowRef } from "@vue/reactivity";

export default {
  name: "App",
  components: { Home, Question, SelectCategories },
  setup() {
    const currentComponent = shallowRef(Home);

    const getStarted = () => {
      currentComponent.value = SelectCategories;
    };

    return { currentComponent, getStarted };
  },
};
</script>

<style lang="scss">
html {
  background-color: var(--light-gray);
}
</style>
