<template>
  <component :is="currentComponent"></component>
  <button @click="changeComponent">Change Components</button>
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

    const changeComponent = () => {
      currentComponent.value = Question;
    };
    currentComponent.value = Home;

    return { changeComponent, currentComponent };
  },
};
</script>

<style lang="scss"></style>
