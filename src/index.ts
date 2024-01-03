import 'reflect-metadata'
import * as Koa from 'koa'
import { koaBody } from 'koa-body'
import * as serve from 'koa-static'
import * as mount from 'koa-mount'
import * as KoaSession from 'koa-session'
import * as KoaParameter from 'koa-parameter'
import { useKoaServer } from 'routing-controllers'
import { DataMapperController } from './controllers/dataMapper'
import { ActiveRecordController } from './controllers/activeRecord'
import { PORT, SESSION_CONFIG, appApath, appBpath } from './config'
import { UseLogWare } from './middleware'
import { testAlias } from '@common/help'
import AppDataSource from './entity'

testAlias()

const app: Koa = new Koa()

app.keys = ['session base secret']

app.use(koaBody())
app.use(KoaParameter(app) as Koa.Middleware)
app.use(KoaSession(SESSION_CONFIG, app))

// 多个静态资源路径
app.use(mount('/appA', serve(appApath)))
app.use(mount('/appB', serve(appBpath)))

AppDataSource.initialize()
useKoaServer(app, {
  controllers: [DataMapperController, ActiveRecordController],
  middlewares: [UseLogWare],
  routePrefix: '/api'
})

app.listen(PORT)
console.log('Service Started Successfully')
