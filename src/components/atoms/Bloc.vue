<template>
  <div class="card" :style="{ width: widthCard + 'px', height: heightCard + 'px' }">
    <div class="bg" :style="{ width: widthCard - 10 + 'px', height: heightCard - 10 + 'px' }">
      <div class="titre-fixe">
        <h1>{{ titre }}</h1>
      </div>
      <div class="bloc">
        <div class="moi-emote">
          <IconeDeplacable img-width="150" img-height="200" :src="moiEmote" flotant="false"/>
        </div>
        <div class="contenu">
          <div class="iconComp">
            <slot />
          </div>
        </div>
      </div>
    </div>
    <div ref="blob" class="blob" :style="{ width: widthCard - 50 + 'px', height: heightCard - 100 + 'px' }"></div>
  </div>
</template>


<script>
import IconeDeplacable from '@/components/atoms/IconeDeplacable.vue'
import InconComp from '@/components/atoms/InconComp.vue'

export default {
  name: "Bloc",
  components: {
    IconeDeplacable,
    InconComp
  },
  props: {
    vitesse:{
      type: Number,
      required: false,
      default: 5
    },
    moiEmote:{
      type: String,
      required: true
    },
    titre:{
      type: String,
      required: true
    },
    widthCard: {
      type: Number,
      required: true
    },
    heightCard: {
      type: Number,
      required: true
    }
  },
  mounted() {
    this.$refs.blob.style.setProperty('--speed', this.vitesse + 's');
  }
}
</script>

<style scoped>
.contenu{
  padding-left: 1.5rem;
}
.titre-fixe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-exo2);
  background-color: transparent;
  z-index: 3;
  margin-top: 1.5rem;
}

.titre-fixe h1 {
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  margin: 0;
  margin-bottom: 1rem;
  padding-bottom: 0.6rem;
}

.moi-emote {
  /* display: flex; */
  scale: 1.25;
  justify-content: space-between;
  align-items: center;
}

.bloc {
  height: 90%;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.iconComp {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
}

.card {
  position: relative;
  border-radius: 14px;
  z-index: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}

.bg {
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 2;
  background-color: transparent;
    background-image: radial-gradient(var(--tertiary-color) 1px,var(--accent-color) 1px);
    background-size: 30px 30px;

  backdrop-filter: blur(24px);
  border-radius: 10px;
  outline: 3px solid var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 40px; /* Espace réservé pour le titre */
  box-sizing: border-box;
}

.blob {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background-color: var(--tertiary-color);
  opacity: 100%;
  filter: blur(12px);
  animation: blob-bounce var(--speed) infinite ease;
  transform: translate(-50%, -50%);
}

@keyframes blob-bounce {
  0%, 100% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }
  25% {
    transform: translate(-100%, -100%) translate3d(100%, 0, 0);
  }
  50% {
    transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
  }
  75% {
    transform: translate(-100%, -100%) translate3d(0, 100%, 0);
  }
}

@media (max-width: 1024px) {
  .card{
    margin-top: -0.5rem;
  }
  .bloc {
    flex-direction: column;
    gap: 0.5rem;
  }

  .moi-emote {
    display: none;
  }

  .contenu{
    padding-left: 1.5rem;
    display: flex;
    align-items: center;
    text-align: center;
    list-style: none;
  }
}

@media (max-width: 640px) {
  .contenu{
    padding-left: 1.5rem;
    display: list-item;
    align-items: center;
    text-align: center;
    list-style: none;
  }
  .card {
    margin-top: 0.5rem;
  }
  .bg{
    background-color: transparent;
    background-image: radial-gradient(var(--tertiary-color) 1px,var(--accent-color) 1px);
    background-size: 30px 30px;
    width: 290px;
  }
  .bloc {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  h1 {
    font-size: 1.2rem;
  }

  .iconComp {
    margin-left: -2rem;
    gap: 8px;
  }
}
</style>
