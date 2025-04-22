<template>
    <div
      class="icon-comp"
      @mousemove="handleMouseMove"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
    >

      <span
        class="tooltip"
        :style="tooltipStyle"
        v-show="showTooltip"
      >
        {{ alt }}
        <span class="effet"></span>
      </span>
      <img :src="src" :alt="alt" />
    </div>
  </template>
  
  <script>
  export default {
    name: "IconComp",
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        tooltipLeft: 50, // en %
        showTooltip: false,
      };
    },
    computed: {
      tooltipStyle() {
        const angle = (this.tooltipLeft - 50) * 0.6; // de -30° à +30°
        return {
          left: `${this.tooltipLeft}%`,
          transform: `translateX(-50%) rotate(${angle}deg)`,
        };
      },
    },
    methods: {
      handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = (x / rect.width) * 100;
        this.tooltipLeft = Math.max(10, Math.min(90, percent));
      },
    },
  };
  </script>
  
  <style scoped>
.effet {
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: radial-gradient(
    ellipse at center,
    var(--tertiary-color),
    transparent
  );
  border-radius: 50%;
  filter: blur(4px);
}


  .icon-comp {
    position: relative;
    width: 50px;
    height: 50px;
    margin: 0.5rem;
  }
  
  .icon-comp img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
    transition: transform 0.2s ease;
  }
  
  .icon-comp:hover img {
    transform: scale(1.1);
    cursor: pointer;
  }
  
  .tooltip {
  position: absolute;
  top: -70px;
  height: 50px;
  color: var(--accent-color);
  font-size: 1rem;
  padding: 6px 12px;
  border-radius: 10px;
  pointer-events: none;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(3px); /* effet de verre */
  border: 1px solid rgba(255, 255, 255, 0.15);

  box-shadow:
    0 4px 12px var(--tertiary-color), /* glow doré sous l’icône */
    0 0 6px var(--tertiary-contrast);  /* glow rose autour */

  transition:
    left 0.4s ease,
    transform 0.5s ease,
    opacity 0.3s ease;
}

  </style>
  