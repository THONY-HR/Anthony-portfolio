<template>
  <div class="about">
    <div class="titre">
      <TitreAnime text="Présentation" />
    </div>
    <div class="competence">
      <Bloc vitesse="10" :width-card="largeurBloc" :height-card="hauteurBloc" titre="Developpeur Front End" moi-emote="/public/Anthony-icon/backEnd.png">
        <InconComp src="/public/Anthony-icon/front/vue.png" alt="VueJS" />
        <InconComp src="/public/Anthony-icon/front/ang.png" alt="Angular" />
        <InconComp src="/public/Anthony-icon/front/js.png" alt="JavaScript" />
        <InconComp src="/public/Anthony-icon/front/ts.png" alt="TypeScript" />
        <InconComp src="/public/Anthony-icon/front/html.png" alt="HTML" />
        <InconComp src="/public/Anthony-icon/front/css.png" alt="CSS" />
      </Bloc>
      <Bloc vitesse="8" :width-card="largeurBloc" :height-card="hauteurBloc" titre="Developpeur Back-End" moi-emote="/public/Anthony-icon/frontEnd.png">
        <InconComp src="/public/Anthony-icon/back/c.png" alt="Language C" />
        <InconComp src="/public/Anthony-icon/back/java.png" alt="Java" />
        <InconComp src="/public/Anthony-icon/back/node.png" alt="Node" />
        <InconComp src="/public/Anthony-icon/back/perl.png" alt="Perl" />
        <InconComp src="/public/Anthony-icon/back/php.png" alt="PHP" />
        <InconComp src="/public/Anthony-icon/back/python.png" alt="Python" />
      </Bloc>
      <Bloc vitesse="6" :width-card="largeurBloc" :height-card="hauteurBloc" titre="Designer-UI/UX" moi-emote="/public/Anthony-icon/UI_UX.png" >
        <InconComp src="/public/Anthony-icon/back/node.png" alt="VueJS" />
        <InconComp src="/public/Anthony-icon/back/node.png" alt="JavaScript" />
      </Bloc>
    </div>
    <section class="info-pers">
      <InfoPers />
    </section>
  </div>
</template>

<script>
import Bloc from '@/components/atoms/Bloc.vue'
import TitreAnime from '@/components/atoms/TitreAnime.vue'
import InconComp from '@/components/atoms/InconComp.vue'
import InfoPers from '@/components/organisms/Accueil/sousAccueil/infoPers.vue'

export default {
  name: "AboutSection",
  components: {
    Bloc,
    TitreAnime,
    InconComp,
    InfoPers
  },
  data() {
  return {
    largeurBloc: 480,
    hauteurBloc: 220
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
  margin-top: 5rem;
  width: 90%;
  height: 800px;
  /* background-color: aqua; */
  margin-left: -3rem;
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
}

@media (max-width: 480px) {
  .titre {
    font-size: 12px;
    margin-left: -2rem;
  }

  .competence {
    display: list-item;
  }
}
</style>