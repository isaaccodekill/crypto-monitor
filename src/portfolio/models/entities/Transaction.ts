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
  @Column('decimal')
  amount: number;

  @Field(type => Number)
  @Column('decimal')
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

  // Getters and Setters

  getCoinId(): string {
    return this.coinId;
  }

  setCoinId(coinId: string): void {
    this.coinId = coinId;
  }

  getAmount(): number {
    return this.amount;
  }

  setAmount(amount: number): void {
    this.amount = amount;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(price: number): void {
    this.price = price;
  }

  getDate(): Date {
    return this.date;
  }

  setDate(date: Date): void {
    this.date = date;
  }

  getPortfolioEntry(): PortfolioEntry {
    return this.portfolioEntry;
  }

  setPortfolioEntry(portfolioEntry: PortfolioEntry): void {
    this.portfolioEntry = portfolioEntry;
  }

  getType(): TransactionType {
    return this.type;
  }

  setType(type: TransactionType): void {
    this.type = type;
  }

  getRemarks(): string {
    return this.remarks;
  }

  setRemarks(remarks: string): void {
    this.remarks = remarks;
  }
}
