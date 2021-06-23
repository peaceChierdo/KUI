<template>
  <div class="doc-intro-wrap">
    <h1>Dialog 示例</h1>
    <Demo :component="DialogDemo1" />
    <Demo :component="DialogDemo2" />
    <Attr
      :columns="columns"
      :dataSource="dataSource"
    />
  </div>
</template>

<script lang="ts" scoped>
  import 'prismjs'
  import 'prismjs/themes/prism.css'
  const Prism = (window as any).Prism
  import DialogDemo1 from './DialogDemo/DialogDemo1.vue'
  import DialogDemo2 from './DialogDemo/DialogDemo2.vue'
  import Demo from './DemoSkeleton.vue'
  import { columns } from '../lib/AttrCol'
  import Attr from './AttrTable.vue'
  import { ref } from 'vue'
  export default {
    components: { Demo, Attr },
    setup() {
      const dataSource = ref([
        {
          params: 'visible',
          desc: '是否显示弹窗',
          type: 'boolean',
          select: '-',
          default: 'false'
        },
        {
          params: 'maskClosable',
          desc: '点击遮罩层后是否能关闭弹窗',
          type: 'boolean',
          select: '-',
          default: 'true'
        },
        {
          params: 'ok',
          desc: '点击确认按钮时触发',
          type: 'function',
          select: '-',
          default: '-'
        },
        {
          params: 'cancel',
          desc: '点击取消按钮时触发',
          type: 'function',
          select: '-',
          default: '-'
        }
      ])
      return { DialogDemo1, DialogDemo2, Prism, Demo, columns, dataSource }
    }
  }
</script>
<style lang="scss" >
</style>