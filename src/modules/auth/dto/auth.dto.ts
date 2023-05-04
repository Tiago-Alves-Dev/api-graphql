import { Field, ObjectType } from '@nestjs/graphql';
import { UserDto } from 'src/modules/users/dto/user.dto';

@ObjectType()
export class AuthDto {
  @Field(() => UserDto)
  user: UserDto;

  @Field(() => String)
  token: string;
}
