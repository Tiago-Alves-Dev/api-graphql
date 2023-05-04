import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from 'src/shared/repositories';
import { jwtConstants } from './constants';
import { UserDto } from '../users/dto/user.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private repositoryUser: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: { sub: UserDto['userId']; name: string }) {
    const user = this.repositoryUser.findOne({
      where: { userId: payload.sub },
    });

    if (!user) {
      throw new UnauthorizedException('Unauthorized');
    }

    return user;
  }
}
