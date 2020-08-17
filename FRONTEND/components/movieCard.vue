<template>
  <nuxt-link :to="'/movie/' + movie.id">
    <div class="moviecard">
      <img :src="`https://image.tmdb.org/t/p/original` + movie.poster_path" />
      <div class="description">
        <p class="movie-title">{{ movie.original_title }}</p>
        <p class="movie-description">{{ movie.overview }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    movie: Object
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

.description {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 10px;
  color: #000000;
}

.movie-title {
  font-size: 1.5rem;
}

.movie-description {
  font-size: 1rem;
  height: 100px;
  overflow: hidden;
}

img {
  width: 100px;
  min-height: 147px;
  background-color: silver;
}

.moviecard:hover {
  box-shadow: 0px 0px 8px black;
  transition: 0.2s;
}

/* .content p:not(:last-child) {
  margin: 0;
} */
</style>
