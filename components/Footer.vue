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
  import watermark from 'watermark-dom'
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
          this.init();
        }
      });
    },
    methods: {
      init () {
        var showText = this.systemConfig.watermark_txt + "\b\r" + window.location.host + "\b\r" + this.Dateformat(new Date(),"yyyy-MM-dd hh:mm:ss");
        watermark.init({ watermark_txt: showText,watermark_width: 170, font_size: 16, watermark_height: 120, watermark_x_space: 60, watermark_y_space: 30 });
        setInterval(function (item) {
             var showText1 = item.watermark_txt + "\b\n" + window.location.host + "\b\n" + item.Dateformat(new Date(), "yyyy-MM-dd hh:mm:ss");
             watermark.init({ watermark_txt: showText1, watermark_width: 170, font_size: 16, watermark_height: 120, watermark_x_space: 60, watermark_y_space: 30 });
         }, 3000, {watermark_txt: this.systemConfig.watermark_txt, Dateformat: this.Dateformat}); //每3秒刷新一次  3000的单位是毫秒
      },
      Dateformat (fthis, fmt) {
        var o = {
          "M+": fthis.getMonth() + 1, //月份
          "d+": fthis.getDate(), //日
          "h+": fthis.getHours(), //小时
          "m+": fthis.getMinutes(), //分
          "s+": fthis.getSeconds(), //秒
          "q+": Math.floor((fthis.getMonth() + 3) / 3), //季度
          "S": fthis.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (fthis.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
          if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
          }
        }
        return fmt;
      }
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

