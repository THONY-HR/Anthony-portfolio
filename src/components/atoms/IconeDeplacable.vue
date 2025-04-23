<template>
    <div
      class="icone-wrapper"
      :style="{ transform: `translate(${position.x}px, ${position.y}px)`, width: imgWidth + 'px', height: imgHeight + 'px' }"
      @mousedown="startDrag"
      @touchstart="startDrag"
    >
      <img 
        v-if="flotant == true"
        :src="src"
        alt="Icône déplaçable"
        class="floating-icon"
        draggable="false"
        ref="icon"
      />
      <img 
        v-else
        :src="src"
        alt="Icône déplaçable"
        class="floating-icon"
        draggable="false"
        ref="icon"
        style="animation: none;"
      />      
    </div>
  </template>
  
  <script setup>
  import { ref, reactive} from 'vue'
  
  const props = defineProps({
    src: {
      type: String,
      required: true
    },
    imgHeight: {
      typeof: Number,
      required: false,
      default: 60
    },
    imgWidth: {
      typeof: Number,
      required: false,
      default: 60
    },
    flotant: {
      type: Boolean,
      required: false,
      default: true
    }
  })
  
  const position = reactive({ x: 0, y: 0 })
  const isDragging = ref(false)
  const start = reactive({ x: 0, y: 0 })
  const icon = ref(null)
  
  const startDrag = (event) => {
    isDragging.value = true
    const e = event.type.includes('touch') ? event.touches[0] : event
    start.x = e.clientX - position.x
    start.y = e.clientY - position.y
    document.addEventListener('mousemove', onDrag)
    document.addEventListener('mouseup', stopDrag)
    document.addEventListener('touchmove', onDrag)
    document.addEventListener('touchend', stopDrag)
  }
  
  const onDrag = (event) => {
    if (!isDragging.value) return
    const e = event.type.includes('touch') ? event.touches[0] : event
    position.x = e.clientX - start.x
    position.y = e.clientY - start.y
  }
  
  const stopDrag = () => {
    isDragging.value = false
    position.x = 0
    position.y = 0
    document.removeEventListener('mousemove', onDrag)
    document.removeEventListener('mouseup', stopDrag)
    document.removeEventListener('touchmove', onDrag)
    document.removeEventListener('touchend', stopDrag)
  }
  </script>
  
  <style scoped>
  .icone-wrapper {
    cursor: grab;
    transition: transform 0.4s ease;
    user-select: none;
    -webkit-user-drag: none;
    font-family: var(--font-poppins);
  }
  .icone-wrapper img{
    border-radius: 0.5rem;
  }
  .floating-icon {
    width: 100%;
    height: 100%;
    object-fit: contain;
    animation: float 3s ease-in-out infinite;
    user-select: none;
    pointer-events: none;
    -webkit-user-drag: none;
  }

  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
    100% { transform: translateY(0px); }
  }
  </style>
  