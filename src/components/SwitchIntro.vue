<template>
  <div class="doc-intro-wrap">
    <h1>Switch 示例</h1>
    <Demo :component="SwitchDemo1" />

  </div>
</template>

<script lang="ts" scoped>
  import 'prismjs'
  import 'prismjs/themes/prism.css'
  const Prism = (window as any).Prism
  import SwitchDemo1 from './SwitchDemo/SwitchDemo1.vue'
  // import SwitchDemo2 from './SwitchDemo/SwitchDemo2.vue'
  // import SwitchDemo3 from './SwitchDemo/SwitchDemo3.vue'
  import Demo from './DemoSkeleton.vue'

  export default {
    components: { Demo },
    setup() {
      return { SwitchDemo1, Prism, Demo }
    }
  }
</script>
<style lang="scss" scoped>
</style>