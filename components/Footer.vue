<template>
  <footer >
    <p><a v-for="(item, index) in bottomLink" :key="index" :href="item.link_url" target="_blank">{{item.link_name}}</a></p>
		<p>版权所有 © 2018 - songEagle</p>
		<p>Powered by Node.js & Vue.js & Nuxt.js</p>
  </footer>
</template>

<script>
  export default {
    props: ["bottomLink"],
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

