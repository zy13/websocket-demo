const http = require('http')
const socketIo = require('socket.io')

const server = http.createServer()

// 当有客户端通过http协议发生请求时候
server.on('request', (req, res) => {
  res.write('http server-1')
  res.end()
})

// 在已有的http服务器基础上，构建一个websocket服务器，复用http服务器的一些数据（比如端口）
const socketServer = new socketIo.Server(server)
socketServer.on('connection', socket => {
  console.log('有人连接了')
})

server.listen(8888)