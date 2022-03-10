<template>
  <div class="hello">

      <div v-for='result in results' :key='result.id'>
        <!--    <img v-bind:src="'http://image.tmdb.org/t/p/w500/' +    result.poster_path" width='100px'> -->
        <img v-bind:src="urlPictureMovieDb + result.backdrop_path">
        {{ result.overview }}
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Popular',
  data() {
    return {
      results : '',
      urlPictureMovieDb: "https://image.tmdb.org/t/p/w500"
    }
  },
  props: {
    msg: String
  },
  mounted() {
    axios
    // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
    .get('https://api.themoviedb.org/3/tv/popular?api_key=8276c9f9a10754615ebd60a6a028f675&language=fr-FR')
    .then(reponse => {
      console.log(reponse);
      this.results = reponse.data.results
      console.log(reponse.data.results)
    })


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
