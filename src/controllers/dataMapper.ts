import { JsonController, Get, QueryParams, Post, Body, UseBefore } from 'routing-controllers'
import AppDataSource from '../entity'
import dataMapper from '../entity/dataMapper'
import { UseLoginWare } from '../middleware'

@JsonController('/test')
export class DataMapperController {
  dataMapper = AppDataSource.getRepository(dataMapper)

  @Get('/list')
  @UseBefore(UseLoginWare)
  async list (@QueryParams() query: string): Promise<any> {
    console.log(query, '请求的query参数')
    const data = await this.dataMapper.find()
    // const data = await AppDataSource.manager.save(dataMapper) 或者这样可以更灵活可以配合多个实体
    return data
  }

  @Post('/post')
  async post (@Body() body: any): Promise<any> {
    console.log(body, '请求的body参数')
    const newLine = this.dataMapper.create({
      username: body.username,
      password: body.password
    })
    const data = await this.dataMapper.save(newLine)
    return data
  }
}
