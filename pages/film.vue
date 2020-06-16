<template>
  <div class="main">
    <div class="content">
      <no-ssr>
        <h2 class="subtitle">film Random</h2>
        <button @click="generateRandomMovie">Generate</button>
      </no-ssr>

      <movieContainer></movieContainer>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'slide-fade'
}
</script>

<style></style>
