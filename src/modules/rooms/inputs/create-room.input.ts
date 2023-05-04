import { InputType, Field, ID } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsOptional,
  IsEmpty,
  IsUUID,
  IsIn,
  IsEnum,
} from 'class-validator';
import { AuditDto } from 'src/shared/dtos/audit.dto';
import { RomPeriodEnum } from 'src/shared/enums/room-period.enum';

@InputType()
export class CreateRoomInput extends AuditDto {
  @IsUUID()
  @IsOptional()
  @Field(() => ID, { nullable: true })
  roomId?: string;

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

  @IsEnum(RomPeriodEnum, { each: true })
  @IsNotEmpty()
  @IsOptional()
  @Field(() => RomPeriodEnum, { nullable: true })
  period: RomPeriodEnum;

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
