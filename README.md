## websocket-demo

### socket.io库的使用

[socket.io库](https://www.npmjs.com/package/socket.io)

### koa框架与socket.io搭建web聊天系统

- koa搭建http服务器
- socket.io搭建socket服务器
- socket.io库中API的使用
  - socket.broadcast广播（群聊）

### 客户端发送消息
 - 引入`/socket.io/socket.io.js`
 - 初始化socket: `const socket = io();`

## 练习

- 1、聊天室功能实现 
  - 1、实时聊天
  - 2、显示每条记录的（服务器）时间，格式参考：'2020-09-24 22:51:02' 