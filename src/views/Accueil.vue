<template>
  <main class="main-container">
    <AccueilHeader />
    <AccueilBody />
    <AccueilFooter />
  </main>
</template>

<script>
import AccueilHeader from '@/components/organisms/Accueil/AccueilHeader.vue';
import AccueilBody from '@/components/organisms/Accueil/AccueilBody.vue';
import AccueilFooter from '@/components/organisms/Accueil/AccueilFooter.vue';

export default {
  components: { AccueilHeader, AccueilBody, AccueilFooter }
}
</script>

<style scoped>
.main-container {
  background-color: var(--background-dark);
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}
</style>
