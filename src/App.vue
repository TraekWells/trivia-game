<template>
  <template v-if="questions.length === 0">
    <component
      :is="currentComponent"
      @getStarted="getStarted"
      @categoryQuestions="listQuestions"
    >
    </component>
  </template>
  <template v-else>
    <Question
      v-for="(question, index) in questions[index]"
      :key="index"
      :question="question"
      @submitAnswer="updateResults"
    />
  </template>
</template>

<script>
/* Notes:
This component will receive questions from the 'Select Categories' component and will pass each question as a prop to the 'Questions' component.
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

    const listQuestions = (payload) => {
      questions.value = payload;
      currentComponent.value = Question;
    };

    const updateResults = (payload) => {
      console.log(payload);
    };

    return {
      currentComponent,
      getStarted,
      questions,
      listQuestions,
      updateResults,
    };
  },
};
</script>

<style lang="scss">
html {
  background-color: var(--light-gray);
}
</style>
