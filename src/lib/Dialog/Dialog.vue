<template>
  <template v-if="visible">
    <Teleport to='body'>
      <div
        class="kui-dialog-mask"
        @click="clickMask"
      ></div>
      <div class="kui-dialog-wrap">
        <div class="kui-dialog">
          <div
            class="kui-btn-close"
            @click="close"
          >
            <span><svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="close"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                ></path>
              </svg></span>
          </div>

          <header>
            <slot name="title" />
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <div
              class="btn kui-ok"
              @click="clickOk"
            >ok</div>
            <div
              class="btn kui-cancel"
              @click="clickCancel"
            >cancel</div>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>

</template>

<script lang="ts">
  // import Button from './Button.vue'
  export default {
    // components: { Button },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      maskClosable: {
        type: Boolean,
        default: true
      },
      ok: {
        type: Function
      },
      cancel: {
        type: Function
      }
    },
    setup(props, context) {
      const close = () => {
        context.emit('update:visible', false)
      }
      const clickMask = () => {
        console.log('clickMask')
        if (props.maskClosable) {
          close()
        }
      }
      const clickOk = () => {
        console.log('----', props.ok)
        if (props.ok && props.ok() !== false) {
          close()
        }
      }
      const clickCancel = () => {
        if (props.cancel?.() !== false) {
          close()
        }
      }

      return { close, clickMask, clickOk, clickCancel }
    }
  }
</script>

<style lang="scss">
  .kui-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45);
    z-index: 10;
  }
  .kui-dialog-wrap {
    position: fixed;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    // min-width: 40%;
    min-width: 20em;
    max-width: calc(100vw - 32px);
    z-index: 11;
  }
  .kui-dialog {
    position: relative;
    background: #fff;
    border-radius: 4px;
    // box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    line-height: 1;
    padding: 0 0.5em;
    > header {
      padding: 1em;
      border-bottom: 1px solid #f0f0f0;
    }
    > main {
      padding: 1.5em;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    > footer {
      // padding: 0.5em 1em 1em;
      text-align: right;
      box-sizing: border-box;
      border-top: 1px solid #f0f0f0;
      display: flex;
      justify-content: space-evenly;
      .btn {
        flex: 1;
        padding: 0.5em 0.5em 0.7em;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-left: 1px solid #f0f0f0;
        color: #606266;
        cursor: pointer;
        &:first-child {
          border-left: none;
        }
      }
    }
  }
  .kui-btn-close {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    z-index: 10;
    padding: 0;
    color: rgba(0, 0, 0, 0.45);
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    background: 0 0;
    border: 0;
    outline: 0;
    cursor: pointer;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
  }
</style>