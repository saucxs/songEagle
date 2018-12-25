<template>
  <footer>
		<p>版权所有 © 2018 - songEagle</p>
		<p>Powered by Node.js & Vue.js & Nuxt.js</p>
  </footer>
</template>

<script>
  export default {
    data () {
      return {
        keyword: '',
        showInput: false,
        isShowSideMenu: false
      };
    },
    asyncData () {
      return axios.get(`/post/getSystem`).then(res => {
        if (res.data.success === 1) {
          console.log(res, '----------------------------')
          return {
            systemConfig: res.data,
          };
        } else {
          return { systemConfig: {} };
        }
      });
    },
    methods: {

    }
  };
</script>

<style lang="scss" scoped>
footer {
  margin: 1.5em 0;
  padding: 0.5em 0;
  text-align: center;
  background: #000;
  color: #fff;
  font-size: 0.9em;
  line-height: 2;
  letter-spacing: 0.1em;
}
</style>

