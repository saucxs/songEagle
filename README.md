# songEagle
一个支持服务端渲染SSR的博客，nuxt+vue+vuex+websocket+koa2+mysql+redis+nginx+jwt，包含文章，实验室，按照类别和标签分类，文章评论支持github第三方登录等，首页视觉可视化采用threejs+ WebGLRenderer实现网状波浪和三菱锥的动态效果。后台管理系统使用jwt做鉴权认证登录，支持markdown写文章，文章实时保存等功能。

## 技术栈
nuxt+vue+vuex+websocket+koa2+mysql+redis+nginx+jwt

## 源码
https://github.com/saucxs/songEagle

### 目录结构
+ .nuxt    —— bulid编译后文件夹，nuxt使用服务端渲染
+ assets    ——资源文件
+ components   —— 组件文件夹
+ dist    —— generate编译后文件夹，nust使用vue单页面模式spa
+ layouts   —— 页面布局文件夹
+ middleware   —— 中间件文件夹
+ node_modules   —— 各种npm包
+ pages   —— 路由文件夹
+ plugins   —— 插件
+ static   —— 静态文件
+ store   —— vuex文件夹
+ nuxt.config.js   —— nuxt个性化配置文件

### 功能特点
> 1、home主页
> 2、archive归档
> 3、laboratory实验室
> 4、about关于
> 5、搜索
> 6、文章评论
...

### 版本功能
+ 1、home主页
+ 2、archive归档
+ 3、laboratory实验室
+ 4、about关于
+ 5、搜索
+ 6、文章评论
+ 待续
    - 各个模块数据埋点
    
### 截图
1、home主页

![image](./screenshot/home.png)

2、archive归档

![image](./screenshot/archive.png)

3、laboratory实验室

![image](./screenshot/laboratory.png)

4、about关于

![image](./screenshot/about.png)

5、search搜索

![image](./screenshot/search.png)

6、comment评论

![image](./screenshot/comment.png)

7、无线端

![image](./screenshot/phone.png)

### 运行
```
git clone https://github.com/saucxs/songEagle

npm i

//本地运行
npm run dev

//部署
npm run build
npm start

```

### 适配

webkit内核的浏览器

无线端

### 最后

欢迎fork和start一波
