# exam
考试后台管理系统

## vue-StarBucks
考试项目的各种接口封装
2019-08-30

## 技术栈
vue + vuex + vue-router + webpack + ES6+ sass + flex + flexble + icon + axios + element-ui

## 项目运行


git :https://github.com/hezhibo112/exam

Name : exam

运行:npm run serve

## 关于接口数据
此项目的所有接口数据都来源于配套的后台系统
## exam
## build
## config
## node_modules
|  | ——src                       // 主入口文件夹
|  | ——api
|  | —— index.js                // 所有的接口文档
|  | ——assets
|  |  | ——logo.png              // 静态文件
|  | ——components
|  |  | ——MyMask.vue           // 添加时的蒙层
|  |  | ——watchitem.vue        // 查看的每一项
|  |  | ——quetype.vue          // 选择的分类
|  | ——plugins                 
|  |  | ——index.js            // 插件
|  | ——router
|  |  | ——index.js              // 所有的路由表配置
|  | ——static                  // 静态资源文价夹
|  |  | ——img              
|  |  |  | ——status.jpg
|  |  | ——icon                  // 所有的icon图标
|  |  |  | 
|  |  | ——scss                  // 需要用到的scss文件
|  |  |  | ——_minix.scss
|  |  |  | ——common.scss
|  |  |  | ——flexble.js          // 响应式布局
|  | ——store        
|  |  | ——index.js              // vuex数据仓库
|  |—— utils                   // 公用方法封装
|  |  | ——files.js                 // 上传附件时的判断
|  |  |—— request.js               // 二次封装axios
|  | ——views                      // 视图文件夹
|  |  | ——commit
|  |  |  | ——index.vue           // 
|  |  | ——examine
|  |  |  | ——ndex.vue            // 
|  |  | ——detail
|  |  |  | ——index.vue           // 
|  |  | ——login
|  |  |  | ——index.vue           // 登陆界面
|  |  | ——filter.vue            // 筛选页面
|  |  | ——home.vue              // 主页页面
|  | ——App.vue                 // 主入口页面
|  | ——main.js                 // 主入口文件
| ——static                    // 静态文件
| ——babelrc                   // 配置项
.
.
.
| ——之间为脚手架中的内容

| ——package.lock.json 
| ——package.json              // 依赖的文件 npm install 下载的文件
| ——README.md