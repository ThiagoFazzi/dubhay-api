import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString} from 'class-validator'


@Entity()
export default class Sensor extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', { nullable: true })
  macAddres?: string

  @IsString()
  @Column('text', { nullable: true })
  status?: string

  @IsString()
  @Column('text', { nullable: true })
  type?: string

  @IsString()
  @Column('text', { nullable: true })
  value?: string

  @Column('date', { nullable: true })
  date?: Date

  @Column('date', { nullable: true })
  created?: Date
}
