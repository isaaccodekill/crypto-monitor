import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Transaction } from "./Transaction";
import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "src/common/models/entities/BaseModel";


// a portfolio entry happens when a user buys or sells a coin
// it is a record of the transaction for a particular coin
// over time, a user will have one portfolio entry for each coin type
// and each portfolio entry will have many transactions
// for example, a user may have a portfolio entry for BTC
// and that portfolio entry will have many transactions
// each transaction will have a date, amount, and price
// the portfolio entry will have a amount_owned field and a price_bought field

@ObjectType({
    implements: () => [BaseModel]
})
@Entity({ name: 'portfolio_entries' })
export class PortfolioEntry extends BaseModel {

    @Field(type => String)
    @Column()
    coinId: string;

    @Field(type => Number)
    @Column()
    amountOwned: number;

    @Field(type => Number)
    @Column()
    priceBought: number;

    @Field(type => [Transaction])
    @OneToMany(() => Transaction, (transaction) => transaction.portfolioEntry)
    transactions: Transaction[];

    // Getters and Setters
    getCoinId(): string {
        return this.coinId;
    }

    setCoinId(coinId: string): void {
        this.coinId = coinId;
    }

    getAmountOwned(): number {
        return this.amountOwned;
    }

    setAmountOwned(amountOwned: number): void {
        this.amountOwned = amountOwned;
    }

    getPriceBought(): number {
        return this.priceBought;
    }

    setPriceBought(priceBought: number): void {
        this.priceBought = priceBought;
    }

    getTransactions(): Transaction[] {
        return this.transactions;
    }

    setTransactions(transactions: Transaction[]): void {
        this.transactions = transactions;
    }
}