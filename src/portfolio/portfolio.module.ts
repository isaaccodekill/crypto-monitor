import { Module } from '@nestjs/common';
import { PortfolioResolver } from './resolvers/PortfolioEntry.resolver';
import { TransactionsResolver } from './resolvers/Transactions.resolver';
import { TransactionService } from './services/Transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfolioEntry, Transaction } from './models/entities';
import { TransactionRepository } from './repositories/Transaction';


@Module({
    imports: [TypeOrmModule.forFeature([Transaction, PortfolioEntry])],
    providers: [
        PortfolioResolver,
        TransactionsResolver,
        TransactionService,
        TransactionRepository,
    ]
})
export class PortfolioModule { }
