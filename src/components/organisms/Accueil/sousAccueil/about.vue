<template>
  <div class="about">
    <div class="titre">
      <TitreAnime text="Présentation" />
    </div>
    <div class="competence">
      <Bloc vitesse="10" :width-card="largeurBloc" :height-card="hauteurBloc" titre="Developpeur Front End" moi-emote="/Anthony-icon/backEnd.png">
        <InconComp src="/Anthony-icon/front/vue.png" alt="VueJS" />
        <InconComp src="/Anthony-icon/front/ang.png" alt="Angular" />
        <InconComp src="/Anthony-icon/front/js.png" alt="JavaScript" />
        <InconComp src="/Anthony-icon/front/ts.png" alt="TypeScript" />
        <InconComp src="/Anthony-icon/front/html.png" alt="HTML" />
        <InconComp src="/Anthony-icon/front/css.png" alt="CSS" />
      </Bloc>
      <Bloc vitesse="8" :width-card="largeurBloc" :height-card="hauteurBloc" titre="Developpeur Back-End" moi-emote="/Anthony-icon/frontEnd.png">
        <InconComp src="/Anthony-icon/back/c.png" alt="Language C" />
        <InconComp src="/Anthony-icon/back/java.png" alt="Java" />
        <InconComp src="/Anthony-icon/back/node.png" alt="Node" />
        <InconComp src="/Anthony-icon/back/perl.png" alt="Perl" />
        <InconComp src="/Anthony-icon/back/php.png" alt="PHP" />
        <InconComp src="/Anthony-icon/back/python.png" alt="Python" />
      </Bloc>
      <Bloc vitesse="6" :width-card="largeurBloc" :height-card="hauteurBloc" titre="Designer-UI/UX" moi-emote="/Anthony-icon/UI_UX.png" >
        <InconComp src="/Anthony-icon/UI_UX/illustrator.png" alt="Illustrator" />
        <InconComp src="/Anthony-icon/UI_UX/photoshop.png" alt="Photoshop" />
        <InconComp src="/Anthony-icon/UI_UX/indesign.png" alt="InDesign" />
        <InconComp src="/Anthony-icon/UI_UX/xd.png" alt="XD" />
        <InconComp src="/Anthony-icon/UI_UX/premiere-pro.png" alt="Premier-pro" />
        <InconComp src="/Anthony-icon/UI_UX/figma.png" alt="Figma" />
      </Bloc>
    </div>
    <section class="info-pers">
      <InfoPers />
    </section>  
    <section class="carousel-logo">
      <CarroselLogo :logos="[
        { src: '/Anthony-icon/back/node.png', name: 'Node.js' },
        { src: '/Anthony-icon/back/c.png', name: 'Language C' },
        { src: '/Anthony-icon/back/php.png', name: 'PHP' },
        { src: '/Anthony-icon/back/python.png', name: 'Python' },
        { src: '/Anthony-icon/back/java.png', name: 'Java' },
        { src: '/Anthony-icon/back/perl.png', name: 'Perl' },
        { src: '/Anthony-icon/front/vue.png', name: 'Vue.js' },
        { src: '/Anthony-icon/front/ang.png', name: 'AngularJS' },
      ]" />
    </section> 
  </div>
</template>

<script>
import Bloc from '@/components/atoms/Bloc.vue'
import TitreAnime from '@/components/atoms/TitreAnime.vue'
import InconComp from '@/components/atoms/InconComp.vue'
import InfoPers from '@/components/organisms/Accueil/sousAccueil/infoPers.vue'
import CarroselLogo from '@/components/molecules/CarroselLogo.vue'

export default {
  name: "AboutSection",
  components: {
    Bloc,
    TitreAnime,
    InconComp,
    InfoPers,
    CarroselLogo
  },
  data() {
  return {
    largeurBloc: 480,
    hauteurBloc: 220,
    languageLogos: [
      { src: '/Anthony-icon/front/vue.png', alt: 'Vue.js' },
      { src: '/Anthony-icon/front/react.png', alt: 'React' },
      { src: '/Anthony-icon/front/ang.png', alt: 'Angular' },
      { src: '/Anthony-icon/back/node.png', alt: 'Node.js' },
      { src: '/Anthony-icon/back/php.png', alt: 'PHP' },
      { src: '/Anthony-icon/back/python.png', alt: 'Python' },
    ]
  };
},
  mounted() {
    this.updateTailleBloc(); // appel initial
    window.addEventListener("resize", this.updateTailleBloc);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateTailleBloc);
  },
  methods: {
    updateTailleBloc() {
      if(window.innerWidth <= 480){
        this.largeurBloc = 300;
      }else{
        this.largeurBloc = 480;
      }
    }
  }
}
</script>

<style>
.info-pers{
  padding-top: 7rem;
  margin-left: -3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.carousel-logo{
  padding-top: 10rem;
  margin-left: -3rem;
  width: 100%;
}
.titre {
  width: 100%;
  height: 100px;
  color: var(--accent-color);
  margin-top: -20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-family: var(--font-orbitron);
}

.competence {
  padding-top: 4rem;
  margin-left: -3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
}

@media (max-width: 768px) {
  .titre {
    margin-top: -5rem;
    font-size: 24px;
  }

  .competence {
    padding-top: 2rem;
    gap: 3rem;
  }

  .carousel-logo{
    margin-top: -2rem;
    scale: 0.8;
    width: 114%;
  }
}

@media (max-width: 480px) {
  .titre {
    font-size: 12px;
    margin-left: -2rem;
  }

  .competence {
    display: list-item;
    list-style: none;
  }

  .carousel-logo{
    margin-top: -5rem;
    scale: 0.7;
    width: 105%;
  }
}

@media (max-width: 376px) {
  .carousel-logo{
    margin-top: -5rem;
    scale: 0.6;
    width: 138%;
  }
}
</style>