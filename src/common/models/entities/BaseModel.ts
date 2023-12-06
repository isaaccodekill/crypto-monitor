import { Field } from "@nestjs/graphql";
import { BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseModel {


    @Field(type => String)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(type => Date)
    @CreateDateColumn()
    readonly createdAt: Date;

    @Field(type => Date)
    @UpdateDateColumn()
    readonly updatedAt: Date;

    getId(): string {
        return this.id;
    }

    getCreatedAt(): Date {
        return this.createdAt;
    }

    getUpdatedAt(): Date {
        return this.updatedAt;
    }
}
