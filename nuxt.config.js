module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Powered by songEagle",
    meta: [
      { charset: 'utf-8' },
      { name: 'author', content: '程新松,songEagle,saucxs,松宝写代码' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '程新松,songEagle,saucxs,松宝写代码,Vue,Nuxt,Node,thinkjs,koa,前端开发,JavaScript,H5,CSS3' },
      { hid: 'description', name: 'description', content: '程新松,songEagle,saucxs,松宝写代码,基于Vue.js和Node.js开发的博客' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: '//at.alicdn.com/t/font_979136_0fivjmxz0h4.js' },
      { src: 'https://hm.baidu.com/hm.js?7cc624a9cc153ac61e26cb47cb5e3785' }
      ]
  },
  // Global CSS
  css: [
    { src: '~assets/sass/app.scss', lang: 'sass' },
    { src: 'highlight.js/styles/atelier-cave-light.css' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  // server: {
  //   port: 3000, // default: 3000
  //   host: '127.0.0.1', // default: localhost
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    },
    vendor: ['axios']
  },
  babel: {
    presets: ['es2015', 'stage-2'],
    plugins: ['transform-async-to-generator', 'transform-runtime'],
    comments: true
  },

  /*
  ** plugins
  */
  plugins: [
    { src: '~plugins/axios.js' },
    { src: '~plugins/baiduGa.js' }
    ]
};

