<demo>
禁用按钮
</demo>
<template>
  <Button :disabled="true">按钮(禁用)</Button>
</template>

<script lang="ts" scoped>
  import Button from '../../lib/Button.vue'
  export default {
    components: { Button }
  }
</script>