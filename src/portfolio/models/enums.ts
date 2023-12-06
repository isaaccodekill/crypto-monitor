import { registerEnumType } from "@nestjs/graphql";

export enum TransactionType {
  BUY = 'BUY',
  SELL = 'SELL',
}


registerEnumType(TransactionType, {
  name: 'TransactionType',
  description: 'The type of transactions that can be made',
})