import { CreateTransactionDto } from "../models/dto/Transaction/CreateTransaction";
import { Transaction } from "../models/entities/Transaction";

export class TransactionService {

    getTransactions(): Transaction[] {
        throw new Error('Method not implemented.');
    }

    createTransaction(createTransactionDto: CreateTransactionDto): Transaction {
        throw new Error('Method not implemented.');
    }

    updateTransaction(updateTransactionInput: any): Transaction {
        throw new Error('Method not implemented.');
    }

    deleteTransaction(deleteTransactionInput: any): Transaction {
        throw new Error('Method not implemented.');
    }

}