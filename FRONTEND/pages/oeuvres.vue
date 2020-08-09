<template>
  <div>
    <oeuvresContainer></oeuvresContainer>
  </div>
</template>

<script>
import oeuvresContainer from '@/components/oeuvresContainer'
export default {
  transition: 'slide-fade',
  components: {
    oeuvresContainer
  },
  data() {
    return {
      title: 'Oeuvres',
      subtitle: 'Liste des oeuvres '
    }
  },
  mounted() {
    this.$store.dispatch('oeuvres/getOeuvres')
    this.$store.dispatch('title/setTitle', this.title)
    this.$store.dispatch('title/setSubTitle', this.subtitle)
  }
}
</script>

<style></style>
