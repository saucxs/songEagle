<template>
  <footer :bottomData="bottomData">
    <p><a v-for="(item, index) in bottomData.bottomLink" :key="index" :href="item.link_url" target="_blank">{{item.link_name}}</a></p>
		<p>{{bottomData.systemConfig.copyright}}</p>
    <!--统计start-->
    <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
    <span class="after-content">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>
    <span class="after-content">本站访客数<span id="busuanzi_value_site_uv"></span>人次</span>
    <!--统计end-->
  </footer>
</template>

<script>
  export default {
    props: ["bottomData"],
    data () {
      return {
        keyword: '',
        showInput: false,
        isShowSideMenu: false,
      };
    },

    methods: {

    }
  };
</script>

<style lang="scss" scoped>
footer {
  margin: 2.5em 0;
  padding: 0.5em 0;
  text-align: center;
  background: #000;
  color: #fff;
  font-size: 0.9em;
  line-height: 2;
  letter-spacing: 0.1em;
  a {
    margin: 0px 10px;
  }
}
</style>

