/* eslint-disable prettier/prettier */
<template>
  <div>
    <oeuvresCard
      v-for="oeuvre in oeuvres"
      :key="oeuvre.id"
      :oeuvre="oeuvre"
    ></oeuvresCard>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import oeuvresCard from '@/components/oeuvresCard'
export default {
  components: {
    oeuvresCard
  },
  computed: mapState({
    oeuvres: (state) => state.oeuvres.oeuvres
  })
}
</script>

<style></style>
