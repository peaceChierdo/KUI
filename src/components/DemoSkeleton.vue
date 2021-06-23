<template>
  <div class="demo-frame">
    <h3>{{component.__sourceCodeTitle}}</h3>
    <component :is="component" />
    <div
      class="toggle-code"
      @click="toggleCode"
    >
      <span
        class="toggle-text"
        ref="toggleText"
        :class="{'center':codeVisible}"
      >
        <svg
          class="icon"
          aria-hidden="true"
          v-if="codeVisible"
        >
          <use xlink:href="#k-sunflower"></use>
        </svg>
        <svg
          class="icon"
          aria-hidden="true"
          v-else
        >
          <use xlink:href="#k-Sun"></use>
        </svg>
        {{codeVisible?'收起':'查看代码'}}
      </span>
    </div>
    <div
      v-show="codeVisible"
      class="code-wrap"
      ref="codeWrap"
    >
      <pre v-html="html"></pre>
    </div>
  </div>

</template>

<script lang="ts" scoped>
  import 'prismjs'
  import 'prismjs/themes/prism.css'
  import { computed, nextTick, ref } from 'vue'
  import Button from '../lib/Button.vue'
  const Prism = (window as any).Prism

  export default {
    components: { Button },
    props: {
      component: Object
    },
    setup(props) {
      const html = computed(() => {
        return Prism.highlight(
          props.component.__sourceCode,
          Prism.languages.html,
          'html'
        )
      })
      const codeVisible = ref(false)
      const toggleCode = () => {
        codeVisible.value = !codeVisible.value
        nextTick(() => {
          toggleText.value.classList.add('fadeIn')
          codeWrap.value.classList.add('flipInX')

          setTimeout(() => {
            toggleText.value.classList.remove('fadeIn')
          }, 600)
        })

        // if (codeVisible.value) {
        //   toggleText.value.classList.remove('fadeInRight')
        //   toggleText.value.classList.add('fadeInLeft')
        // } else {
        //   toggleText.value.classList.remove('fadeInLeft')
        //   toggleText.value.classList.add('fadeInRight')
        // }
      }
      const toggleText = ref<HTMLDivElement>(null)

      const codeWrap = ref<HTMLDivElement>(null)

      return { Prism, html, codeVisible, toggleCode, toggleText, codeWrap }
    }
  }
</script>
<style lang="scss" scoped>
  .demo-frame {
    margin-bottom: 24px;
    padding: 16px 24px;
    background-color: #fff;
    border-radius: 8px;
    -moz-box-shadow: 0px 0px 10px #e4e3e3;
    -webkit-box-shadow: 0px 0px 10px #e4e3e3;
    box-shadow: 0px 0px 10px #e4e3e3;
    // border: 1px solid #e4e3e3;
    font-size: 14px;
    & + & {
      margin-top: 40px;
    }
    & > h3 {
      margin-bottom: 16px;
      // font-weight: 600;
      font-weight: normal;
      font-size: 18px;
    }
    .toggle-code {
      margin-top: 16px;
      text-align: left;
      padding: 8px 0;
      cursor: pointer;
      transition: all 1s;
      .icon {
        font-size: 1.5em;
        margin-right: 0.2em;
      }
      .toggle-text {
        // display: inline-block; //transform
        display: inline-flex;
        align-items: center;
        position: relative;
        left: 0;
        transform: translateX(0);
        transition: all 0.5s ease-in-out;
        &.center {
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    .code-wrap {
      border: 1px dashed #ccc;
      padding: 12px 16px;
      border-radius: 8px;
      pre {
        overflow-x: auto;
      }
    }
  }
  .fadeIn {
    animation: fadeIn 0.5s;
  }
  .flipInX {
    animation: flipInX 0.8s;
  }
</style>
<style >
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes flipInX {
    0% {
      -webkit-transform: perspective(600px) rotateX(90deg);
      transform: perspective(600px) rotateX(90deg);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      -webkit-transform: perspective(600px) rotateX(-20deg);
      transform: perspective(600px) rotateX(-20deg);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    60% {
      -webkit-transform: perspective(600px) rotateX(10deg);
      transform: perspective(600px) rotateX(10deg);
      opacity: 1;
    }
    80% {
      -webkit-transform: perspective(600px) rotateX(-5deg);
      transform: perspective(600px) rotateX(-5deg);
    }
    to {
      -webkit-transform: perspective(600px);
      transform: perspective(600px);
    }
  }
</style>