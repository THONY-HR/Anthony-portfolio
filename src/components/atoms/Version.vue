<template>
  <div id="containeur">
    <div class="version">
      <p class="gradient-text">{{ versionPortfolio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    versionPortfolio: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.version {
  padding-top: -80px;
  padding-bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80px;
  font-family: var(--font-poppins);
  font-weight: 100;
  font-size: 8px;
  letter-spacing: 0.2rem;
}

.gradient-text {
  border: 0.1px solid var(--accent-color);
  padding: 10px;
  border-radius: 5px;

  background: linear-gradient(
    to right,
    var(--primary-contrast),
    var(--accent-contrast),
    var(--tertiary-contrast)
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
</style>
