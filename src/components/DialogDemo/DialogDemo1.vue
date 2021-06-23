<demo>
基础用法
</demo>
<template>
  <Button
    @click="toggle"
    class="kui-toggle"
  >打开Dialog</Button>
  <div style="position:relative;z-index:1;">
    <Dialog
      v-model:visible="visible"
      :ok="clickOk"
      :cancel="clickCancel"
      :maskClosable="false"
    >
      <template v-slot:title>
        <p>一个标题</p>
      </template>
      <template v-slot:content>
        <p>la</p>
        <p>lala</p>
        <p>lalala</p>
      </template>
    </Dialog>
  </div>

</template>

<script lang="ts" scoped>
  import { ref } from 'vue'
  import Dialog from '../../lib/Dialog/Dialog.vue'
  import Button from '../../lib/Button.vue'
  import { openDialog } from '../../lib/Dialog/openDialog'

  export default {
    components: { Dialog, Button },
    setup() {
      const visible = ref(false)
      const toggle = () => {
        visible.value = !visible.value
      }
      const clickOk = () => {
        console.log('father clickOk')
        // return false
      }
      const clickCancel = () => {
        console.log('father clickCancel')
      }
      const showDialog = () => {
        openDialog({
          title: '这是showDialog打开的!',
          content: '<strong>内容</strong>',
          ok() {
            console.log('showDialog ok')
          }
        })
      }
      return { visible, toggle, clickOk, clickCancel, showDialog }
    }
  }
</script>