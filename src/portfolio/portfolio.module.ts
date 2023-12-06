import { Module } from '@nestjs/common';
import { PortfolioResolver } from './portfolio.resolver';
import { TransactionsResolver } from './transactions.resolver';
import { TransactionService } from './services/Transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './models/entities';
import { TransactionRepository } from './repositories/Transaction';


@Module({
    imports: [TypeOrmModule.forFeature([Transaction])],
    providers: [
        PortfolioResolver,
        TransactionsResolver,
        TransactionService,
        TransactionRepository,
    ]
})
export class PortfolioModule {}
