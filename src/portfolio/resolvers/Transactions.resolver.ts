import {
  CreateTransactionInput,
  UpdateTransactionInput,
  DeleteTransactionInput,
} from '../models/io/transactions.inputs';
import { Transaction } from '../models/entities/Transaction';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TransactionService } from '../services/Transaction.service';
import { CreateTransactionDto } from '../models/dto/Transaction/CreateTransaction';

@Resolver((of) => Transaction)
export class TransactionsResolver {
  constructor(private readonly transactionsService: TransactionService) { }

  @Query((returns) => [Transaction])
  async getTransactions(): Promise<Transaction[]> {
    return this.transactionsService.getTransactions();
  }

  @Mutation((returns) => Transaction)
  async createTransaction(
    @Args('createTransactionInput')
    createTransactionInput: CreateTransactionInput,
  ): Promise<Transaction> {
    const createTransactionDto = new CreateTransactionDto()
    createTransactionDto.setTransactionType(createTransactionInput.type)
    createTransactionDto.setDate(createTransactionInput.date)
    createTransactionDto.setAmount(createTransactionInput.amount)
    createTransactionDto.setRemarks(createTransactionInput.remarks)
    createTransactionDto.setCoinId(createTransactionInput.coinId)
    createTransactionDto.setPriceAtTransaction(createTransactionInput.priceAtTransaction)

    return this.transactionsService.createTransaction(createTransactionDto);
  }

  @Mutation((returns) => Transaction)
  async updateTransaction(
    @Args('updateTransactionInput')
    updateTransactionInput: UpdateTransactionInput,
  ): Promise<Transaction> {
    return this.transactionsService.updateTransaction(updateTransactionInput);
  }

  @Mutation((returns) => Transaction)
  async deleteTransaction(
    @Args('deleteTransactionInput')
    deleteTransactionInput: DeleteTransactionInput,
  ): Promise<Transaction> {
    return this.transactionsService.deleteTransaction(deleteTransactionInput);
  }
}
