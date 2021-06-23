<demo>
基础用法
</demo>
<template>
  <Button @click="onClick">基础按钮</Button>
  <Button theme="success">成功按钮</Button>
  <Button theme="warn">警告按钮</Button>
  <Button theme="danger">危险按钮</Button>
  <Button :disabled="true">按钮(禁用)</Button>

</template>

<script lang="ts" scoped>
  import Button from '../../lib/Button.vue'

  export default {
    components: { Button },
    setup() {
      const onClick = () => {
        console.log('click button')
      }
      return { onClick }
    }
  }
</script>