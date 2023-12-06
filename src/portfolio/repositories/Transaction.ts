import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseEntity, Repository } from "typeorm";
import { Transaction } from "../models/entities/Transaction";
import { CreateTransactionDto } from "../models/dto/Transaction/CreateTransaction";

@Injectable()
export class TransactionRepository {
    constructor(
        @InjectRepository(Transaction)
        private transactionRepository: Repository<Transaction>
    ) {
    }

    async getTransactions(): Promise<Transaction[]> {
        const transactions = this.transactionRepository
                .createQueryBuilder('transaction')
                .getMany();
        return transactions;

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