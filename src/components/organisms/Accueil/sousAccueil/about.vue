<template>
  <div class="about">
    <div class="titre">
      <TitreAnime text="Presentation" />
    </div>
    <div class="competence">
      <Bloc :width-card="tailleBloc" height-card="200" />
      <Bloc :width-card="tailleBloc" height-card="200" />
      <Bloc :width-card="tailleBloc" height-card="200" />
    </div>
  </div>
</template>

<script>
import Bloc from '@/components/atoms/Bloc.vue'
import TitreAnime from '@/components/atoms/TitreAnime.vue'

export default {
  name: "AboutSection",
  components: {
    Bloc,
    TitreAnime
  },
  data() {
    return {
      tailleBloc: 480
    }
  }
}
</script>

  <style>
  .about{
    margin-top: 2rem;
  }
  .titre {
    width: 100%;
    height: 100px;
    /* background-color: aqua; */
    color: var(--accent-color);
    margin-top: -20rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 30px;
    font-family: var(--font-orbitron);
  }

  .competence{
    padding-top: 4rem;
    display: flex;
    gap: 3rem;
  }
  @media (max-width: 768px) {
        .iconeFloatant {
          display: none;
        }
        .header_top .version{
            margin-left: -30px;        
        }
        .header_content {
            margin-left: -30px;
            padding: 0 2rem;
        }
        .header_title {
            font-size: 36px;
            margin-bottom: 2rem;
        }

        .header_description {
            font-size: 14px;
            margin-bottom: 2rem;
        }
    }
  </style>
  