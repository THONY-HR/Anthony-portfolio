<template>
    <div id="contener">
        <div class="titre">
            <h1>Mes Projets</h1>
        </div>
        <div class="projet">
            <Project description="STELLAR-Z" titre="STELLAR-Z" git="https://github.com/THONY-HR/Stellar"/>
            <Project description="GESTION CINEMA" titre="GESTION CINEMA" git="https://github.com/THONY-HR/Cinema"/>
            <Project description="E-Commerce FRUITS & LEGUMES" titre="FRUITS & LEGUMES" git="https://github.com/THONY-HR/Cinema"/>
        </div>
    </div>
</template>
<script>
import Project from '@/components/atoms/Project.vue'

export default {
  name: "AboutSection",
  components: {
    Project
  }
}
</script>
<style scoped>
    #contener{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 80%;
        justify-content: center;
        align-items: center;
    }
    .titre{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5rem;

        font-family: var(--font-orbitron);
        font-size: 2rem;
        letter-spacing: 0.6rem;
    }
    .projet{
        display: flex;
        flex-direction: row;
        gap: 3rem;
        justify-content: center;
        align-items: center;
        transition: 1s;   
    }
    @media (max-width: 768px) {
        #contener{
            margin-top: -18rem;
        }
        .projet{
            scale: 0.95;
            margin-top: -3rem;
            margin-left: -3.2rem;
            transition: 1s;
        }
        .titre{
            font-size: 1.4rem;
        }
    }

    @media (max-width: 480px) {
        #contener{
            margin-top: 5rem;
        }
        .projet{
            margin-left: -2.3rem;
            margin-top: -5rem;
            flex-direction: column;
            gap: 1.5rem;
            scale: 0.90;
            transition: 1s;
        }
        .titre{
            font-size: 1rem;
            letter-spacing: 5px;
        }
    }

    @media (max-width: 376px) {
    }
</style>