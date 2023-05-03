import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuditDto {
  @Field({ nullable: true })
  createdAt?: string;

  @Field({ nullable: true })
  createdBy?: string;

  @Field({ nullable: true })
  updatedAt?: string;

  @Field({ nullable: true })
  updatedBy?: string;

  @Field({ nullable: true })
  deletedAt?: string;

  @Field({ nullable: true })
  deletedBy?: string;
}
