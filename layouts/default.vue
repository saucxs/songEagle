<template>
  <div class="main">
    <don-header/>
    <div class="container box-flex">
      <don-menu/>
      <div class="main-container" id="main-box">
        <nuxt/>
      </div>
    </div>
    <don-footer/>
    <div class="top-bar">
      <div class="container">
        <span class="to-top" @click="goToTop" v-show="isShowToTop">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-backtotop"></use>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '~/components/Header.vue';
  import Menu from '~/components/Menu.vue';
  import Footer from '~/components/Footer.vue';
  export default {
    components: {
      'don-header': Header,
      'don-menu': Menu,
      'don-footer': Footer
    },
    data () {
      return {
        $docElement: null,
        $body: null,
        isShowToTop: false,
        timer: null
      };
    },
    mounted: function () {
      this.$docElement = document.getElementById('main-box')
      this.$body = document.getElementById('index-box');
      this.pageToTop();
      document.getElementById('main-box').addEventListener('scroll', this.debounce(this.pageToTop));
    },
    methods: {
      pageToTop: function () {
        let scrollTop = this.$body.scrollTop + this.$docElement.scrollTop;
        if (scrollTop > 200) {
          this.isShowToTop = true;
        } else {
          this.isShowToTop = false;
        }
        if (scrollTop === 0) {
          clearInterval(this.timer);
        }
      },
      goToTop: function () {
        this.timer = setInterval(() => {
          let scrollTop = this.$body.scrollTop + this.$docElement.scrollTop;
          let speed = Math.floor(scrollTop / 6);
          this.$body.scrollTop = this.$docElement.scrollTop = scrollTop - (speed < 1 ? 1 : speed);
        }, 30);
      },
      debounce: function (fn, delay, timeout) {
        var timer = null;
        var last = new Date().getTime();
        delay = delay || 300;
        timeout = timeout || 300;
        return () => {
          if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(fn, delay);
          if (new Date().getTime() > last + timeout) {
            fn.apply(this, [].slice.call(Array, arguments));
            last = new Date().getTime();
            clearTimeout(timer);
          }
        };
      }
    }
  };
</script>

<style lang="scss">
  @import "~assets/sass/app";
  .box-flex{
    height: calc(100% - 10.2em);
    display: flex;
  }

  .main {
    position: relative;
    box-sizing: border-box;
    height: 100%;

  .main-container {
    position: relative;
    margin-top: 1em;
    margin-left: 0em;
    width: 100%;
    overflow: auto;
    min-height: $minHeight;
  }
  .top-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 10em;
  }
  .to-top {
    position: absolute;
    z-index: 99999;
    bottom: 0;
    right: 1em;
    cursor: pointer;

  .icon {
    width: 3em;
    height: 3em;
  }
  &:hover {
     color: $base-color;
   }
  }
  }
</style>
