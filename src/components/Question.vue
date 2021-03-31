<template>
  <div class="question">
    <h1>Question Component</h1>
    <p>{{ question.question }}</p>
    <p>{{ question.correctAnswer }}</p>
    <a
      v-for="answer in question.incorrectAnswers"
      :key="answer"
      @click="submitAnswer"
      >{{ answer }}</a
    >
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
/* Notes:

This component will take a 'question' as a prop which will have the question, correct answer and incorrect answers. When the user selects an answer, this component will pass whether that selection was correct or not as a custom event to the App.vue component where it will keep track of the score.

*/
export default {
  props: {
    question: Object,
  },
  setup(props, { emit }) {
    const answers = ref([]);

    const submitAnswer = (e) => {
      emit("submitAnswer", e.target.innerText);
    };

    return { answers, submitAnswer };
  },
};
</script>

<style></style>
