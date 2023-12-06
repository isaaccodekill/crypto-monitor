import { Injectable } from "@nestjs/common";
import { PortfolioEntry } from "../models/entities";
import { PortfolioEntryRepository } from "../repositories/PortfolioEntry";
import { CreatePortfolioEntryDto } from "../models/dto/PortfolioEntry/CreatePortfolioEntry";

@Injectable()
export class PortfolioEntryService {
    constructor (
        private readonly portfolioEntryRepository: PortfolioEntryRepository
    ) {}

    async getPortfolioEntries(): Promise<PortfolioEntry[]> {
        return this.portfolioEntryRepository.getPortfolioEntries();
    }

    async getPortfolioEntryById(id: string): Promise<PortfolioEntry>{
        return this.portfolioEntryRepository.getPortfolioEntryById(id);
    }

    async createPortfolioEntry(createPortfolioEntryDto: CreatePortfolioEntryDto): Promise<PortfolioEntry> {
        return this.portfolioEntryRepository.createPortfolioEntry(createPortfolioEntryDto);
    }

    // async updatePortfolioEntry(updatePortfolioEntryDto: UpdatePortfolioEntryDto): Promise<PortfolioEntry> {
    //     return this.portfolioRepository.updatePortfolioEntry(updatePortfolioEntryDto);
    // }

    // async deletePortfolioEntry(deletePortfolioEntryDto: DeletePortfolioEntryDto): Promise<PortfolioEntry> {
    //     return this.portfolioRepository.deletePortfolioEntry(deletePortfolioEntryDto);
    // }
}