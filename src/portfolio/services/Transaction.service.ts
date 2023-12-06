import { Injectable } from "@nestjs/common";
import { CreateTransactionDto } from "../models/dto/Transaction/CreateTransaction";
import { Transaction } from "../models/entities/Transaction";
import { TransactionRepository } from "../repositories/Transaction";


@Injectable()
export class TransactionService {

    constructor(
        private readonly transactionRepository: TransactionRepository
    ) {}

    async getTransactions(): Promise<Transaction[]> {
        // TODO auth check
        // TODO extract user id from request
        // TODO pass user id to repository
        // TODO return transactions
        return this.transactionRepository.getTransactions();

    }

    createTransaction(createTransactionDto: CreateTransactionDto): Transaction {
        // TODO auth check
        // TODO extract user id from request
        // TODO pass user id to repository, along with createTransactionDto
        // TODO return transaction
        return this.transactionRepository.createTransaction(createTransactionDto);
    }

    updateTransaction(updateTransactionInput: any): Transaction {
        throw new Error('Method not implemented.');
    }

    deleteTransaction(deleteTransactionInput: any): Transaction {
        throw new Error('Method not implemented.');
    }

}