<template>
  <div class="mask" @click="$emit('hide-menu')" v-if="isShow">
    <section class="side-menu" v-if="isShow">
      <div class="don-info">
        <img src="/logo.jpg" alt="logo">
        <h2>songEagle</h2>
      </div>
      <nav class="menu-list">
        <nuxt-link to="/" class="no-underline">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-home"></use>
          </svg>HOME
        </nuxt-link>
        <nuxt-link to="/archive" class="no-underline">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-guidang"></use>
          </svg>ARCHIVE
        </nuxt-link>
        <nuxt-link to="/laboratory" class="no-underline">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-laboratory"></use>
          </svg>LABORATORY
        </nuxt-link>
        <nuxt-link to="/about" class="no-underline">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icnavabout"></use>
          </svg>ABOUT
        </nuxt-link>
        <a href="https://github.com/saucxs" target="_blank" class="no-underline" @click="goToOtherWebsite('GITHUB')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github"></use>
          </svg>GITHUB
        </a>
        <a href="https://www.mwcxs.top" target="_blank" class="no-underline juejin" @click="goToOtherWebsite('SAU')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cloud"></use>
          </svg>sau交流学习社区
        </a>
        <a href="http://weekly.mwcxs.top" target="_blank" class="no-underline juejin" @click="goToOtherWebsite('WEEKLY')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-menu-weekly-select"></use>
          </svg>weekly周报
        </a>
        <a href="http://www.cnblogs.com/chengxs" target="_blank" class="no-underline" @click="goToOtherWebsite('CNBLOG')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cnblogs"></use>
          </svg>博客园
        </a>
        <a href="https://blog.csdn.net/saucxs" target="_blank" class="no-underline" @click="goToOtherWebsite('CSDN')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-CSDNboke"></use>
          </svg>CSDN
        </a>
        <a href="https://segmentfault.com/u/saucxs" target="_blank" class="no-underline" @click="goToOtherWebsite('SEGMENTFAULT')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-iconsf"></use>
          </svg>SEGMENTFAULT
        </a>
        <a href="https://juejin.im/user/5b71a02b6fb9a00986736195" target="_blank" class="no-underline juejin" @click="goToOtherWebsite('JUEJIN')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-juejin"></use>
          </svg>JUEJIN
        </a>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/app";
.mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, .2);
    z-index: 9998;
}
.side-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 60%;
  max-width: 20em;
  background: #fff;
  z-index: 9999;
  .don-info {
    width: 100%;
    height: 5em;
    border-bottom: 1px solid rgba(238, 238, 238, 0.6);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      border-radius: 50%;
      margin-right: 1em;
      width: 3em;
      height: 3em;
    }
  }
  a {
    display: block;
    padding-left: 1em;
    height: 4em;
    font-size: 1.2em;
    color: #666;
    line-height: 4em;
    border-bottom: 1px solid rgba(238, 238, 238, 0.6);

    &.nuxt-link-exact-active {
      color: $base-color;
      background-color: #fff;
    }
    &.juejin {
      .icon {
        vertical-align: -0.05em;
      }
    }
  }
  .icon {
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
  }
}
</style>
