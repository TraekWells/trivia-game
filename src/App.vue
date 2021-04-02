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
      :question="questions[currentIndex]"
      @submitAnswer="nextQuestion"
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
    let currentIndex = ref(0);

    const getStarted = () => {
      currentComponent.value = SelectCategories;
    };

    const listQuestions = (payload) => {
      questions.value = payload;
      currentComponent.value = Question;
    };

    const nextQuestion = (payload) => {
      console.log(payload);
      currentIndex.value++;
    };

    return {
      currentComponent,
      getStarted,
      questions,
      listQuestions,
      nextQuestion,
      currentIndex,
    };
  },
};
</script>

<style lang="scss"></style>
