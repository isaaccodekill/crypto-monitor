import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Transaction } from "./Transaction";


// a portfolio entry happens when a user buys or sells a coin
// it is a record of the transaction for a particular coin
// over time, a user will have one portfolio entry for each coin type
// and each portfolio entry will have many transactions
// for example, a user may have a portfolio entry for BTC
// and that portfolio entry will have many transactions
// each transaction will have a date, amount, and price
// the portfolio entry will have a amount_owned field and a price_bought field

@Entity()
export class PortfolioEntry {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    coinId: string;

    @Column()
    amountOwned: number;

    @Column()
    priceBought: number;

    @OneToMany(() => Transaction, (transaction) => transaction.portfolioEntry)
    transactions: Transaction[];

}

