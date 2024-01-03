import { Entity, Column, PrimaryColumn } from 'typeorm'

// data-mapper 实体模式 https://www.typeorm.org/#%E5%88%9B%E5%BB%BA%E6%A8%A1%E5%9E%8B
@Entity('data_mapper')
export default class DataMapper {
  @PrimaryColumn()
    username: string

  @Column()
    password: string
}
