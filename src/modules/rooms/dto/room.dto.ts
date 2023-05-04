import { Field, ID, ObjectType } from '@nestjs/graphql';
import { StudentDto } from 'src/modules/students/dto/student.dto';
import { AuditDto } from 'src/shared/dtos/audit.dto';

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

  @Field(() => [StudentDto], { nullable: true })
  students?: StudentDto[];
}
