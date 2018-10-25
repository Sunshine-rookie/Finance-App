# financeApp


线上访问地址：[https://Sunshine-rookie.github.io/financeApp/dist/](https://Sunshine-rookie.github.io/financeApp/dist/)



## 使用 ##

（1）克隆项目
```bash
		git clone https://github.com/Sunshine-rookie/financeApp.git
```
（2）安装node_modules文件夹：
```bash
		npm install
```

（3）开发，输入命令行
```bash
		npm run dev
```

（4）发布，可输入命令行
```bash
		npm run build
```



## 前置知识 ##
开发中使用了vue-cli(webpack包)、vue2、vue-router2、vuex2以及部分ES6语法(箭头语法)。建议阅读：

vue2中文指南：[http://cn.vuejs.org/v2/guide/](http://cn.vuejs.org/v2/guide/)

vue-router2：[http://router.vuejs.org/zh-cn/index.html](http://router.vuejs.org/zh-cn/index.html)

vuex指南开始：[http://vuex.vuejs.org/zh-cn/intro.html](http://vuex.vuejs.org/zh-cn/intro.html)




## 目录结构 ##

```pre

├── build                    // webpack打包配置（不说明它下面的文件）
├── config                   // webpack环境配置（不说明它下面的文件）
├── dist                     // 运行build后生成目录(存放需要的发布代码)
├── src                      // 生产目录(着重说明)
│   ├── assets               // 静态资源(css,font,img,js)
│   ├── components           // vue组件
│   ├── config               // Vue全局方法/过滤器
│   ├── data                 // 数据文件(json)
│   ├── views                // 业务页面
│   ├── main.js              // 项目入口文件
│   └── router.js            // 路由配置
├── .babelrc                 // babel工具配置
├── .editorconfig            // 编码风格配置(不太影响开发)
├── .gitignore               // git项目忽略上传的文件/文件夹配置
├── .project                 // 我编辑器生成的，对项目无用
├── README.md                // 说明文档
├── _config.yml              // git pages选择风格生成的
├── package.json             // 项目配置信息

```
