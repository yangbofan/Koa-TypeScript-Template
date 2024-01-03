import { DataSource } from 'typeorm'
import dataMapper from './dataMapper'
import activeRecord from './activeRecord'

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'xxxxxx',
  port: 3306,
  username: 'root',
  password: 'xxxxxx',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: [dataMapper, activeRecord],
  subscribers: [],
  migrations: []
})

export default AppDataSource
