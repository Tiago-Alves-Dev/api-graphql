import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { RoomDto } from 'src/modules/rooms/dto/room.dto';
import { AuditDto } from 'src/shared/dtos/audit.dto';

@ObjectType()
export class StudentDto extends AuditDto {
  @Field(() => ID)
  studentId: string;

  @Field(() => String)
  roomId: string;

  @Field(() => String)
  registration: string;

  @Field(() => String)
  name: string;

  @Field(() => Number)
  age: number;

  @Field(() => String)
  birth: Date;

  @Field(() => String)
  email: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  mother: string;

  @Field(() => String)
  father: string;

  @Field(() => String, { nullable: true })
  photo: string;

  @Field(() => String)
  cpf: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => Number, { nullable: true })
  addressNumber?: string;

  @Field(() => String, { nullable: true })
  addressComplement?: string;

  @Field(() => String, { nullable: true })
  district?: string;

  @Field(() => String, { nullable: true })
  zipcode?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  state?: string;

  @Field(() => RoomDto, { nullable: true })
  room?: RoomDto;
}
