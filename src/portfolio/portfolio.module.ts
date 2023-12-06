import { Module } from '@nestjs/common';
import { PortfolioResolver } from './portfolio.resolver';
import { TransactionsResolver } from './transactions.resolver';
import { TransactionService } from './services/Transaction.service';


@Module({
    providers: [
        PortfolioResolver,
        TransactionsResolver,
        TransactionService
    ]
})
export class PortfolioModule {}
