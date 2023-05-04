import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { RepositoryModule } from 'src/shared/repositories/repository.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    RepositoryModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiressIn },
    }),
  ],
  providers: [AuthResolver, AuthService, JwtStrategy],
})
export class AuthModule {}
