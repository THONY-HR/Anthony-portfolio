<template>
  <div id="contener">
    <div class="personnage">
      <div class="partie">
        <div class="contenu">
          <h1>Le personnage</h1>
          <p>
            Victor alias Vik, une personne simple et curieuse, passionné par la compréhension et 
            la construction de solutions innovantes. En tant que développeur JavaScript / TypeScript, 
            j'ai travaillé en freelance, pour une agence et en collaboration dans un incubateur. 
            Ces expériences m'ont permis de développer mon sens de l'analyse et de la compréhension 
            des besoins clients et utilisateurs, afin de leur proposer des (micro)services sur mesure. 
            Soucieux de toujours progresser, je suis constamment en quête de nouvelles connaissances et 
            de défis à relever.
          </p>          
        </div>
        <div class="image">
          <img src="/public/Anthony-icon/astronote.png">
        </div>
      </div>
      <div class="partie">
        <div class="contenu">
          <h1>Le personnage</h1>
          <p>
            Victor alias Vik, une personne simple et curieuse, passionné par la compréhension et 
            la construction de solutions innovantes. En tant que développeur JavaScript / TypeScript, 
            j'ai travaillé en freelance, pour une agence et en collaboration dans un incubateur. 
            Ces expériences m'ont permis de développer mon sens de l'analyse et de la compréhension 
            des besoins clients et utilisateurs, afin de leur proposer des (micro)services sur mesure. 
            Soucieux de toujours progresser, je suis constamment en quête de nouvelles connaissances et 
            de défis à relever.
          </p>          
        </div>
        <div class="image">
          <img src="/public/Anthony-icon/astronote.png">
        </div>
      </div>
      <div class="partie">
        <div class="contenu">
          <h1>Le personnage</h1>
          <p>
            Victor alias Vik, une personne simple et curieuse, passionné par la compréhension et 
            la construction de solutions innovantes. En tant que développeur JavaScript / TypeScript, 
            j'ai travaillé en freelance, pour une agence et en collaboration dans un incubateur. 
            Ces expériences m'ont permis de développer mon sens de l'analyse et de la compréhension 
            des besoins clients et utilisateurs, afin de leur proposer des (micro)services sur mesure. 
            Soucieux de toujours progresser, je suis constamment en quête de nouvelles connaissances et 
            de défis à relever.
          </p>          
        </div>
        <div class="image">
          <img src="/public/Anthony-icon/astronote.png">
        </div>
      </div>
    </div>
    <div class="stack-info">
      <div class="stack">Stack</div>
      <div class="info">Info</div>
    </div>
  </div>
</template>

  
<script>
  // import Button from "@/components/atoms/Button.vue";
  // export default {
  //   components: {
  //     Button
  //   },
  //   data() {
  //     return {
  //       email: "rantonirinaanthony@gmail.com"
  //     };
  //   },
  //   methods: {
  //     async copyEmail() {
  //       try {
  //         await navigator.clipboard.writeText(this.email);
  //         alert("Email copié : " + this.email);
  //       } catch (err) {
  //         alert("Erreur lors de la copie.");
  //         console.error(err);
  //       }
  //     }
  //   }
  // };
</script>
  
<style scoped>
  .partie{
    color: var(--accent-color);
    font-family: var(--font-poppins);
    font-weight: 100;
    font-size: 13px;
    /* background-color: aliceblue; */
    margin: 1.5rem;
    width: 90%;
    height: 85%;
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
    gap: 3rem;
    
  }
  .partie .image{
    /* background-color: rgb(10, 16, 202); */
    width: 40%;
    height: 90%;
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .partie .image img{
    width: 200px;
  }
  .partie .contenu{
    width: 50%;
    /* background-color: red; */
    height: 90%;
    max-height: 100%;
    max-width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 0.17ch;
    line-height: 1.6;
  }
  .partie .contenu h1{
    font-family: var(--font-orbitron);
    text-align: center;
    font-weight: 600;
    font-size: 35px;
  }




  #contener{
    display: flex;
    height: 500px;
    width: 1533px;
  }
  .personnage{
    border: 1px solid var(--accent-color);
    border-radius: 5px;
    margin-right: 0.5rem;
    width: 150%;
    height: 100%;

    height: 100%;
    max-height: 100%; /* ou une valeur fixe comme 400px selon le cas */
    overflow-y: auto;
    padding-right: 1rem;
    overflow-y: scroll; /* ← toujours afficher la scrollbar */
    padding-right: 1rem;
    scroll-behavior: smooth;
    
    background-color: var(--text-dark);
    background-image: linear-gradient(
      32deg,
      var(--background-dark) 30px,
      transparent
    );
    background-size: 60px 60px;
    background-position: -5px -5px;
  }
  .stack{
    border: 1px solid var(--accent-color);
    border-radius: 5px;
    width: 100%;
    height: 98%;
  }
  .info{
    border: 1px solid var(--accent-color);
    border-radius: 5px;
    width: 100%;
    height: 98%;     
  }
  .stack-info{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  @media (max-width: 1440px) {
    #contener{
      display: flex;
      height: 500px;
      width: 1250px;
    }
    .stack-info{
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
  @media (max-width: 1024px) {
    #contener{
      display: flex;
      height: 500px;
      width: 1000px;
    }
    .stack-info{
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .partie{
      margin: 1.5rem;
      font-size: 10px;
    }
    .partie .image img{
      width: 150px;
    }
    .partie .contenu{
      font-weight: lighter;
   }
    .partie .contenu h1{
      text-align: center;
      font-weight: 600;
      font-size: 25px;
    }
  }
  @media (max-width: 768px) {
    #contener {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      height: 500px;
      width: 700px;
    }
    .stack-info{
      height: 50%;
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
    }
    .personnage{
      width:97.5%;
      height: 100%;
    }
  }
  @media (max-width: 435px) {
    #contener {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      height: 500px;
      width: 295px;
    }
    .stack-info{
      height: 50%;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .personnage{
      margin-top: -5rem;
      width:95%;
      height: 100%;
    }
    .partie{
      font-size: 9px;
    }
    .partie .image{
      display: none;
    }
    .partie .contenu{
      width: 95%;
      font-weight: lighter;
      text-align: justify;
      letter-spacing: 1px;
    }
    .partie .contenu h1{
      text-align: center;
      font-weight: 600;
      font-size: 15px;
    }
  }
</style>
  