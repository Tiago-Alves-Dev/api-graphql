import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { AuthInput } from './dto/auth.input';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthDto)
  public async login(@Args('data') data: AuthInput): Promise<AuthDto> {
    const response = await this.authService.validateUser(data);

    return {
      user: response.user,
      token: response.token,
    };
  }
}
