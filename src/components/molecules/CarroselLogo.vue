<template>
  <div class="wrapper" :style="scrollStyle">
    <div class="track">
      <div class="item" v-for="i in 2 * logos.length" :key="i">
        <img :src="logos[i % logos.length].src" alt="" />
        {{ logos[i % logos.length].name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logos: {
      type: Array,
      required: true
    }
  },
  computed: {
    scrollStyle() {
      const itemWidth = 200
      const gap = 20
      const totalWidth = (itemWidth + gap) * this.logos.length
      return {
        '--translateXvalue': `-${totalWidth}px`
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 90%;
  max-width: 1536px;
  margin: auto;
  overflow: hidden;
  height: 100px;
  mask-image: linear-gradient(
    to right,
    rgba(0,0,0,0),
    rgba(0,0,0,1) 20%,
    rgba(0,0,0,1) 80%,
    rgba(0,0,0,0)
  );
}

.track {
  display: flex;
  gap: 20px;
  width: max-content;
  animation: scrollLeft 30s linear infinite;
}

.item {
  flex-shrink: 0;
  width: 200px;
  height: 100px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1rem;
}

.item img {
  width: 80px;
  height: 80px;
  margin-right: 10px;
  border-radius: 1rem;
}

/* Animation */
@keyframes scrollLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(var(--translateXvalue));
  }
}

/* ✅ Responsive */

/* Mobiles (<= 640px) */
@media (max-width: 640px) {
  .wrapper {
    height: 80px;
  }

  .item {
    width: 140px;
    height: 80px;
    font-size: 0.75rem;
  }

  .item img {
    width: 50px;
    height: 50px;
  }
}

/* Tablettes (641px à 1024px) */
@media (min-width: 641px) and (max-width: 1024px) {
  .wrapper {
    height: 90px;
  }

  .item {
    width: 180px;
    height: 90px;
    font-size: 0.875rem;
  }

  .item img {
    width: 65px;
    height: 65px;
  }
}

/* Desktop large (>= 1025px) */
@media (min-width: 1025px) {
  .wrapper {
    height: 100px;
  }

  .item {
    width: 200px;
    height: 100px;
    font-size: 1rem;
  }

  .item img {
    width: 80px;
    height: 80px;
  }
}
</style>
