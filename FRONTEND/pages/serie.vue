<template>
  <div>
    <p>SERIE</p>
    <div class="field">
      <div class="control">
        <form name="movie_name" @submit.prevent="searchSerie">
          <input
            id="serie_search"
            v-model="serie_search"
            type="text"
            name="serie_search"
            class="input"
            placeholder="search"
          />
        </form>
        <button class="button is-link" @click="searchSerie">Submit</button>
      </div>
    </div>
    <serieContainer class="serie-container"></serieContainer>
  </div>
</template>

<script>
import serieContainer from '@/components/serieContainer'
export default {
  transition: 'slide-fade',
  components: {
    serieContainer
  },
  data() {
    return {
      serie_search: '',
      title: 'Series',
      subtitle: 'Liste des dernières series sorties'
    }
  },
  mounted() {
    this.$store.dispatch('title/setTitle', this.title)
    this.$store.dispatch('title/setSubTitle', this.subtitle)
  },
  methods: {
    searchSerie() {
      this.$store.dispatch('series/searchSeries', this.serie_search)
    }
  }
}
</script>

<style>
.serie-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-grow: 2;
  overflow: auto;
  padding-left: 10px;
}
</style>
