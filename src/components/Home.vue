<template>
  <div class="home">
    <h1>Welcome to the Trivia Game</h1>
    <p>Which I'll name later</p>
    <button @click="getStarted">Get Started</button>
  </div>
</template>

<script>
export default {
  setup(props, { emit }) {
    const getStarted = () => {
      emit("getStarted");
    };

    return { getStarted };
  },
};
</script>

<style></style>
