## Intro

一个具备主流项目基础配置、预留配置空间的 vue-cli 自定义模版，基于 vue 2.x + vue-cli 3 实现。

愿景是不再为新项目而重复性的初始化配置，诚恳欢迎 star 和 PR～ (´▽｀)

模版源项目为 [vue-boilerplate](https://github.com/zoux/vue-boilerplate)。


## Use

```
npm i @vue/cli @vue/cli-init -g
vue init zoux/vue-template <app-name> 「app-name 为项目文件夹名称」
```


## Feature

- 基于 vue-cli 3
- 约定性的项目结构
- 集中管理的项目配置
- webpack require.context 实现 router vuex 的自动注入
- 预留了 router axios 全局拦截器
- 开发环境默认启用 vuex 的严格模式、日志监控
- 全局注入 axios api const 全局自定义插件
- 全局注入 scss-bem


## Framework

```
.
├── assets                        公共资源
│   ├── iconfont                  阿里 iconfont
│   ├── image
│   └── style
├── components                    公共组件
│   └── someComponents
│   └── index.js
├── config                        项目配置   
│   ├── interceptors              拦截器配置
│   └── index.js
├── plugins                       插件配置
│   ├── api.js
│   ├── axios.js
│   ├── const.js
│   ├── inject.js                 注入根实例属性
│   ├── router.js
│   └── store.js
├── routes                        公共路由
│   ├── modules.js
│   └── index.js
├── service                       公共服务
│   ├── api                       ajax 请求模块
│   ├── const                     const 常量模块
│   └── store                     vuex 状态模块
├── utils                         公共工具
│   ├── modules
│   ├── requireContextGetModules  require.context 工具方法
│   └── index.js
├── views                         模块/页面
├── App.vue                       根页面
├── main.js                       生成根实例
.
```


## License

MIT
