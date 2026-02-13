<template>
  <div id="contener-contact">  
    <button class="export-btn" @click="exportAsImage">Exporter en image</button>
    <div ref="exportSection" class="carte">
      <div class="header">
        <h1>HERINANTENAINA Anthony</h1>
        <p class="sous-titre">Designer & Développeur FullStack | UI/UX • Graphisme • Motion Design</p>
      </div>

      <div class="infos">
        <div class="bloc">
          <strong>Adresse</strong>
          <span>Antananarivo, MADAGASCAR</span>
        </div>
        <div class="bloc">
            <div class="bloc">
              <strong>WhatsApp</strong>
              <span> +261 34 85 178 51</span>
            </div>
            <div class="bloc">
              <strong>Email</strong>
              <span>rantonirinaanthony@gmail.com</span>
            </div>
            <a href="https://www.linkedin.com/in/anthony-herinantenaina/" style="text-decoration: none;">
              <div class="bloc">
                <strong>linkedin</strong>
                <span style="color: white;" class="">anthony-herinantenaina</span>
              </div>
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'

export default {
  methods: {
    async exportAsImage() {
      const original = this.$refs.exportSection;

      // Clone de l'élément
      const clone = original.cloneNode(true);
      const container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.top = '-9999px';
      container.appendChild(clone);
      document.body.appendChild(container);

      // Appliquer les styles manquants manuellement (variables CSS)
      const styles = {
        '--background-dark': '#05060f',
        '--text-light': '#ffffff',
        '--accent-color': '#10b981',
        '--accent-contrast': '#4ade80',
        '--primary-color': '#1d4ed8',
        '--primary-contrast': '#2563eb',
        '--font-poppins': 'Poppins, sans-serif',
        '--font-orbitron': 'Orbitron, sans-serif',
        '--font-exo2': 'Exo 2, sans-serif'
      };

      Object.entries(styles).forEach(([key, value]) => {
        clone.style.setProperty(key, value);
      });

      const canvas = await html2canvas(clone, {
        backgroundColor: null,
        useCORS: true,
        scale: 2
      });

      const link = document.createElement('a');
      link.download = 'HERINANTENAINA-Contact.png';
      link.href = canvas.toDataURL('image/png');
      link.click();

      document.body.removeChild(container);
    }
  }
}
</script>

<style scoped>
.header {
  display: none; /* caché par défaut */
}

/* Tablettes et ordinateurs (≥ 768px) */
@media (min-width: 768px) {
  .header {
    display: block; /* affiché sur tablette et desktop */
  }
}


#contener-contact {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-family: var(--font-poppins);
  box-sizing: border-box;
}

.carte {
  background-color: var(--background-dark);
  background-image: radial-gradient(rgba(18, 147, 228, 0.712) 10%, transparent 1%);
  background-size: 5px 5px;
  color: #ffffff;
  width: 100%;
  max-width: 750px;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 86, 179, 0.3);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: center;
  box-sizing: border-box;
}

.header h1 {
  margin: 0;
  font-family: 'Orbitron', sans-serif;
  font-size: 2.2em;
  color: #10b981;
  word-break: break-word;
}

.sous-titre {
  margin-top: 8px;
  font-family: 'Exo 2', sans-serif;
  font-size: 1.1em;
  color: #ffffff;
}

.infos {
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 0.98em;
  text-align: left;
}

.bloc {
  background-color: var(--background-dark);
  padding: 12px 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  word-break: break-word;
}

.bloc strong {
  color: #4ade80;
  font-weight: 600;
}

.bloc .lien {
  color: #10b981;
  text-decoration: none;
}

.export-btn {
  background-color: #1d4ed8;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  padding: 10px 24px;
  font-size: 1em;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.export-btn:hover {
  background-color: #2563eb;
}

/* Responsive tablette */
@media (max-width: 768px) {
  .carte {
    padding: 30px 20px;
    gap: 20px;
  }

  .header h1 {
    font-size: 1.8em;
  }

  .sous-titre {
    font-size: 1em;
  }
}

/* Responsive mobile */
@media (max-width: 480px) {
  .carte {
    padding: 24px 16px;
    gap: 18px;
  }

  .header h1 {
    font-size: 1.5em;
  }

  .sous-titre {
    font-size: 0.95em;
  }

  .export-btn {
    width: 100%;
    font-size: 0.95em;
  }
}
</style>
