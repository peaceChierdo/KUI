<template>
  <div class="doc-intro-wrap">
    <h1>Button 示例</h1>
    <Demo :component="ButtonDemo1" />
    <Demo :component="ButtonDemo2" />
    <Demo :component="ButtonDemo3" />
  </div>
</template>

<script lang="ts" scoped>
  import 'prismjs'
  import 'prismjs/themes/prism.css'
  const Prism = (window as any).Prism
  import ButtonDemo1 from './ButtonDemo/ButtonDemo1.vue'
  import ButtonDemo2 from './ButtonDemo/ButtonDemo2.vue'
  import ButtonDemo3 from './ButtonDemo/ButtonDemo3.vue'
  import Demo from './DemoSkeleton.vue'

  export default {
    components: { Demo },
    setup() {
      return { ButtonDemo1, ButtonDemo2, ButtonDemo3, Prism, Demo }
    }
  }
</script>
<style lang="scss" >
  .doc-intro-wrap {
    .kui-button {
      margin: 0 16px 16px 0;
      // & + & {
      //   margin-left: 20px;
      // }
    }
  }
</style>