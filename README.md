# webpack 使用 之 我的需求

>我需要一段通用的webpack配置，用于书写最基本的前端代码，而这个配置需要完成的功能至少有以下这几点

- 能自动编译ES6代码（当然了，既然能编译ES6代码当然就是自带模块化了）
- 能抽出全局独立模块，而不是包裹在webpack里面
- 按需加载
- postCSS （css代码后处理，免得写各种vendor code）
- 文件地址自动添加md5
- 热更新
- 自动测试

所以这个工程师为了满足我上面的需求所建立的一个模板
