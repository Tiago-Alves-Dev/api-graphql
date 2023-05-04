import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as repositories from './';
import * as entities from '../entities';

@Module({
  imports: [TypeOrmModule.forFeature(Object.values(entities))],
  providers: Object.values(repositories),
  exports: Object.values(repositories),
})
export class RepositoryModule {}
