import {
  CreateTransactionInput,
  UpdateTransactionInput,
  DeleteTransactionInput,
} from './models/io/transactions.inputs';

@Resolver((of) => Transaction)
export class TransactionsResolver {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Query((returns) => [Transaction])
  async getTransactions(): Promise<Transaction[]> {
    return this.transactionsService.getTransactions();
  }

  @Mutation((returns) => Transaction)
  async createTransaction(
    @Args('createTransactionInput')
    createTransactionInput: CreateTransactionInput,
  ): Promise<Transaction> {
    return this.transactionsService.createTransaction(createTransactionInput);
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
