<template>
  <div class="navbar">
    <div class="page">
      <nav class="page__menu menu">
        <ul class="menu__list r-list">
          <li class="menu__group">
            <router-link
              :to="{
                name: 'Home'
              }"
              class="menu__link r-link text-underlined"
            >Accueil</router-link>
          </li>
          <li class="menu__group">
            <router-link
              :to="{
                name: 'Popular'
              }"
              class="menu__link r-link text-underlined"
            >Les plus populaires</router-link>
          </li>
          <li class="menu__group">
            <router-link
              :to="{
                name: 'Rated'
              }"
              class="menu__link r-link text-underlined"
            >Les mieux notées</router-link>
          </li>
        </ul>

        <ul class="menu__list r-list">
          <li class="menu__group">
            <router-link
              :to="{
                name: 'Login'
              }"
              class="menu__link r-link text-underlined"
            >Connexion</router-link>
          </li>
          <li class="menu__group">
            <router-link
              :to="{
                name: 'Popular'
              }"
              class="menu__link r-link text-underlined"
            >Inscription</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <!--</div>-->

    <div class="nav__background">
      <div class="nav__title">TV Show</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Navbar",
  components: {

  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/sass/Nav/navbar.scss";
</style>
