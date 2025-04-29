<template>
  <div id="contener">
    <div class="personnage">
      <div class="partie">
        <div class="contenu">
          <h1>Le personnage</h1>
          <p>
            Je m'appelle HERINANTENAINA Rantonrina Anthony, passionné par le développement web, le design d'interfaces et 
            la création de solutions numériques innovantes. Curieux, rigoureux et créatif, j'ai construit un profil polyvalent 
            mêlant développement full-stack, UI/UX design, graphisme et gestion de projets. J'aime concevoir des expériences 
            utilisateur cohérentes, performantes et esthétiques, en alliant technique et sens du détail visuel.
          </p>         
        </div>
        <div class="image">
          <img src="/public/Anthony-icon/UI_UX.png">
        </div>
      </div>
      <div class="partie">
        <div class="contenu">
          <h1>Mes origines</h1>
          <p>
            Mon parcours m'a amené à explorer des univers variés : programmation (Java, TypeScript, Python...), 
            développement web et mobile, conception graphique, et projets complets comme STELLAR. 
            Avec chaque nouvelle expérience — personnelle, académique ou professionnelle — j'ai affiné ma vision 
            du produit et renforcé mes compétences techniques et créatives. Cette diversité fait aujourd'hui ma force : 
            une approche transversale qui relie code, design et stratégie.
          </p>          
        </div>
        <div class="image">
          <img src="/public/Anthony-icon/backEnd.png">
        </div>
      </div>
      <div class="partie">
        <div class="contenu">
          <h1>Le Parfait développeur ?</h1>
          <p>
            Il n'existe pas, mais j'essaie chaque jour de m'en rapprocher. Mon approche repose sur la remise en question, 
            la curiosité et la recherche d'amélioration continue. J'accorde autant d'importance au code propre et 
            maintenable qu'à l'expérience utilisateur ou à la cohérence visuelle. C'est cette exigence qui me pousse 
            à toujours aller plus loin.
          </p>          
        </div>
        <div class="image">
          <img src="/public/Anthony-icon/frontEnd.png">
        </div>
      </div>
      <div class="partie">
        <div class="contenu">
          <h1>Mes objectifs</h1>
          <p>
            Je veux continuer à apprendre, créer et évoluer dans des projets stimulants. Mon cœur balance entre le 
            Front-end et le Back-end, avec un intérêt particulier pour les frameworks modernes comme Next.js 14 qui 
            unifient les deux mondes. Je souhaite contribuer à des projets ambitieux, où je peux allier développement, 
            design et réflexion produit, tout en mettant en œuvre des pratiques solides : tests, CI/CD, accessibilité, 
            performance et bonnes pratiques d'architecture. Mon but : allier esthétique, technique et impact.
          </p>          
        </div>
        <div class="image">
          <img src="/public/Anthony-icon/fusee.png">
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
    text-align: center;
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
  