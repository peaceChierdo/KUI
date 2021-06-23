<template>
  <div class="doc-intro-wrap">
    <h1>Tabs 示例</h1>
    <Demo :component="TabsDemo1" />

  </div>
</template>

<script lang="ts" scoped>
  import 'prismjs'
  import 'prismjs/themes/prism.css'
  const Prism = (window as any).Prism
  import TabsDemo1 from './TabsDemo/TabsDemo1.vue'
  import Demo from './DemoSkeleton.vue'

  export default {
    components: { Demo },
    setup() {
      return { TabsDemo1, Prism, Demo }
    }
  }
</script>
<style lang="scss" scoped>
</style>



<style lang="scss" scoped>
</style>