<template>
  <div class="select-categories">
    <h1>Select Categories</h1>
    <p>I made it</p>
    <ul>
      <li v-for="question in questions" :key="question">
        {{ question.question }}
      </li>
    </ul>
    <button @click="startTrivia">Start Trivia</button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const categories = ref([]);
    const questions = ref([]);
    const startTrivia = async () => {
      const api = `https://trivia.willfry.co.uk/api/questions?limit=20`;
      await fetch(api)
        .then((res) => res.json())
        .then((data) => {
          questions.value = data;
        });
      console.log(questions.value);
    };

    return { categories, startTrivia, questions };
  },
};
</script>

<style></style>
