import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PortfolioEntry } from "../models/entities"
import { Repository } from "typeorm";
import { CreatePortfolioEntryDto } from "../models/dto/PortfolioEntry/CreatePortfolioEntry";

@Injectable()
export class PortfolioEntryRepository {
    constructor(
        @InjectRepository(PortfolioEntry)
        private readonly portfolioEntryRepository: Repository<PortfolioEntry>
    ){}

    async getPortfolioEntries(): Promise<PortfolioEntry[]> {
        return this.portfolioEntryRepository
            .createQueryBuilder('portfolioEntry')
            .getMany();
    }

    async getPortfolioEntryById(id: string) : Promise<PortfolioEntry> {
        return this.portfolioEntryRepository
            .createQueryBuilder('portfolioEntry')
            .where('portfolioEntry.id = :id', { id: id })
            .getOne();
    }

    async createPortfolioEntry(createPortfolioEntryDto: CreatePortfolioEntryDto): Promise<PortfolioEntry> {
        const portfolioEntry = new PortfolioEntry();
        portfolioEntry.setCoinId(createPortfolioEntryDto.getCoinId());
        portfolioEntry.setPriceBought(createPortfolioEntryDto.getPriceBought());
        portfolioEntry.setAmountOwned(createPortfolioEntryDto.getAmount());

        return this.portfolioEntryRepository.save(portfolioEntry);
    }
}