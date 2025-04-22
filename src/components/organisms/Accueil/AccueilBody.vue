<template>
  <section class="header">
    <Header />
  </section>
  <section class="about" id="about">
    <About />
  </section>
</template>

<script>
import Header from './sousAccueil/header.vue'
import About from './sousAccueil/about.vue'
export default {
  components: { Header , About},
}
</script>

<style scoped>
.header {
  width: 100%;
  min-height: 747px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  background: linear-gradient(
  to bottom,
  var(--background-dark) 20%,
  var(--primary-color) 60%,
  var(--background-dark) 100%
);
}

.about {
  width: 100%;
  min-height: 747px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  background: var(--background-dark);
}

</style>
