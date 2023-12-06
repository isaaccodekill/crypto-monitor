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

    async getTransactionById(id: string): Promise<Transaction> {
        const transaction = this.transactionRepository
                .createQueryBuilder('transaction')
                .where('transaction.id = :id', { id: id })
                .getOne();
        return transaction;
    }

    async createTransaction(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
        const transaction = new Transaction();
        transaction.setCoinId(createTransactionDto.getCoinId());
        transaction.setAmount(createTransactionDto.getAmount());
        transaction.setDate(createTransactionDto.getDate());
        transaction.setPrice(createTransactionDto.getPriceAtTransaction());
        transaction.setType(createTransactionDto.getTransactionType());
        transaction.setRemarks(createTransactionDto.getRemarks());

       return this.transactionRepository.save(transaction);
    }

    updateTransaction(updateTransactionInput: any): Transaction {
        throw new Error('Method not implemented.');
    }

    deleteTransaction(deleteTransactionInput: any): Transaction {
        throw new Error('Method not implemented.');
    }
}