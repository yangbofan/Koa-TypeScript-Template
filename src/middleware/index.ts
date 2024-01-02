import { type Context } from 'koa'
import { Middleware, type KoaMiddlewareInterface } from 'routing-controllers'
import logger from '../logger'

/**
 * 用于鉴权的中间价或者使用官方推荐的@Authorized()
 * 更多的学习这里 https://github.com/typestack/routing-controllers
*/
export class UseLoginWare implements KoaMiddlewareInterface {
  async use (ctx: Context, next: () => Promise<void>): Promise<void> {
    try {
      if (!ctx.session?.account) {
        ctx.status = 401
        ctx.body = '没有权限，等登陆'
        return
      }
      await next()
    } catch (error) {
      ctx.status = error.httpCode || 500
      ctx.body = {
        message: error.message || '内部服务器错误'
      }
    }
  }
}

@Middleware({ type: 'after' })
export class UseLogWare implements KoaMiddlewareInterface {
  async use (ctx: Context, next: () => Promise<void>): Promise<void> {
    try {
      logger.info(ctx.request.url, 'query:', JSON.stringify(ctx.query), 'body:', JSON.stringify(ctx.request.body))
      await next()
    } catch (error) {
      console.log(error)
    }
  }
}
