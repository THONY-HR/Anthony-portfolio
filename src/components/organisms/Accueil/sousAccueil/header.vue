<template>
    <div class="header_top">
        <Version class="version" versionPortfolio="Anthony-Portfolio 1.0" />
      </div>
      
      <div class="header_content">
        <h1 class="header_title">
          <p class="line-1">Développeur<br />FullStack </p>
          <!-- <p class="line-2"><br />Designer <br />UI/UX</p> -->
        </h1>
        <p class="header_description">
          Développeur FullStack JavaScript & TypeScript, passionné par la création d'applications modernes 
          avec des technologies telles que React, Next.js et NestJS.
        </p>
        <Button width-b="300" height-b="60" libelle="Découvrir" lien="#about" @click="handleClick" />
        <ul class="iconeFloatant">
          <li><IconeDeplacable imgHeight="180" imgWidth="180" src="/Anthony-icon/astronote.png" /></li>
          <li><IconeDeplacable imgHeight="200" imgWidth="200" src="/Anthony-icon/fusee.png" /></li>
        </ul>
         
    </div>
</template>
  
  <script>
  import Version from '@/components/atoms/Version.vue'
  import Button from '@/components/atoms/Button.vue'
  import IconeDeplacable from '@/components/atoms/IconeDeplacable.vue'
  

  export default {
  components: { Version, Button, IconeDeplacable },
  mounted() {
    const line1 = document.querySelector('.line-1');
    const line2 = document.querySelector('.line-2');

    let visible = true;
    line1.style.display = 'block';
    line2.style.display = 'none';

    setInterval(() => {
      if (visible) {
        line1.style.display = 'none';
        line2.style.display = 'block';
      } else {
        line1.style.display = 'block';
        line2.style.display = 'none';
      }
      visible = !visible;
    }, 2000);
  },
  methods: {
    handleClick() {
      console.log("Bouton cliqué !");
    }
  }
}

  </script>
  
  <style scoped>
  
    .iconeFloatant{
      list-style: none;
      display: flex;
      position: absolute;
      gap: 40rem;
      margin-top: -25rem;
      margin-left: -12rem;
    }
    .header_top {
        margin-bottom: -5rem;
    }

    .header_content {
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .header_title {
        position: relative;
        color: var(--accent-color);
        font-family: var(--font-orbitron);
        font-weight: 800;
        font-size: 60px;
        letter-spacing: 0.2rem;
        margin-bottom: 6rem;
    }

    .header_description {
        color: var(--text-light);
        font-family: var(--font-poppins);
        font-weight: 200;
        font-size: 16px;
        letter-spacing: 0.1rem;
        line-height: 1.6;
        margin-bottom: 3rem;
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
  