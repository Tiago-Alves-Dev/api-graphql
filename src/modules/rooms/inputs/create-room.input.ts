import { InputType, Field } from '@nestjs/graphql';
import { RoomDto } from '../dto/room.dto';
import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsOptional,
  IsEmpty,
} from 'class-validator';

@InputType()
export class CreateRoomInput extends RoomDto {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  description: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  image?: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  period: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  hourStart?: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  hourEnd?: string;

  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  isActive: boolean;
}
