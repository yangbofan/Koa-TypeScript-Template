import { DataSource } from 'typeorm'
import dataMapper from './dataMapper'
import activeRecord from './activeRecord'

const AppDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'xxxxxxxx',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: [dataMapper, activeRecord],
  subscribers: [],
  migrations: []
})

export default AppDataSource
