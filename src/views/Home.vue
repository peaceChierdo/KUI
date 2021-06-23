<template>
  <div class="page-wrap">
    <div class="banner">
      <Topnav />
      <div class="banner-content">
        <h1>K U I
          <svg
            class="icon icon-sunflower"
            aria-hidden="true"
          >
            <use xlink:href="#k-sunflower"></use>
          </svg>
        </h1>
        <div class="link-wrap">
          <router-link to='/doc'> 开始 </router-link>
          <a> Github </a>
        </div>
      </div>

    </div>
    <div class="content">
      <div class="feat-wrap">
        <div class="feat-item">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#k-Vue"></use>
          </svg>
          <p><span>基于Vue3</span><span>使用了Vue3 Composition API</span></p>
        </div>
        <div class="feat-item">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#k-typescript"></use>
          </svg>
          <p><span>基于 TypeScript</span><span>源代码采用 TypeScript 书写</span></p>
        </div>
        <div class="feat-item">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#k-Goodnews"></use>
          </svg>
          <p><span>代码易读</span><span>每个组件的源代码都极其简洁</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue'

  export default {
    components: { Topnav }
  }
</script>

<style lang="scss">
  .page-wrap {
    user-select: none;
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #2e6ae4;
    .topnav-wrapper {
      color: #fff;
      box-shadow: none;
      // border-bottom: 1px solid red;
      .logo {
        color: #80cad8;
      }
      .toggle-menu {
        display: none;
      }
    }
  }
  .banner {
    background: #2e6ae4;
    padding-bottom: 5em;
    color: #f5f8fe;
    .banner-content {
      display: flex;
      justify-content: center;
      padding-top: 3em;
      h1 {
        font-family: 'milky';
        // font-size: 182px;
        font-size: 12em;
        color: #80cad8;
        text-align: center;
        .icon-sunflower {
          font-size: 0.6em;
        }
      }
      .link-wrap {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 4em;
        font-size: 1.1em;
        a {
          display: block;
          padding-bottom: 0.5em;
          border-bottom: 1px solid #f5f8fe;
          position: relative;
          margin-bottom: 1em;
          &:after {
            content: '';
            width: 100%;
            position: absolute;
            top: 100%;
            left: 100%;
            border-bottom: 1px solid #f5f8fe;
          }
        }
      }
    }
  }
  .content {
    flex: 1;
    padding-top: 80px;
    // clip-path: ellipse(80% 60% at 50% 40%);
    clip-path: ellipse(75% 64% at 50% 65%);
    background: rgb(242, 243, 244);
    background: linear-gradient(
      283deg,
      rgba(242, 243, 244, 1) 0%,
      rgba(238, 240, 242, 1) 54%,
      rgba(255, 255, 255, 1) 100%
    );
    // background: yellow;
    .feat-wrap {
      width: 90%;
      display: flex;
      margin: 0 auto;
      justify-content: center;
      .feat-item {
        display: flex;
        align-items: center;
        font-size: 1em;
        line-height: 1;
        margin-right: 20px;
        svg {
          font-size: 3em;
          margin-right: 0.2em;
          flex-shrink: 0;
        }
        p {
          display: flex;
          flex-direction: column;
          span {
            &:first-child {
              font-size: 1.4em;
              margin-bottom: 0.3em;
            }
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
    .page-wrap {
      background: #fff;
    }
    .banner {
      min-height: 45%;
      padding-bottom: 3em;
      color: #f5f8fe;
      clip-path: ellipse(80% 60% at 50% 40%);
      .banner-content {
        flex-direction: column;
        align-items: center;
        padding-top: 2em;
        h1 {
          font-size: 6em;
          padding-left: 0.3em;
          .icon-sunflower {
            font-size: 0.6em;
          }
        }
        .link-wrap {
          // border: 1px solid red;
          width: 50%;
          flex-direction: row;
          justify-content: space-around;
          margin-left: 0;
          margin-top: 1em;

          a {
            padding-bottom: 0.5em;
            border-bottom: 1px solid #f5f8fe;
            padding-bottom: 0;
            margin-bottom: 0;
            &:after {
              display: none;
            }
          }
        }
      }
    }

    .content {
      flex: 1;
      padding-top: 3em;
      // clip-path: ellipse(80% 60% at 50% 40%);
      clip-path: none;
      background: #fff;
      .feat-wrap {
        flex-direction: column;
        align-items: center;
        .feat-item {
          align-items: center;
          font-size: 1em;
          line-height: 1;
          margin-right: 0;
          margin-bottom: 2em;
        }
      }
    }
  }
</style>