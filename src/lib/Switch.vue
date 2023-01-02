<template>
  <!-- <button
    class="kui-switch"
    :class="{'kui-checked':value}"
    @click="toggle"
  ><span></span></button> -->
  <div
    class="kui-switch"
    :class="{'kui-checked':value}"
    @click="toggle"
  >
    <span class="switch-left">On</span>
    <span class="switch-right">Off</span>
  </div>

</template>

<script lang="ts">
  import { ref } from 'vue'
  export default {
    props: {
      value: Boolean
    },
    setup(props, context) {
      // const checked = ref(false)
      const toggle = () => {
        // checked.value = !checked.value
        context.emit('update:value', !props.value)
      }
      return { toggle }
    }
  }
</script>

<style lang="scss">
  // $button-height: 22px;
  // $ball-radius: $button-height - 4px;
  // .kui-switch {
  //   height: $button-height;
  //   width: $button-height * 2;
  //   border: none;
  //   background: grey;
  //   border-radius: $button-height / 2;
  //   position: relative;
  //   span {
  //     background: #fff;
  //     position: absolute;
  //     width: $ball-radius;
  //     height: $ball-radius;
  //     border-radius: 50%;
  //     top: 2px;
  //     left: 2px;
  //     transition: left 0.25s;
  //   }
  //   &.kui-checked {
  //     background: blue;
  //     span {
  //       left: calc(100% - #{$ball-radius} - 2px);
  //     }
  //   }
  // }

  .kui-switch {
    zoom: 70%;
    // transform: scale(0.7);
    // transform-origin: left top;
    user-select: none;
    cursor: not-allowed;
    display: inline-block;
    position: relative;
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    color: #333;
    width: 7em;
    height: 4em;
    overflow: hidden;
    border-bottom: 0.5em solid #eee;
  }

  // N-small {
  //   font-size: 0.75em; /* Sizes the switch */
  //   margin: 1em;
  // }

  .kui-switch::before {
    content: '';
    position: absolute;
    top: 0.5em;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #999;
    border: 0.5em solid #eee;
    border-bottom: 0;
  }

  .switch-left,
  .switch-right {
    cursor: pointer;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5em;
    width: 3em;
    transition: 0.2s;
  }

  .switch-left {
    height: 2.4em;
    width: 2.75em;
    left: 0.85em;
    bottom: 0.4em;
    background-color: #ddd;
    transform: rotate(15deg) skewX(15deg);
  }

  .switch-right {
    right: 0.5em;
    bottom: 0;
    background-color: #bd5757;
    color: #fff;
  }

  .switch-left::before,
  .switch-right::before {
    content: '';
    position: absolute;
    width: 0.4em;
    height: 2.45em;
    bottom: -0.45em;
    background-color: #ccc;
    transform: skewY(-65deg);
  }

  .switch-left::before {
    left: -0.4em;
  }

  .switch-right::before {
    right: -0.375em;
    background-color: transparent;
    transform: skewY(65deg);
  }

  .kui-checked .switch-left {
    background-color: #0084d0;
    color: #fff;
    bottom: 0px;
    left: 0.5em;
    height: 2.5em;
    width: 3em;
    transform: rotate(0deg) skewX(0deg);
  }

  .kui-checked .switch-left::before {
    background-color: transparent;
    width: 3.0833em;
  }

  .kui-checked .switch-right {
    background-color: #ddd;
    color: #333;
    bottom: 0.4em;
    right: 0.8em;
    height: 2.4em;
    width: 2.75em;
    transform: rotate(-15deg) skewX(-15deg);
  }

  .kui-checked .switch-right::before {
    background-color: #ccc;
  }

  /* Keyboard Users */
  .kui-switch:active .switch-left {
    color: #888;
  }

  .kui-switch.kui-checked:active .switch-left {
    color: #fff;
  }

  .kui-switch:active .switch-right {
    color: #fff;
  }

  .kui-switch.kui-checked:active .switch-right {
    color: #888;
  }
</style>
