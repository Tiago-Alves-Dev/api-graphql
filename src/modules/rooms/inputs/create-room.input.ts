import { InputType, Field } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsOptional,
  IsEmpty,
} from 'class-validator';
import { AuditDto } from 'src/shared/dtos/audit.dto';

@InputType()
export class CreateRoomInput extends AuditDto {
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
  // @IsIn(['COUPON', 'REVERSAL', 'OTHER'])

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
