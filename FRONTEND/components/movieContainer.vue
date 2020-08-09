/* eslint-disable prettier/prettier */
<template>
  <div>
    <movieCard
      v-for="movie in movies"
      :key="movie.id"
      class="movie"
      :movie="movie"
    ></movieCard>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import movieCard from '@/components/movieCard'
export default {
  components: {
    movieCard
  },
  computed: mapState({
    movies: (state) => state.movies.movies.results
  })
}
</script>

<style></style>
