<demo>
按钮尺寸
</demo>
<template>
  <Button>默认尺寸</Button>
  <Button size="small">小尺寸</Button>
  <Button size="mini">mini尺寸</Button>
  <Button size="big">大尺寸</Button>
  <Button thinText>细字体</Button>

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