<template>
  <section class="header">
    <Header />
  </section>
  <section class="about">
    <About />
  </section>
  <section class="listProject">
    <ListProject />
  </section> 
  <section class="contact" id="contact-me">
    <Contact/>
  </section>
</template>

<script>
import Header from './sousAccueil/header.vue'
import About from './sousAccueil/about.vue'
import Contact from '@/components/organisms/Accueil/sousAccueil/contact.vue'
import ListProject from '@/components/organisms/Accueil/sousAccueil/listProject.vue'

export default {
  components: { Header , About, ListProject, Contact},
}
</script>

<style scoped>
.contact {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.listProject {
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  width: 100%;
  background: linear-gradient(
    to bottom,
    var(--background-dark) 15%,
    var(--primary-color) 50%,
    var(--background-dark) 65%
  );
  z-index: 10;
}

.header {
  min-height: 747px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  width: 100%;
  background: linear-gradient(
    to bottom,
    var(--background-dark) 20%,
    var(--primary-color) 60%,
    var(--background-dark) 100%
  );
  z-index: 1;
  position: relative;
}

.about {
  scale: 0.98;
  margin-top: 10rem;
  margin-left: 0.6rem;
  width: 100%;
  min-height: 747px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  padding-bottom: -2rem;
  background: var(--background-dark) 0%;
  z-index: 1;
  position: relative;
}

/* Responsive */
@media (max-width: 768px) {
  .about {
    margin-top: 2rem;
    text-align: center;
  }
  .listProject {
    margin-top: -1rem;
    margin-bottom: -200px;
    
    background: linear-gradient(
      to bottom,
      var(--background-dark) 5%,
      var(--primary-color) 40%,
      var(--background-dark) 55%
    );
  }
}

@media (max-width: 480px) {
  .header{
    margin-left: -0.3rem;
  }
  .about {
    margin-top: 1rem;
    margin-left: 1rem;
  }
  .contact{
    scale: 0.8;
  }
  .listProject {
    margin-top: 3rem;
    margin-bottom: 5rem;
    background: linear-gradient(
      to bottom,
      var(--background-dark) 2%,
      var(--primary-color) 60%,
      var(--background-dark) 100%
    );
  }
}
</style>
