export class CreatePortfolioEntryDto {
    private coinId: string;
    private amount: number;
    private priceBought: number;

    constructor() {

    }

    public getCoinId(): string {
        return this.coinId;
    }

    public setCoinId(coinId: string): void {
        this.coinId = coinId;
    }

    public getAmount(): number {
        return this.amount;
    }

    public setAmount(amount: number): void {
        this.amount = amount;
    }

    public getPriceBought(): number {
        return this.priceBought;
    }

    public setPriceBought(priceBought: number): void {
        this.priceBought = priceBought;
    }
}

