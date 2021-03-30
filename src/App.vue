<template>
  <!-- <transition name="component-fade" mode="out-in"> -->
  <template v-if="currentComponent !== 'Question'">
    <component
      :is="currentComponent"
      @getStarted="getStarted"
      @categoryQuestions="listQuestions"
    >
    </component>
  </template>
  <template v-else>
    <Question
      v-for="(question, index) in questions"
      :key="index"
      v-bind="question"
    />
  </template>
  <!-- </transition> -->
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

    const renderQuestions = () => {
      console.log("i am a question");
    };

    // const currentProperties = computed(() => {
    //   if (currentComponent === "Home") {
    //     return {
    //       getStared: "getStarted",
    //     };
    //   }
    //   if (currentComponent === "Question") {
    //     return {
    //       question: "question[0]",
    //     };
    //   }
    // });

    return {
      currentComponent,
      getStarted,
      questions,
      listQuestions,
      renderQuestions,
    };
  },
};
</script>

<style lang="scss">
html {
  background-color: var(--light-gray);
}
</style>
