<template>
  <div>
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
  transition: 'slide-fade',
  data() {
    return {
      title: 'Films',
      subtitle: `Liste des derniers films sorties`
    }
  },
  mounted() {
    this.$store.dispatch('title/setTitle', this.title)
    this.$store.dispatch('title/setSubTitle', this.subtitle)
  }
}
</script>

<style></style>
