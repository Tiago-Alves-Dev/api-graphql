import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class AuthInput {
  @IsString()
  @IsNotEmpty({ message: 'Invalid E-mail' })
  @IsEmail()
  @Field(() => String)
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Password requerid' })
  @Field(() => String)
  password: string;
}
