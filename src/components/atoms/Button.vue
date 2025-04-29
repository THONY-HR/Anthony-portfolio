<template>
  <button :style="{  width: widthB + 'px', height: heightB + 'px'}" @click="handleClick" class="btn">{{ libelle }}</button>
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
      default: null // facultatif
    },
    widthB: {
      type: Number,
      required: false,
      default: 200
    },
    heightB: {
      type: Number,
      required: false,
      default: 50
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
      if (this.lien) {
        window.location.href = this.lien; // redirection
      }
    }
  }
}
</script>

<style scoped>
button {
  border-radius: 5px;
  border: 1px solid var(--accent-color);
  background-color: var(--background-dark);
  color: var(--accent-color);
  transition: 0.5s;
  font-family: var(--font-orbitron);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* 💊 Tablette : max-width 768px */
@media (max-width: 768px) {
  button {
    width: 80% !important;
    font-size: 1em !important;
  }
}
/* 📱 Mobile (Android) : max-width 480px */
@media (max-width: 480px) {
  button {
    width: 90% !important;
    height: 40px !important;
    font-size: 0.9em !important;
  }
}
</style>
