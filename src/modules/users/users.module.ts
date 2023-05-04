import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { RepositoryModule } from 'src/shared/repositories/repository.module';

@Module({
  imports: [RepositoryModule],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
