import { JsonController, Get, QueryParams, Post, Body } from 'routing-controllers'
import activeRecord from '../entity/activeRecord'

@JsonController('/record')
export class ActiveRecordController {
  @Get('/list')
  async list (@QueryParams() query: string): Promise<any> {
    console.log(query, '请求的query参数')
    const data = await activeRecord.find()
    return data
  }

  @Post('/post')
  async post (@Body() body: any): Promise<any> {
    console.log(body, '请求的body参数')
    const newLine = activeRecord.create({
      mode: body.mode,
      test: body.test
    })
    const data = await activeRecord.save(newLine)
    return data
  }
}
