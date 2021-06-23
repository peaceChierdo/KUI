<template>
  <button
    class="kui-button"
    :class="classes"
    v-bind="$attrs"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script lang="ts">
  import { computed } from 'vue'
  export default {
    props: {
      theme: {
        type: String,
        default: 'basic'
      },
      size: {
        type: String,
        default: 'normal'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      thinText: {
        type: Boolean,
        default: false
      }
    },
    setup(props, context) {
      const { theme, size, thinText } = props
      console.log('props', props)
      const classes = computed(() => {
        return {
          [`kui-theme-${theme}`]: theme,
          [`kui-size-${size}`]: size,
          ['thin-text']: thinText
        }
      })
      console.log('--------------')
      console.log('props:', { ...props })
      console.log('attrs:', { ...context.attrs })

      return { classes }
    }
  }
</script>

<style lang="scss" >
  $colorMap: (
    basic: rgb(82 82 82 / 0.6),
    success: #83d244,
    warn: #f99e4e,
    danger: #f94e66
  );
  $sizeMap: (
    normal: 1em,
    small: 0.5em,
    mini: 0.2em,
    big: 1.3em
  );
  $sizePaddingMap: (
    normal: 0.8em,
    small: 1.2em,
    mini: 2em,
    big: 0.8em
  );
  @mixin colorSet($colorName) {
    color: map-get($colorMap, $colorName);
    &:hover {
      text-shadow: 0px 0px 1px lighten(map-get($colorMap, $colorName), 15%);
    }
    &:active {
      text-shadow: 0px 0px 4px lighten(map-get($colorMap, $colorName), 15%);
    }
  }
  @mixin sizeSet($size) {
    font-size: map-get($sizeMap, $size);
    padding: map-get($sizePaddingMap, $size);
  }
  .kui-button {
    background-image: -webkit-linear-gradient(top, #f4f1ee, #fff);
    background-image: linear-gradient(top, #f4f1ee, #fff);
    border-radius: 8px;
    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.3), inset 0px 3px 1px 1px white,
      inset 0px -3px 1px 1px rgba(204, 198, 197, 0.5);
    position: relative;
    -webkit-transition: all 0.1s linear;
    transition: all 0.1s linear;
    border: none;
    line-height: 1;
    font-weight: bold;
    &.thin-text {
      font-weight: normal;
    }
    text-decoration: none;
    cursor: pointer;
    @include colorSet(basic);
    &.kui-theme-success {
      @include colorSet(success);
    }
    &.kui-theme-warn {
      @include colorSet(warn);
    }
    &.kui-theme-danger {
      @include colorSet(danger);
    }

    @include sizeSet(normal);
    &.kui-size-small {
      @include sizeSet(small);
    }
    &.kui-size-mini {
      @include sizeSet(mini);
    }
    &.kui-size-big {
      @include sizeSet(big);
    }
    &:active {
      background-image: -webkit-linear-gradient(top, #efedec, #f7f4f4);
      background-image: linear-gradient(top, #efedec, #f7f4f4);
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.4),
        inset 0px -3px 1px 1px rgba(204, 198, 197, 0.5);
    }
    &[disabled] {
      background: rgb(244, 241, 238);
      box-shadow: none;
      top: 3px;
      cursor: not-allowed;
      &:hover {
        text-shadow: none;
      }
    }
  }
</style>