<template>
  <div id="conteneur">
    <ul class="gauche">
      <li><img :src="logo" alt="logo" class="logo"></li>
      <li class="nom">HERINANTENAINA <br>Anthony</li>
    </ul>
    <ul class="droite">
      <li><a href="#about">Ma personnalité</a></li>
      <li><a href="#">Le développement</a></li>
      <li><a href="#">Contactez-moi</a></li>
      <li></li>
    </ul>
  </div>
</template>

<script setup>
  import logo from '/Anthony-icon/logo.jpeg'
</script>

<style scoped>
  #conteneur {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 100px;
    background-color: var(--background-dark);
    opacity: 80%;
    border-radius: 0 0 5px 5px;
    color: var(--text-light);

    /* Fixer le nav en haut */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000; /* Assure que le nav soit toujours au-dessus du contenu */
  }
  
  ul {
    list-style: none;
    display: flex;
    gap: 3rem;
    padding: 0;
    margin: 0;
  }

  .logo {
    margin-top: 10px;
    height: 40px;
    width: 40px;
    border-radius: 40%;
  }

  .nom {
    margin-top: 10px;
    font-family: var(--font-exo2);
    font-weight: 900;
    word-spacing: 5px;
    letter-spacing: 2px;
    font-size: 18px;
    color: var(--accent-color);
  }

  li a {
    text-decoration: none;
    color: var(--accent-color);
    font-family: var(--font-poppins);
    font-weight: 200;
    font-size: 14px;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .nom {
      font-size: 18px;
    }

    .logo {
      height: 40px;
      width: 40px;
    }

    .droite {
      gap: 1rem;
    }

    .droite li:not(:last-child) {
      display: none;
    }
  }
</style>
