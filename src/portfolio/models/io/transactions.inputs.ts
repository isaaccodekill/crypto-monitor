import { InputType, Field } from '@nestjs/graphql';
import { IsDate } from 'class-validator';
import { TransactionType } from '../enums';

@InputType()
export class CreateTransactionInput {
  @Field({ nullable: false })
  coinId: string;

  @Field({ nullable: false })
  amount: number;

  @Field({ nullable: false })
  priceAtTransaction: number;

  @Field({ nullable: false })
  @IsDate()
  date: Date;

  @Field({ nullable: false })
  type: TransactionType;

  @Field({ nullable: false })
  remarks: string;
}

@InputType()
export class UpdateTransactionInput {
  @Field({ nullable: false })
  transactionId: string;

  @Field({ nullable: false })
  amount: number;

  @Field({ nullable: false })
  priceAtTransaction: number;

  @Field({ nullable: false })
  @IsDate()
  date: Date;
}

@InputType()
export class DeleteTransactionInput {
  @Field({ nullable: false })
  id: string;
}
