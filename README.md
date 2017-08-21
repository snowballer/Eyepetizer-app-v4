# 开眼视频官网

>依赖React技术栈构建的开眼视频官网

## 预览

在线预览地址：http://www.kaiyanapp.com/
（与官网效果一致）

## 构建工具
**create-react-app**

## 技术栈

- **React**：React框架
- **React-router**：React路由
- **Redux**：React状态管理工具
- **styled-component**：组织React组件样式
- **redux-saga**：中间件
- **axios**：http请求

## 指南

**框架选型**：在构建本网站之初，考虑过选用React或Vue来构建，毕竟本网站存在部分可复用的类组件结构。但本网站并不复杂，引用js框架带来的过多依赖会导致网站性能下降，并且本网站涉及的DOM操作较多，为了方便以后的迭代，最终选用jQuery库

**样式重置**：CSS Reset 把浏览器默认样式完全清空，但部分默认样式有其存在的合理之处。相对而言，normalize在确保各浏览器的默认样式的一致性情况下，保存了部分有其存在必要的默认样式。本网站选用normalize重置样式

**图标字体**：Font Awesome非常好用，但只能整体下载，尝试下载后发现体积过大，对于本网站来说过于笨重，而且本网站引用图标字体不多，最终选用阿里的Iconfont

**响应适配**：本网站针对移动端和pc端做了两套方案，具体差别可以在手机端和电脑端分别访问本网站来体验。网站多端切换通过媒体查询来实现，为了保证各手机显示的一致性，样式采用rem改写。具体适配方案，可以在query.css查看

**网站性能**：移动端相对pc端性能较差，移动端方案进行了降级。为了保证移动端的体验，多处图片和特效进行了改动。正由于pc端和移动端不同，首次加载时请求图片数量增加，网站加载时间过长。尝试引入PxLoader实现了按需加载，网站加载时间稍微缓解，体验依旧不好。经过debug分析，图片是加载延迟核心问题，对图片进行了压缩并采用cdn，网站加载问题解决

## 结语

感谢七牛云提供的cdn支持

感谢bootstrap和codepen提供的灵感
