import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { AuditDto } from 'src/shared/dtos/audit.dto';

@ObjectType()
export class UserDto extends AuditDto {
  @Field(() => ID)
  userId?: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @HideField()
  password: string;

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @Field(() => String)
  phone: string;
}
