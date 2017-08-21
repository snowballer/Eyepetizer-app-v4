# 开眼视频官网

>依赖React技术栈构建的开眼视频官网

## 预览

在线预览地址：http://www.kaiyanapp.com/
（与官网效果一致）

## 构建工具

**create-react-app**

## 技术栈

- **React**：React框架
- **React-router4**：React路由
- **Redux**：React状态管理工具
- **styled-component**：组织React组件样式
- **redux-saga**：中间件
- **axios**：http请求
- **fastclick**：去除移动端点击延迟

## 启动项目
``` bash
#git clone
https://github.com/snowballer/Eyepetizer-app-v4.git

# install create-react-app
npm install -g create-react-app

# install dependencies
npm install

# serve with hot reload at localhost:3000
npm start

# build for production with minification
npm run build

```

## 疑难解析

**跨域问题**：项目中遇到了跨域问题，参阅了create-react-app官方github上的跨域解决方法，在package.json添加proxy，成功解决

```json
{
  "name": "eyepetizer-app",
  "version": "0.1.0",
  "private": true,
  "proxy":"http://baobab.kaiyanapp.com"
}
```

**组件更新**：针对不同路由路径下同一组件的如何更新问题困扰了很久，在简书、segmentfault及stackoverflow进行了搜索和询问，查阅了组件更新的控制方式，componentWillReceiveProps虽然能通过比较两次props的不同进行更新，但会造成redux的action混乱的问题，最终查阅虚拟DOM的组件key的底层原理，给组件加上唯一值key解决了问题，加深了对虚拟DOM的组件key的理解

```javascript
const FinalDetail = connect(
  ({ playVideoInfo, videoListInfo, replyListInfo }) =>
  ({ playVideoInfo, videoListInfo, replyListInfo }),actions
)(Detail);

export default function (props) {
  return (<FinalDetail {...props} key={props.match.url} />);
}
```

## 项目心得

**React-router**：React-router的v4版本相较于之前的v2及v3版本有了较大幅度的更新，api的变动很大，新版的router也是组件化一部分，组件化的思想更深入了，具体api改动请查阅官方说明

**Redux**：Redux的自顶而下的单一数据流非常清晰，在Redux Devtools中调试时可以准确地追踪和时间旅行，配合react-redux在react应用中也能方便的实现，不过action-dispatch-reducer-middleware流程比较繁琐，最近在考虑用mobx来进行管理数据，毕竟应用不复杂时，可以不用上redux

**styled-component**：css采用styled-component库实现，相较于传统的css写法，此种写法class类名自动随机生成，更有效地避免了classname命名管理混乱的状态，而且该库把css跟组件相结合，更符合组件化的思想

**redux-saga**：middleware采用的redux-saga，相较于redux-thunk，利用generator特性，能够非常方便地处理复杂异步问题

**React**：React组件颗粒度更高，虽然方便了复用，但也带来了文件管理问题，在项目中要尽量把共用模块分离出来，以便方便维护和管理。React的理念一切皆js，一切组件，在这个项目里得到很好的反应，无论是redux、css in js还是router都是组件的一部分，同时又全部来源于js，在数据管理上路由状态也是redux的一部分，因此在风格统一和数据管理上，React的确做得很好
