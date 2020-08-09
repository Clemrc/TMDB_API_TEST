<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          {{ title }}
        </h1>
        <h2 class="subtitle">
          {{ subtitle }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    title: (state) => state.title.title,
    subtitle: (state) => state.title.subtitle
  })
}
</script>

<style scoped>
.hero {
  transition: 0.2s;
}
</style>
