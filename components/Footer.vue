<template>
  <footer>
    <p><a v-for="(item, index) in bottomLink" :key="index" :href="item.link_url" target="_blank">{{item.link_name}}</a></p>
		<p>{{systemConfig.copyright}}</p>
    <!--统计start-->
    <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
    <span class="after-content">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>
    <span class="after-content">本站访客数<span id="busuanzi_value_site_uv"></span>人次</span>
    <!--统计end-->
    <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
  </footer>
</template>

<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        keyword: '',
        showInput: false,
        isShowSideMenu: false,
        bottomLink: [],
        systemConfig: {}
      };
    },
    created () {
      return axios.get(`/post/getBottomLink`).then(res => {
        if (res.data.success === 1) {
          this.bottomLink = res.data.bottomLink;
          this.systemConfig = res.data.systemConfig;
        }
      });
    },
    methods: {

    }
  };
</script>

<style lang="scss" scoped>
footer {
  padding: 0.5em 0;
  text-align: center;
  background: #000;
  color: #fff;
  font-size: 0.9em;
  line-height: 2;
  height: 7em;
  letter-spacing: 0.1em;
  a {
    margin: 0px 10px;
  }
}
</style>

