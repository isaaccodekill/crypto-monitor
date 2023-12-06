import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PortfolioEntry } from './PortfolioEntry';
import { Field, ObjectType } from '@nestjs/graphql';
import { TransactionType } from '../enums';
import { type } from 'os';
import { BaseModel } from 'src/common/models/entities/BaseModel';


@ObjectType({
  implements: () => [BaseModel]
})
@Entity({ name: 'transactions'})
export class Transaction extends BaseModel {

  @Field(type => String)
  @Column()
  coinId: string;

  @Field(type => Number)
  @Column()
  amount: number;

  @Field(type => Number)
  @Column()
  price: number;

  @Field(type => Date)
  @Column()
  date: Date;

  @Field(type => PortfolioEntry)
  @ManyToOne(() => PortfolioEntry, (portfolioEntry) => portfolioEntry.transactions)
  portfolioEntry: PortfolioEntry;

  @Field(type => TransactionType)
  @Column()
  type: TransactionType

  @Field(type => String)
  @Column()
  remarks: string

}
