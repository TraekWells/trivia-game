<template>
  <div class="select-categories">
    <h1>Select Categories</h1>
    <p>I made it</p>
    <button @click="startTrivia">Start Trivia</button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup(props, { emit }) {
    const categories = ref([]);
    const questions = ref([]);
    const startTrivia = async () => {
      const api = `https://trivia.willfry.co.uk/api/questions?limit=20`;
      await fetch(api)
        .then((res) => res.json())
        .then((data) => {
          questions.value = data;
          emit("categoryQuestions", questions.value);
        });
    };

    return { categories, startTrivia, questions };
  },
};
</script>

<style></style>
