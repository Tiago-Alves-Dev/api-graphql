import { InputType, Int, Field, ID } from '@nestjs/graphql';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { AuditDto } from 'src/shared/dtos/audit.dto';

@InputType()
export class CreateUserInput extends AuditDto {
  @IsUUID()
  @IsOptional()
  @Field(() => ID, { nullable: true })
  userId?: string;

  @IsString()
  @IsNotEmpty({ message: 'Invalid characters' })
  @Field(() => String)
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'Invalid E-mail' })
  @Field(() => String)
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @Field(() => String)
  password: string;

  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @IsString()
  @IsNotEmpty({ message: 'Phone is required' })
  @Field(() => String)
  phone: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  image?: string;
}
