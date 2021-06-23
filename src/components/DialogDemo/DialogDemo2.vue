<demo>
函数式调用
</demo>
<template>
  <Button @click="showDialog">打开Dialog</Button>

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
          title: '函数调用方式打开的弹窗',
          // title() {
          //   return '函数调用方式打开的弹窗3333'
          // },
          // [Vue warn]: Non-function value encountered for slot "title". Prefer function slots for better performance.
          content() {
            return '一些内容'
          },
          maskClosable: false,
          ok() {
            console.log('Dialog ok')
          },
          cancel() {
            console.log('Dialog cancel')
          }
        })
      }
      return { visible, toggle, clickOk, clickCancel, showDialog }
    }
  }
</script>