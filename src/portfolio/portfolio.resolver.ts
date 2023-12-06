import { Resolver } from '@nestjs/graphql';

@Resolver()
export class PortfolioResolver {
  constructor() {} // private readonly portfolioService: PortfolioService,

  @Query((returns) => [PortfolioEntry])
  async getPortfolioEntries(): Promise<PortfolioEntry[]> {
    return [];
  }

}
