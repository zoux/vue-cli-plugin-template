# declare

建议使用更高效的 [vue-cli preset](https://github.com/zoux/vue-preset) 来代替该插件生成模版。


## Intro

基于 [vue-template](https://github.com/zoux/vue-template) 和 [vue-typescript-template](https://github.com/zoux/vue-typescript-template) 实现的 vue 2.x + vue-cli 3 插件。

愿景是不再为新项目而重复性的初始化配置，诚恳欢迎 star 和 PR～ (´▽｀)


## Use

```
vue i @vue/cli -g
vue create my-app
cd my-app
vue add @zouxin/template
```


## Feature

- 基于 vue-cli 3
- 约定性的项目结构
- 集中管理的项目配置
- webpack require.context 实现 commonComponents router vuex 的自动注入
- 预留了 router axios 全局拦截器
- 开发环境默认启用 vuex 的严格模式、日志监控
- 可配置全局注入或按需加载 $axios $api $constants $utils 等服务
- 全局注入 scss-bem


## Framework

```
.
├── assets                              公共资源
│   ├── iconfont                        阿里 iconfont
│   ├── image
│   └── style
├── components                          公共组件
├── config                              项目配置
│   ├── interceptors                    拦截器配置
├── plugins                             插件配置
├── routes                              公共路由
├── service                             公共服务
│   ├── api                             ajax 请求模块
│   ├── constants                       constants 常量模块
│   ├── store                           vuex 状态模块
│   └── utils                           工具库
├── views                               模块/页面
├── App.vue                             根页面
├── main                                根实例
.
```


## License

MIT
