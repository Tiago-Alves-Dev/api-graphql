import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { AuditDto } from 'src/shared/dtos/audit.dto';

@InputType()
export class CreateUserInput extends AuditDto {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => ID)
  userId: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  password: string;

  @IsBoolean()
  @IsNotEmpty()
  @Field(() => Boolean, { nullable: true })
  isActive: boolean;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  cpf: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  phone: string;
}
