import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AuditDto } from 'src/modules/shared/dtos/audit.dto';

@ObjectType()
export class RoomDto extends AuditDto {
  @Field(() => ID)
  roomId: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => String)
  period: string;

  @Field(() => String, { nullable: true })
  hourStart?: string;

  @Field(() => String, { nullable: true })
  hourEnd?: string;

  @Field(() => Boolean)
  isActive: boolean;
}
