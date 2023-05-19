import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/shared/repositories';
import { AuthInput } from './dto/auth.input';
import { AuthDto } from './dto/auth.dto';
import { compareSync } from 'bcrypt';
import { UserDto } from '../users/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private repositoryUser: UserRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(data: AuthInput): Promise<AuthDto> {
    const user = await this.repositoryUser.findOne({
      where: { email: data.email },
    });

    if (!user) {
      throw new NotFoundException('Incorrect email');
    }

    const validPasssword = compareSync(data.password, user.password);

    if (!validPasssword) {
      throw new NotFoundException('Incorrect password');
    }

    const accessToken = await this.jwtToken(user);

    return {
      user,
      accessToken,
    };
  }

  private async jwtToken(user: UserDto): Promise<string> {
    const payload = { username: user.name, sub: user.userId };
    return this.jwtService.signAsync(payload);
  }
}
