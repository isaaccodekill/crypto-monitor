import { Resolver, Query } from '@nestjs/graphql';
import { PortfolioEntry } from './models/entities/PortfolioEntry';

@Resolver()
export class PortfolioResolver {
  constructor() {} // private readonly portfolioService: PortfolioService,

  @Query((returns) => [PortfolioEntry])
  async getPortfolioEntries(): Promise<PortfolioEntry[]> {
    return [];
  }

}
