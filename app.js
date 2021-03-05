const http = require('http')
const Koa = require('koa')
const KoaRouter = require('koa-router')
const koaStaticCache = require('koa-static-cache')
const socketIo = require('socket.io')
const dayjs = require('dayjs')

const app = new Koa()
const router = new KoaRouter()

app.use(koaStaticCache({
  prefix: '/public',
  dir: './public',
  gzip: true,
  dynamic: true
}))

router.get('/hello', async ctx => {
  ctx.body = 'hello'
})

app.use(router.routes())

const server = http.createServer(app.callback())
server.listen(8888)

const socketServer = new socketIo.Server(server)

socketServer.on('connection', socket => {
  let time = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
  console.log('有人连接了')
  // console.log(socket)

  socket.on('message', function(data) {
    console.log(data)
    // 向当前这个客户端进行消息返送
    socket.emit('serverMessage', {
      id: socket.id,
      data,
      time: time
    })

    // 给其它已经链接的客户端（broadcast：不包含自己的）(群聊)
    socket.broadcast.emit('serverMessage', {
      // 从socket中的headers中获取原来登录的时候分配的token
      id: socket.id,
      data,
      time: time
    })
  })
})