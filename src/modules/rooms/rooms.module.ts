import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsResolver } from './rooms.resolver';
import { RepositoryModule } from '../shared/repositories/repository.module';

@Module({
  imports: [RepositoryModule],
  providers: [RoomsResolver, RoomsService],
})
export class RoomsModule {}
