<template>
  <div
    class="icon-comp"
    @mousemove="handleMouseMove"
    @mouseenter="showTooltip = true"
    @mouseleave="showTooltip = false"
  >
    <span
      class="tooltip tooltip-desktop"
      :style="tooltipStyle"
      v-show="showTooltip"
    >
      {{ alt }}
      <span class="effet"></span>
    </span>
    <img :src="src" :alt="alt" />
    <span class="tooltip-mobile">{{ alt }}</span>
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
  border: 3px solid var(--background-dark);
  scale: 1.2;
  transition: transform 0.2s ease;
}

.icon-comp:hover img {
  transform: scale(1.1);
  cursor: pointer;
}

.tooltip {
  position: absolute;
  top: -75px;
  height: 50px;
  color: var(--background-dark);
  font-size: 1rem;
  padding: 6px 12px;
  border-radius: 10px;
  pointer-events: none;
  z-index: 3;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(20px);
  border: 1px solid var(--accent-color);

  box-shadow: 0 0 2px var(--tertiary-contrast);

  transition:
    left 0.4s ease,
    transform 0.5s ease,
    opacity 0.3s ease;
}

/* Alt visible pour mobile et tablette */
.tooltip-mobile {
  display: none;
  margin-top: 0.3rem;
  font-size: 0.75rem;
  text-align: center;
  color: var(--accent-color);
  opacity: 0.8;
}

/* Cacher tooltip animé et afficher alt texte en dessous pour tablette/mobile */
@media (max-width: 768px) {
  .tooltip-desktop {
    display: none !important;
  }

  .tooltip-mobile {
    display: block !important;
  }
  .icon-comp img{
    scale: 1;
  }
  .icon-comp {
    margin: 0.2rem;
  }
}
</style>
