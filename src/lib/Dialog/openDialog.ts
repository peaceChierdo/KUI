import Dialog from './Dialog.vue'
import { createApp, h } from 'vue'

export const openDialog = (options) => {
  const { title, content, ok, cancel, maskClosable } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          
          visible: true,
          "onUpdate:visible": (newVisible) => {
            console.log('ddd')
            if (newVisible === false) {
              //@ts-ignore
              app.unmount(div)
              div.remove()
            }
          },
          maskClosable,            
          ok,
          cancel,
        },
        {  title, content }

      )
    },
  })
  console.log('appappapp',app)
  console.log('h', h)
  app.mount(div)
}
