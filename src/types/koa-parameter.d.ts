import type Koa, { Middleware } from 'koa'

type ParameterRules = Record<string, any>

declare module 'koa-parameter' {
    type translate = (args: any[]) => string
    function parameter (app: Koa, translate?: translate): Middleware
    export = parameter
}

declare module 'koa' {
  interface Context {
    verifyParams: (rules: ParameterRules) => void
  }
}
