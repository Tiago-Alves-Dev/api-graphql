import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsResolver } from './students.resolver';
import { RepositoryModule } from 'src/shared/repositories/repository.module';

@Module({
  imports: [RepositoryModule],
  providers: [StudentsResolver, StudentsService],
})
export class StudentsModule {}
