import { get } from "http";
import { TransactionType } from "../../enums";
import { CreateTransactionInput } from "../../io/transactions.inputs";

export class CreateTransactionDto {
    private type: TransactionType
    private amount: number
    private priceAtTransaction: number
    private date: Date
    private coinId: string
    private remarks: string


    constructor(){

    }

    setTransactionType(type: TransactionType) {
        this.type = type
    }

    setAmount(amount: number) {
        this.amount = amount
    }

    setPriceAtTransaction(priceAtTransaction: number) {
        this.priceAtTransaction = priceAtTransaction
    }

    setDate(date: Date) {
        this.date = date
    }

    setRemarks(remarks: string) {
        this.remarks = remarks
    }



    setCoinId(coinId: string) {
        this.coinId = coinId
    }

    getTransactionType(): TransactionType {
        return this.type
    }

    getAmount(): number {
        return this.amount
    }

    getPriceAtTransaction(): number {
        return this.priceAtTransaction
    }

    getDate(): Date {
        return this.date
    }

    getCoinId(): string {
        return this.coinId
    }

    getRemarks(): string {
        return this.remarks
    }
}
