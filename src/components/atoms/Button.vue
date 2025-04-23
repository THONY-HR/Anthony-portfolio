<template>
  <button
    @click="handleClick"
    class="btn"
    :class="{ full: autoResize }"
    :style="!autoResize ? computedStyle : {}"
  >
    {{ libelle }}
  </button>
</template>

<script>
export default {
  emits: ['click'],
  props: {
    libelle: {
      type: String,
      required: true
    },
    lien: {
      type: String,
      default: null
    },
    widthB: {
      type: Number,
      default: 200
    },
    heightB: {
      type: Number,
      default: 50
    },
    autoResize: {
      type: Boolean,
      default: true // ✅ par défaut on adapte au parent
    }
  },
  computed: {
    computedStyle() {
      return {
        width: this.widthB + 'px',
        height: this.heightB + 'px',
        fontSize: this.heightB / 2.5 + 'px'
      };
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
      if (this.lien) {
        window.location.href = this.lien;
      }
    }
  }
};
</script>

<style scoped>
.btn {
  border-radius: 5px;
  border: 1px solid var(--accent-color);
  background-color: var(--background-dark);
  color: var(--accent-color);
  transition: 0.3s ease;
  font-family: var(--font-orbitron);
  text-align: center;
  padding: 0.5em 1em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.full {
  width: 100%;
  max-width: 100%;
  font-size: 1em;
  height: auto;
}

/* Responsive ajustement (au cas où tu veux affiner) */
@media (max-width: 768px) {
  .btn {
    font-size: 0.95em;
  }
}

@media (max-width: 480px) {
  .btn {
    font-size: 0.85em;
  }
}
</style>
