<template>
  <footer>
		<p>版权所有 © 2018 - songEagle</p>
		<p>Powered by Node.js & Vue.js & Nuxt.js</p>
    <p>
      {{bottomData}}
    </p>
  </footer>
</template>

<script>
  import axios from 'axios';
  export default {
    asyncData () {
      return axios.get(`/admin/getSystem`).then(res => {
        console.log(res.data, '-=-=-=-=-=-=-=-=-==-=-=-=-=-=')
        if (res.data.success === 1) {
          return {
            bottomData: res.data.content
          };
        } else {
          return { bottomData: {} };
        }
      });
    },
    data () {
      return {
        keyword: '',
        showInput: false,
        isShowSideMenu: false
      };
    },

    methods: {
      getSystem(){

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
  letter-spacing: 0.1em;
}
</style>

