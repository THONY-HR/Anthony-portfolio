<template>
    <footer id="conteneur">
      <div class="gauche">
        <p>Codé avec 💻 et beaucoup de ☕️ | Anthony</p>
      </div>
      <div class="droite">
        <ListeIcon />
      </div>
    </footer>
  </template>
  
  <script>
    import logo from '/Anthony-icon/logo.jpeg'
    import ListeIcon from '@/components/molecules/listeIcon.vue'
    export default {
        components: { ListeIcon },
    }
  </script>
  
  <style scoped>
  #conteneur {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem 2rem;
    background-color: #05060f;
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
    scale: 0.8;
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
  @media (max-width: 450px) {
    #conteneur{
      text-align: center;
      padding-left: 110px;
    }
  }
  @media (max-width: 380px) {
    #conteneur{
      text-align: center;
      align-items: center;
      padding-left: 92px;
    }
  }
  </style>
  