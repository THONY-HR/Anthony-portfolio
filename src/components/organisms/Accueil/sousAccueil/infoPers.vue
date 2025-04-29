<template>
  <div id="contener">
    <div class="personnage">Personnage</div>
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
    #contener{
      display: flex;
      height: 700px;
      width: 1533px;
    }
    .personnage{
      background-color: aliceblue;
      border-radius: 5px;
      margin-right: 0.5rem;
      width: 150%;
      height: 100%;
    }
    .stack{
      background-color: aliceblue;
      border-radius: 5px;
      width: 100%;
      height: 98%;
    }
    .info{
      background-color: aliceblue;
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
        width: 100%;
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
    }
  </style>
  