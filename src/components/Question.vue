<template>
  <div class="question">
    <h1>{{ question.question }}</h1>
    <h3>{{ question.correctAnswer }}</h3>
  </div>
</template>

<script>
/* Notes: 

This component will take a 'question' as a prop which will have the question, correct answer and incorrect answers. When the user selects an answer, this component will pass whether that selection was correct or not as a custom event to the App.vue component where it will keep track of the score.

*/
export default {
  props: {
    question: {
      type: Object,
    },
  },
  setup() {},
};
</script>

<style></style>
