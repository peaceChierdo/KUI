<demo>
基础用法
</demo>
<template>
  <Tabs v-model:selected="selected">
    <Tab title="title1">111</Tab>
    <Tab title="title2">222</Tab>
  </Tabs>
</template>

<script lang="ts">
  import Tabs from '../../lib/Tabs.vue'
  import Tab from '../../lib/Tab.vue'
  import { ref } from 'vue'
  export default {
    components: { Tabs, Tab },
    setup() {
      const selected = ref('title1')
      return { selected }
    }
  }
</script>
