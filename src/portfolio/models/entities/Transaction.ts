import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PortfolioEntry } from './PortfolioEntry';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  coinId: string;

  @Column()
  amount: number;

  @Column()
  price: number;

  @Column()
  date: Date;

  @ManyToOne(() => PortfolioEntry, (portfolioEntry) => portfolioEntry.transactions)
  portfolioEntry: PortfolioEntry;

}
