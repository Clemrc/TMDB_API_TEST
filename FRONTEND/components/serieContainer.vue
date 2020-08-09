<template>
  <div>
    <serieCard
      v-for="serie in series"
      :key="serie.id"
      class="serie"
      :serie="serie"
    ></serieCard>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import serieCard from '@/components/serieCard'
export default {
  components: {
    serieCard
  },
  computed: mapState({
    series: (state) => state.series.series.results
  })
}
</script>

<style></style>
