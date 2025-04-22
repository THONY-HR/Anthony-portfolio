<style scoped>
  /* === removing default button style ===*/
  .button {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
  }

  /* button styling */
  .button {
    --border-right: 6px;
    --fs-size: 2em;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: var(--font-orbitron);
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--accent-color);
  }
  /* this is the text, when you hover on button */
  .hover-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--tertiary-color);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--tertiary-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--tertiary-color);
  }
  /* hover */
  .button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--tertiary-color))
  }
</style>
<script>
    export default{
        props:{
            text:{
                typeof: String,
                require: true
            }
        }
    }
</script>
<template>
  <button class="button" data-text="Awesome">
      <span class="actual-text">&nbsp;{{text}}&nbsp;</span>
      <span aria-hidden="true" class="hover-text">&nbsp;{{text}}&nbsp;</span>
  </button>
</template>
