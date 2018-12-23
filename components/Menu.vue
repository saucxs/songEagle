<template>
  <nav class="menu">
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
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  methods: {
    goToOtherWebsite (type) {
      axios.post('/track/addEventTrack', qs.stringify({
        key: `GO_TO_${type}`
      }));
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/app";
.menu {
  /*position: fixed;*/
  margin-top: 1em;
  margin-right: 1em;

  a {
    display: block;
    margin-bottom: 0.8em;
    padding-left: 1em;
    height: 3em;
    font-size: 1.2em;
    color: #666;
    line-height: 3em;

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


