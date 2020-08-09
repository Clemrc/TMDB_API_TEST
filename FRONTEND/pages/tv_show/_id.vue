<template>
  <div>
    <div class="content">
      <div class="backdrop_path">
        <img
          :src="`https://image.tmdb.org/t/p/original` + serie.backdrop_path"
        />
      </div>
      <div class="details">
        <h1>{{ serie.original_name }}</h1>
        <p>{{ serie.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'nohero',
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('series/getSerieDetail', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to get serie #' + params.id
      })
    }
  },
  computed: mapState({
    serie: (state) => state.series.serie
  })
}
</script>

<style scoped>
.content {
  padding-top: 5.25rem;
  position: relative;
}

.backdrop_path {
  position: relative;
  height: 457px;
  width: 60%;
  overflow: hidden;
}

img {
  position: absolute;
}

.details {
  position: absolute;
  top: 0;
}
</style>
