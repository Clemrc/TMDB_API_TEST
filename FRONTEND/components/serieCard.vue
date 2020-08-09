<template>
  <nuxt-link :to="'/tv_show/' + serie.id">
    <div class="moviecard">
      <img :src="`https://image.tmdb.org/t/p/original` + serie.poster_path" />
      <p>{{ serie.original_name }}</p>
      <p>{{ serie.overview }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    serie: Object
  }
}
</script>

<style scoped>
.moviecard {
  min-height: 10px;
  min-width: 400px;
  max-width: 600px;
  overflow: scroll;
  margin: 0 10px;
  width: fit-content;
  padding: 10px;
  margin: 10px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  transition: 0.2s;
  border-radius: 5px;
}

img {
  width: 100px;
  min-height: 147px;
  background-color: silver;
}

p {
  margin-left: 10px;
}

.moviecard:hover {
  box-shadow: 0px 0px 8px black;
  transition: 0.2s;
}

.content p:not(:last-child) {
  margin: 0;
}
</style>
