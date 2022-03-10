<template>
  <div id="app">
    <Navbar />

    <router-view :key="$route.fullPath" />

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style lang="scss">
@import "./assets/sass/Utils/reset.scss";

</style>
