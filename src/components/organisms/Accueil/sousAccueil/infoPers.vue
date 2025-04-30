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
      <div class="stack">
        <div class="partie">
          <p>Ma passion</p>
          <h1>Ma Stack :</h1>
        </div>
        <div class="partie">
          <div class="partie-contener">
            <div class="list-stack">
              <span class="language">JavaScript</span>
              <span class="language">Python</span>
              <span class="language">NodeJS</span>
              <span class="language">Angular</span>
              <span class="language">React</span>
              <span class="language">JavaScript</span>
              <span class="language">Python</span>
              <span class="language">NodeJS</span>
              <span class="language">Angular</span>
              <span class="language">React</span>
            </div>
            <div class="list-stack">
              <span class="language">C</span>
              <span class="language">.NET</span>
              <span class="language">Spring</span>
              <span class="language">Perl</span>
              <span class="language">PHP</span>
              <span class="language">Java</span>
              <span class="language">Heroku</span>
            </div>
          </div>
        </div>
      </div>
      <div class="info">
        <p>Où que vous soyez</p>
        <h1>En un click</h1>
        <div class="donne">
            <a href="/cv/Herinantenaina_Anthony_CV.pdf" download="Herinantenaina Anthony CV.pdf"   >
              <Button class="download" libelle="Telecharger CV" widthB="300"/>
            </a>
            <Button @click="copyEmail" libelle="Copier Email" widthB="150" />
        </div>
      </div>
    </div>
  </div>
</template>

  
<script>
  import Button from "@/components/atoms/Button.vue";
  import ButtonDown from "@/components/atoms/ButtonDownload.vue"
  export default {
    components: {
      Button, ButtonDown
    },
    data() {
      return {
        email: "rantonirinaanthony@gmail.com"
      };
    },
    methods: {
      async copyEmail() {
        try {
          await navigator.clipboard.writeText(this.email);
          alert("Email copié : " + this.email);
        } catch (err) {
          alert("Erreur lors de la copie.");
          console.error(err);
        }
      }
    }
  };
</script>
  
<style scoped>
  .info .donne{
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  .info h1{
    font-family: var(--font-orbitron);
    font-size: 30px;
  }
  .info p{
    font-weight: 100;
  }

  .stack .partie-contener{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .list-stack{
    display: flex;
    flex-direction: column;
  }
  .language{
    width: 7rem;
    height: 50px;
    background-color: var(--secondary-color);
    margin: 0.5rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 0.5rem;
  }
  .stack .partie{
    /* background-color: red; */
    width: 85%;
    height: 90%;
    margin: 1rem;
    color: var(--accent-color);
    font-family: var(--font-poppins);

    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    border-radius: 1rem;
  }

  .stack .partie h1{
    font-family: var(--font-orbitron);
    font-weight: bold;
    font-size: 35px;
  }

  .personnage .partie{
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
  .personnage .partie .image{
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
  .personnage .partie .image img{
    width: 200px;
  }
  .personnage .partie .contenu{
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
  .personnage .partie .contenu h1{
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    max-width: 100%;
    max-height: 200px;
    overflow: hidden;
  }
  .info{
    border: 1px solid var(--accent-color);
    border-radius: 5px;
    width: 100%;
    height: 98%;
    color: var(--accent-color);  
    font-family: var(--font-poppins);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    .info .donne{
      gap: 1rem;
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
    .personnage .partie{
      margin: 1.5rem;
      font-size: 10px;
    }
    .personnage .partie .image img{
      width: 150px;
    }
    .personnage .partie .contenu{
      font-weight: lighter;
   }
    .personnage .partie .contenu h1{
      text-align: center;
      font-weight: 600;
      font-size: 25px;
    }

    .stack .partie{
      width: 60%;
    }
    .language{
      scale: 0.85;
      margin: 0;
    }
    .stack .partie p{
      font-size: 10px;
      font-weight: 200;
    }
    .stack .partie h1{
      font-size: 20px;
    }
    .info .donne{
      gap: 1rem;
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
    .stack .partie{
      width: 50%;

    }
    .stack .partie-contener{
      margin: -5rem;
    }
    .language{
      scale: 0.7;
      margin: 0;
    }
    .stack .partie h1{
      font-size: 20px;
    }
    .info .donne{
      scale: 0.9;
      transition: 2s;
    }
    .info p{
      font-size: 8px;
    }
    .info h1{
      font-size: 19px;
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
    .personnage .partie{
      font-size: 9px;
    }
    .personnage .partie .image{
      display: none;
    }
    .personnage .partie .contenu{
      width: 95%;
      font-weight: lighter;
      text-align: justify;
      letter-spacing: 1px;
    }
    .personnage .partie .contenu h1{
      text-align: center;
      font-weight: 600;
      font-size: 15px;
    }

    .language{
      scale: 0.5;
      margin: -10px;
      margin-left: -31px;
    }
    .stack .partie p{
      font-size: 8px;
      font-weight: 100;
    }
    .stack .partie h1{
      font-size: 12px;
    }
    .info p{
      font-size: 8px;
    }
    .info h1{
      font-size: 15px;
    }
  }
</style>
  