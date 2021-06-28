<template>
  <div class="kui-tabs">
    <div
      class="kui-tabs-nav"
      ref="container"
    >
      <div
        class="kui-tabs-nav-item"
        :class="{selected: t===selected}"
        v-for="(t, index) in titles"
        :key="index"
        @click="clickNav(t)"
        :ref="el=>{if(t===selected) selectedItem = el}"
      >
        {{t}}
      </div>
      <div
        class="kui-tabs-nav-indicator"
        ref="indicator"
      ></div>
    </div>
    <div class="kui-tabs-content">
      <!-- <component
        v-for="(c, index) in defaults"
        :key="index"
        :is="c"
      /> -->
      <component
        :is="current"
        :key="current.props.title"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, onMounted, ref, watchEffect } from 'vue'
  import Tab from './Tab.vue'
  export default {
    props: {
      selected: {
        type: String
      }
    },
    setup(props, context) {
      console.log('props selected', props.selected)
      console.log({ ...context })
      const defaults = context.slots.default()
      console.log('defaults', defaults)
      // const navItems = ref<HTMLDivElement[]>([])
      const selectedItem = ref<HTMLDivElement>(null)

      const indicator = ref<HTMLDivElement>(null)
      const container = ref<HTMLDivElement>(null)
      onMounted(() => {
        // 第一次运行在mounted前，如果希望访问到dom，要放到onmounted里
        watchEffect(
          () => {
            // console.log('navItems', navItems.value)
            // console.log('navItems', { ...navItems.value })
            // const divs = navItems.value

            // const result = divs.find((item) => { //有些浏览器不支持
            //   return item.classList.contains('selected')
            // })
            console.log('watchEffect')
            console.log('selectedItem', selectedItem.value)
            const { width } = selectedItem.value.getBoundingClientRect()
            indicator.value.style.width = width + 'px'
            const { left: left1 } = container.value.getBoundingClientRect()
            const { left: left2 } = selectedItem.value.getBoundingClientRect()
            const left = left2 - left1
            console.log('left', left)
            indicator.value.style.left = left + 'px'
          },
          {
            flush: 'post' // 渲染后再执行watchEffect
          }
        )
      })

      defaults.forEach((tag) => {
        if (tag.type !== Tab) {
          throw new Error('Tabs的子标签必须是Tab')
        }
      })
      const titles = defaults.map((tag) => {
        return (tag.props && tag.props.title) || '-'
      })
      console.log('titles', titles)
      const current = computed(() => {
        return defaults.filter((item) => {
          return item.props.title === props.selected
        })[0]
      })

      console.log('cur', current)
      const clickNav = (title: string) => {
        console.log('clickNav', title)
        context.emit('update:selected', title)
      }
      return {
        defaults,
        titles,
        current,
        clickNav,
        indicator,
        container,
        selectedItem
      }
    }
  }
</script>

<style lang="scss">
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;
  .kui-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;
      position: relative;
      &-item {
        padding: 8px;
        margin: 0 8px;
        cursor: pointer;
        &.disabled {
          color: #ccc;
          cursor: not-allowed;
        }
        &:first-child {
          margin-left: 0;
        }
        &.selected {
          color: $blue;
        }
      }
      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        transition: all 0.25s cubic-bezier(1, 1.67, 0.21, 0.84);
      }
    }
    &-content {
      padding: 20px 8px;
    }
  }
</style>