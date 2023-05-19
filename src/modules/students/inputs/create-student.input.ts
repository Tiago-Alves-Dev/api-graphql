import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { StudentDto } from '../dto/student.dto';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { AuditDto } from 'src/shared/dtos/audit.dto';

@InputType()
export class CreateStudentInput extends AuditDto {
  @IsUUID()
  @IsOptional()
  @Field(() => ID, { nullable: true })
  studentId?: string;

  @IsUUID()
  @IsNotEmpty()
  @Field(() => ID)
  roomId: string;

  @IsString()
  @Field(() => String)
  registration: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @Field(() => Number)
  age: number;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  birth: Date;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @Field(() => String)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  phone: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  mother: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  father: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  photo: string;

  @IsString()
  @IsOptional()
  @Field(() => String)
  cpf: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  address?: string;

  @IsNumber()
  @IsOptional()
  @Field(() => Number, { nullable: true })
  addressNumber?: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  addressComplement?: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  zipcode?: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  city?: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  state?: string;

  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  isActive: boolean;
}
