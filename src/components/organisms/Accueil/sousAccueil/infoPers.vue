<template>
    <div class="container">
      <div class="part-1 loko border"></div>
      <div class="part-2 loko">
        <div class="bloc border"></div>
        <div class="bloc border">
          <p>Où que vous soyez</p>
          <h2>En un click</h2>
          <Button
            width-b="700"
            height-b="90"
            libelle="Enregistrer mon Email"
            @click="copyEmail"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Button from "@/components/atoms/Button.vue";
  
  export default {
    components: {
      Button
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
          alert("📋 Email copié : " + this.email);
        } catch (err) {
          alert("❌ Erreur lors de la copie.");
          console.error(err);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .loko {
    height: 800px;
  }
  
  /* Desktop */
  .part-1 {
    width: 47.5%;
  }
  
  .part-2 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 47.5%;
  }
  
  .bloc {
    height: 50%;
    width: 100%;
    text-align: center;
    color: var(--accent-color);
    font-family: var(--font-poppins);
    padding: 20px;
  }

  .bloc p{
    font-size: 1.5rem;
    font-weight: 100;
  }
  .bloc h2{
    font-size: 4rem;
    font-weight: bold;
  }
  
  /* Tablette : max-width 1024px */
  @media (max-width: 1024px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  
    .part-1 {
      width: 100%;
      height: 400px;
    }
  
    .part-2 {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      height: 400px;
    }
  
    .bloc {
      width: 49%;
      height: 100%;
    }
  }
  
  /* Mobile : max-width 640px */
  @media (max-width: 640px) {
    .part-2 {
      flex-direction: column;
      height: auto;
      gap: 1rem;
    }
  
    .bloc {
      width: 100%;
      height: 300px;
    }
  }
  .border {
    border: 1px solid var(--accent-color);
    border-radius: 2rem;
  }
  </style>
  