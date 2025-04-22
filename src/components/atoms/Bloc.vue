<template>
    <div class="card":style="{ width: widthCard + 'px', height: heightCard + 'px'}">
      <div class="bg" :style="{ width: widthCard - 10 + 'px', height: heightCard - 10 + 'px'}">
        <div class="bloc">
          <div class="moi-emote">
              <IconeDeplacable img-width="100" img-height="100"/>
          </div>
          <div class="contenu">
            <ul>
              <li><h1>Developpeur Front-End</h1></li>
              <li>
                <div class="iconComp">
                  <InconComp src="/public/Anthony-icon/logo.jpeg" alt="AngularJs"/>
                  <InconComp src="/public/Anthony-icon/logo.jpeg" alt="AngularJs"/>
                  <InconComp src="/public/Anthony-icon/logo.jpeg" alt="AngularJs"/>
                  <InconComp src="/public/Anthony-icon/logo.jpeg" alt="AngularJs"/>
                  <InconComp src="/public/Anthony-icon/logo.jpeg" alt="AngularJs"/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="blob" :style="{ width: widthCard - 50 + 'px', height: heightCard - 100 + 'px'}"></div>
    </div>
  </template>
  
  <script>
  import IconeDeplacable from '@/components/atoms/IconeDeplacable.vue'
  import InconComp from '@/components/atoms/InconComp.vue'

  export default {
    name: "CustomCard",
    components: {
      IconeDeplacable,
      InconComp
    },
    props: {
      widthCard: {
        type: Number,
        required: true
      },
      heightCard: {
        type: Number,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  ul{
    list-style: none;
    align-items: center;
    align-content: center;
    text-align: center;
  }
  .moi-emote{
    width: 60px;
    height: 60px;
    background-color: red;
  }
  .test{
    background-color: aqua;
  }
  .bloc {
    height: 90%;
    width: 95%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .iconComp{
    display: flex;
  }
  .titre{
    width: 40%;
    height: 90%;
    background-color: red;
  }
  .card {
    position: relative;
    border-radius: 14px;
    z-index: 1111;
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
    background: var(--accent-color);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    outline: 3px solid var(--accent-color);

    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    background-color: var(--tertiary-color);
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
    transform: translate(-50%, -50%);
  }
  
  @keyframes blob-bounce {
    0% {
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

    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
  </style>
  