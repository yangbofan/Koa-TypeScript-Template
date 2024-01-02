import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm'

// active-record 实体模式 https://www.typeorm.org/#%E5%88%9B%E5%BB%BA%E6%A8%A1%E5%9E%8B
@Entity()
export default class ActiveRecord extends BaseEntity {
  @PrimaryColumn()
    mode: string

  @Column()
    test: string
}
