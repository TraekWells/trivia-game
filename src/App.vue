<template>
  <transition name="component-fade" mode="out-in">
    <component :is="currentComponent" @getStarted="getStarted"></component>
  </transition>
</template>

<script>
/* Notes: 

This component will recieve questions from the 'Select Categories' component and will pass each question as a prop to the 'Questions' component.

*/
import Home from "@/components/Home";
import Question from "@/components/Question";
import SelectCategories from "@/components/SelectCategories";
import { ref, shallowRef } from "@vue/reactivity";

export default {
  name: "App",
  components: { Home, Question, SelectCategories },
  setup() {
    const currentComponent = shallowRef(Home);
    const questions = ref([]);

    const getStarted = () => {
      currentComponent.value = SelectCategories;
    };

    return { currentComponent, getStarted, questions };
  },
};
</script>

<style lang="scss">
html {
  background-color: var(--light-gray);
}
</style>
