<template>
    <button @click="handleClick" class="btn">{{ libelle }}</button>
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
  button{
    border-radius: 5px;
    width: 200px;
    height: 50px;
    border: 1px solid var(--accent-color);
    background-color: var(--background-dark);
    color: var(--accent-color);
    transition: 0.5s;
  }
</style>