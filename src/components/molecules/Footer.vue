<template>
    <footer id="conteneur">
      <div class="gauche">
        <p>Codé avec 💻 et beaucoup de ☕️ | Anthony 🗼</p>
      </div>
      <div class="droite">
        <a href="#"><img :src="logo" alt="logo" class="logo" /></a>
        <a href="#"><img :src="logo" alt="logo" class="logo" /></a>
      </div>
    </footer>
  </template>
  
  <script setup>
  import logo from '/Anthony-icon/logo.jpeg'
  </script>
  
  <style scoped>
  #conteneur {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem 2rem;
    background-color: rgb(0, 0, 0);
    opacity: 0.8;
    border-radius: 5px 5px 0 0;
    color: white;
    font-family: 'Poppins', sans-serif;
  }
  
  .gauche p {
    margin: 0;
    font-weight: 200;
    font-size: 14px;
    letter-spacing: 0.5px;
  }
  
  .droite {
    display: flex;
    gap: 1.5rem;
  }
  
  .logo {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .logo:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 600px) {
    .gauche p {
        font-size: 9px;
    }
    .logo {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }
    .droite {
      margin-top: 0.5rem;
      gap: 1rem;
    }
  }
  </style>
  